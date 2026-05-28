function QuestionCard({ question }) {
  return (
    <div className="mb-6">
      <h1 className="text-lg sm:text-xl md:text-2xl leading-snug font-bold text-zinc-800 dark:text-white">
        {question.question}
      </h1>
    </div>
  );
}

export default QuestionCard;
