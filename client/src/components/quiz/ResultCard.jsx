import GlassCard from "./GlassCard";

function ResultCard({
  score,
  questions,
  percentage,
  timeLeft,
  restartQuiz,
  formatTime,
}) {
  return (
    <GlassCard className="max-w-md max-h-[92dvh] mt-15 p-4 sm:p-5 text-center">
      {/* Top Badge */}
      <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-xl shadow-blue-500/20 mb-3">
        <span className="text-3xl">🎉</span>
      </div>

      {/* Title */}
      <h1 className="relative text-xl sm:text-2xl font-bold text-zinc-800 dark:text-white mb-1">
        Quiz Completed
      </h1>

      <p className="relative text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        Great job completing the quiz
      </p>

      {/* Score Card */}
      <div className="relative rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-4 mb-4">
        <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-3">
          Final Score
        </p>

        <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
          {score}/{questions.length}
        </div>

        <p className="text-base font-medium text-zinc-600 dark:text-zinc-300">
          {percentage}% Correct Answers
        </p>
      </div>

      {/* Stats */}
      <div className="relative grid grid-cols-2 gap-2 mb-5">
        <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-3">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
            Correct
          </p>

          <h3 className="text-xl font-bold text-green-600 dark:text-green-400">
            {score}
          </h3>
        </div>

        <div className="rounded-2xl border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-3">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
            Time Left
          </p>

          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            {formatTime(timeLeft)}
          </h3>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={restartQuiz}
        className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
      >
        Restart Quiz
      </button>
    </GlassCard>
  );
}

export default ResultCard;
