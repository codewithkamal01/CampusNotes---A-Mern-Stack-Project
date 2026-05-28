function QuizHeader({
  currentQuestion,
  questions,
  score,
  timeLeft,
  finishQuiz,
  formatTime,
}) {
  return (
    <div className="relative flex items-center justify-between mb-4">
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
          className="px-4 py-2 cursor-pointer rounded-2xl text-xs font-medium bg-red-500 hover:bg-red-600 text-white transition-all duration-200 hover:scale-105"
        >
          Finish
        </button>
      </div>
    </div>
  );
}

export default QuizHeader;
