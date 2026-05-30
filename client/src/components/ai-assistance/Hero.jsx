import React from "react";
import { Sparkles } from "lucide-react";

function Hero() {
  return (
    <div className="text-center mb-6">
      <div
        className="
    inline-flex
    items-center
    gap-2
    px-4
    py-2
    rounded-full
    bg-blue-100
    text-blue-700
    dark:bg-blue-500/10
    dark:text-blue-400
    border
    border-blue-200
    dark:border-blue-500/20
    backdrop-blur-md
    mb-4
  "
      >
        <Sparkles size={16} />
        AI Powered Learning
      </div>
      <p
        className="
    text-base
    md:text-lg
    text-slate-600
    dark:text-slate-400
    max-w-2xl
    mx-auto
  "
      >
        Learn faster with AI-generated explanations, MCQs, flashcards and
        personalized study plans.
      </p>
    </div>
  );
}

export default Hero;
