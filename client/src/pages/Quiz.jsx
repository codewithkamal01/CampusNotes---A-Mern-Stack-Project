import React, { useEffect, useState } from "react";
import quizData from "../data/quizData";
import QuizLayout from "../components/quiz/QuizLayout";
import FloatingBackground from "../components/quiz/FloatingBackground";
import GlassCard from "../components/quiz/GlassCard";
import QuizHeader from "../components/quiz/QuizHeader";
import ProgressBar from "../components/quiz/ProgressBar";
import QuestionCard from "../components/quiz/QuestionCard";
import OptionButton from "../components/quiz/OptionButton";
import ResultCard from "../components/quiz/ResultCard";

function Quiz() {
  const QUIZ_TIME = 119;

  /* ---------------- SHUFFLE ---------------- */
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  /* ---------------- STATES ---------------- */
  const [questions, setQuestions] = useState(shuffleArray(quizData));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME);

  /* ---------------- CURRENT QUESTION ---------------- */
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

  /* ---------------- HANDLE ANSWER ---------------- */
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

  /* ---------------- RESTART QUIZ ---------------- */
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
      <QuizLayout>
        <FloatingBackground />
        <ResultCard
          score={score}
          questions={questions}
          percentage={percentage}
          timeLeft={timeLeft}
          restartQuiz={restartQuiz}
          formatTime={formatTime}
        />
      </QuizLayout>
    );
  }

  /* ---------------- QUIZ PAGE ---------------- */
  return (
    <QuizLayout>
      <FloatingBackground />
      <GlassCard className="max-w-xl mt-13 max-h-[92dvh] p-4 sm:p-5">
        {/* Header */}
        <QuizHeader
          currentQuestion={currentQuestion}
          questions={questions}
          score={score}
          timeLeft={timeLeft}
          finishQuiz={finishQuiz}
          formatTime={formatTime}
        />

        {/* Progress */}
        <ProgressBar
          currentQuestion={currentQuestion}
          questions={questions}
          showAnswer={showAnswer}
        />

        {/* Question */}
        <QuestionCard question={question} />

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <OptionButton
              key={index}
              option={option}
              index={index}
              handleAnswer={handleAnswer}
              showAnswer={showAnswer}
              getOptionStyle={getOptionStyle}
            />
          ))}
        </div>

        {/* Next Button */}
        {showAnswer && (
          <div className="mt-5 flex justify-end">
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
      </GlassCard>
    </QuizLayout>
  );
}

export default Quiz;
