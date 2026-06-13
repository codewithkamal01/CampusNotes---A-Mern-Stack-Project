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
    <div className="shrink-0 border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl px-4 py-3">
      <div className="flex flex-col gap-2">
        <div
          className="
        flex items-end gap-2
        rounded-2xl
        border border-slate-200 dark:border-slate-700
        bg-white dark:bg-slate-800
        px-3 py-2
        shadow-sm
        transition-all
        focus-within:border-blue-500
        focus-within:ring-2
        focus-within:ring-blue-500/10
      "
        >
          <textarea
            ref={textareaRef}
            rows={1}
            value={prompt}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            className="
          flex-1
          resize-none
          bg-transparent
          text-base
          text-slate-900
          dark:text-white
          placeholder:text-slate-400
          outline-none
          leading-6
          min-h-[24px]
          max-h-32
          overflow-y-auto
          scrollbar-none
        "
          />

          <button
            onClick={handleSend}
            disabled={!prompt.trim() || loading}
            aria-label="Send message"
            className="
          h-10 w-10
          shrink-0
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          text-white
          flex items-center justify-center
          transition-all
          hover:scale-105
          active:scale-95
          disabled:opacity-50
          disabled:cursor-not-allowed
          disabled:hover:scale-100
        "
          >
            <SendHorizontal size={16} />
          </button>
        </div>

        <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
          Enter to send • Shift + Enter for new line
        </p>
      </div>
    </div>
  );
}

export default Input;
