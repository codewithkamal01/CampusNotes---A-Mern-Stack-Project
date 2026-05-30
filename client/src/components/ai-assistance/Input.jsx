import React, { useRef } from "react";
import { SendHorizontal } from "lucide-react";

function Input({ sendMessage, loading, prompt, setPrompt }) {
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setPrompt(e.target.value);

    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (!prompt.trim() || loading) return;

      sendMessage();

      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.style.height = "24px";
        }
      }, 0);
    }
  };

  const handleSend = () => {
    if (!prompt.trim() || loading) return;

    sendMessage();

    if (textareaRef.current) {
      textareaRef.current.style.height = "24px";
    }
  };

  return (
    <div
      className="
      shrink-0
      border-t
      border-slate-200
      dark:border-slate-800
      bg-white/80
      dark:bg-slate-900/80
      backdrop-blur-xl
      p-4
    "
    >
      <div
        className="
        flex
        items-end
        gap-3
        rounded-3xl
        border
        border-slate-200
        dark:border-slate-700
        bg-white
        dark:bg-slate-800
        px-4
        py-3
        shadow-sm
        focus-within:ring-2
        focus-within:ring-blue-500/20
        focus-within:border-blue-500
        transition-all
      "
      >
        <textarea
          ref={textareaRef}
          rows={1}
          value={prompt}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about your studies..."
          className="
          flex-1
          resize-none
          bg-transparent
          text-slate-900
          dark:text-white
          placeholder:text-slate-400
          outline-none
          leading-6
          max-h-40
          min-h-[36px]
          md:min-h-[48px]
          overflow-y-auto
          scrollbar-none
        "
        />

        <button
          onClick={handleSend}
          aria-label="Send message"
          disabled={!prompt.trim() || loading}
          className="
          h-10
          w-10
          md:h-12
          md:w-12
          shrink-0
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          text-white
          flex
          items-center
          justify-center
          shadow-lg
          shadow-blue-500/20
          transition-all
          duration-200
          hover:scale-105
          active:scale-95
          disabled:opacity-50
          disabled:cursor-not-allowed
          disabled:hover:scale-100
        "
        >
          <SendHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}

export default Input;
