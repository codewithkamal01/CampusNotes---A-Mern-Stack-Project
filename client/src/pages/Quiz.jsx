import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import quizData from "../data/quizData";

function Quiz() {
  const QUIZ_TIME = 150;

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [questions, setQuestions] = useState(shuffleArray(quizData));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME);

  const question = questions[currentQuestion];

  /* ---------------- TIMER ---------------- */

  useEffect(() => {
    if (quizFinished) return;

    if (timeLeft === 0) {
      finishQuiz();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quizFinished]);

  /* ---------------- FORMAT TIME ---------------- */

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  /* ---------------- ANSWER ---------------- */

  const handleAnswer = (option) => {
    if (showAnswer) return;

    setSelectedAnswer(option);
    setShowAnswer(true);

    if (option === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  /* ---------------- NEXT QUESTION ---------------- */

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      finishQuiz();
    }
  };

  /* ---------------- FINISH QUIZ ---------------- */

  const finishQuiz = () => {
    setQuizFinished(true);
  };

  /* ---------------- RESTART ---------------- */

  const restartQuiz = () => {
    setQuestions(shuffleArray(quizData));
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setQuizFinished(false);
    setTimeLeft(QUIZ_TIME);
  };

  /* ---------------- OPTION STYLE ---------------- */

  const getOptionStyle = (option) => {
    if (!showAnswer) {
      return `
      bg-white/70 dark:bg-white/[0.03]
      border-zinc-200 dark:border-white/10
      hover:border-blue-400 dark:hover:border-blue-500
      hover:bg-blue-50 dark:hover:bg-blue-500/10
      text-zinc-700 dark:text-zinc-200
    `;
    }

    if (option === question.answer) {
      return `
      bg-green-500/10
      border-green-500
      text-green-700 dark:text-green-400
      shadow-lg shadow-green-500/10
    `;
    }

    if (option === selectedAnswer && option !== question.answer) {
      return `
      bg-red-500/10
      border-red-500
      text-red-700 dark:text-red-400
      shadow-lg shadow-red-500/10
    `;
    }

    return `
    bg-zinc-100 dark:bg-white/[0.03]
    border-zinc-200 dark:border-white/5
    opacity-50
    text-zinc-500 dark:text-zinc-500
  `;
  };

  /* ---------------- RESULT PAGE ---------------- */

  if (quizFinished) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="h-screen overflow-hidden bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-[#09090B] dark:via-[#111827] dark:to-[#0F172A] flex justify-center items-center p-4 transition-all duration-300">
        <div className="relative w-full max-w-md rounded-3xl border border-white/10 dark:border-white/5 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl shadow-2xl overflow-hidden p-5 text-center">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/10 pointer-events-none" />

          {/* Top Badge */}
          <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-xl shadow-blue-500/20 mb-3">
            <span className="text-3xl">🎉</span>
          </div>

          {/* Title */}
          <h1 className="relative text-2xl font-bold text-zinc-800 dark:text-white mb-1">
            Quiz Completed
          </h1>

          <p className="relative text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            Great job completing the quiz
          </p>

          {/* Score Card */}
          <div className="relative rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-4 mb-6">
            <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3">
              Final Score
            </p>

            <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
              {score}/{questions.length}
            </div>

            <p className="text-base font-medium text-zinc-600 dark:text-zinc-300">
              {percentage}% Correct Answers
            </p>
          </div>

          {/* Stats */}
          <div className="relative grid grid-cols-2 gap-2 mb-7">
            <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-3">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                Correct
              </p>

              <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
                {score}
              </h3>
            </div>

            <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-4">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                Time Left
              </p>

              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                {formatTime(timeLeft)}
              </h3>
            </div>
          </div>

          {/* Buttons */}
          <div className="relative flex items-center gap-3">
            <button
              onClick={restartQuiz}
              className="flex-1 cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
            >
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- QUIZ PAGE ---------------- */

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-[#09090B] dark:via-[#111827] dark:to-[#0F172A] flex items-center justify-center p-4 transition-all duration-300">
      <div className="relative w-full max-w-xl rounded-3xl border border-white/10 dark:border-white/5 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl shadow-2xl p-6">
        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

        {/* Top */}
        <div className="relative flex items-center justify-between mb-5">
          <div>
            <p className="text-xs tracking-wide uppercase text-zinc-500 dark:text-zinc-400">
              Question {currentQuestion + 1} of {questions.length}
            </p>

            <h2 className="text-sm font-semibold text-zinc-700 dark:text-zinc-200 mt-1">
              Score: {score}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {/* Timer */}
            <div
              className={`
              px-4 py-2 rounded-2xl text-xs font-semibold border
              transition-all duration-300
              ${
                timeLeft <= 10
                  ? "bg-red-500 text-white border-red-400 shadow-lg shadow-red-500/30"
                  : "bg-white/60 dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-200"
              }
            `}
            >
              ⏱ {formatTime(timeLeft)}
            </div>

            {/* Finish */}
            <button
              onClick={finishQuiz} 
              className="px-4 py-2 cursor-pointer  rounded-2xl text-xs font-medium bg-red-500 hover:bg-red-600 text-white transition-all duration-200 hover:scale-105"
            >
              Finish
            </button>
          </div>
        </div>

        {/* Progress */}
        <div className="relative w-full h-3 bg-zinc-200 dark:bg-white/10 rounded-full overflow-hidden mb-7">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 transition-all duration-500"
            style={{
              width: `${
                ((showAnswer ? currentQuestion + 1 : currentQuestion) /
                  questions.length) *
                100
              }%`,
            }}
          />
        </div>

        {/* Question */}
        <div className="mb-6">
          <h1 className="text-2xl leading-relaxed font-bold text-zinc-800 dark:text-white">
            {question.question}
          </h1>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={showAnswer}
              className={`
              group w-full text-left border rounded-2xl px-4 py-3.5
              transition-all duration-300 text-sm font-medium
              hover:scale-[1.01]
              ${getOptionStyle(option)}
            `}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-xs font-bold">
                  {String.fromCharCode(65 + index)}
                </div>

                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom */}
        {showAnswer && (
          <div className="mt-7 flex justify-end">
            <button
              onClick={handleNextQuestion}
              className="px-6 py-2.5 cursor-pointer rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20"
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
