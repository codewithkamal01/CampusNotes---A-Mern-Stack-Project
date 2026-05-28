function OptionButton({
  option,
  index,
  handleAnswer,
  showAnswer,
  getOptionStyle,
}) {
  return (
    <button
      onClick={() => handleAnswer(option)}
      disabled={showAnswer}
      className={`
        group w-full text-left border rounded-2xl
        px-3 py-3 sm:px-4 sm:py-3.5
        transition-all duration-300
        text-sm font-medium
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
  );
}

export default OptionButton;
