function ProgressBar({ currentQuestion, questions, showAnswer }) {
  return (
    <div className="relative w-full h-3 bg-zinc-200 dark:bg-white/10 rounded-full overflow-hidden mb-5">
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
  );
}

export default ProgressBar;
