import React from "react";
import { Sparkles } from "lucide-react";

function Hero() {
  return (
    <div className="text-center mb-8 sm:mb-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 backdrop-blur-md mb-4">
        <Sparkles size={16} />
        AI Powered Learning
      </div>

      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
        AI Study Hub for smarter revision
      </h1>

      <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-7">
        Learn quickly with clear, structured AI responses. Ask for explanations,
        flashcards, MCQs, summaries or study plans in one helpful assistant.
      </p>
    </div>
  );
}

export default Hero;
