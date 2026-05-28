function QuizLayout({ children }) {
  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-[#09090B] dark:via-[#111827] dark:to-[#0F172A] flex items-center justify-center p-3 sm:p-4 transition-all duration-300">
      {children}
    </div>
  );
}

export default QuizLayout;
