import { Brain } from "lucide-react";
import ReactMarkdown from "react-markdown";

function Messages({ messages, loading, messagesEndRef }) {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto hide-scrollbar px-4 md:px-6 py-4 scroll-smooth">
      {messages.length === 1 && (
        <div className="flex flex-col items-center justify-center py-12 md:py-20 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
            <Brain size={28} />
          </div>

          <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
            How can I help you today?
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
            Notes, summaries, MCQs, flashcards, study plans and exam
            preparation.
          </p>
        </div>
      )}

      <div className="space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              msg.role === "user" ? "items-end" : "items-start"
            }`}
          >
            {/* Label */}
            {msg.role === "assistant" ? (
              <div className="mb-1 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-white">
                  <Brain size={12} />
                </div>

                <span className="text-xs text-slate-500 dark:text-slate-400">
                  CampusNotes AI
                </span>
              </div>
            ) : (
              <span className="mb-1 text-xs text-slate-500 dark:text-slate-400">
                You
              </span>
            )}

            {/* Message Bubble */}
            <div
              className={`w-fit max-w-[92%] md:max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-7 break-words transition-all ${
                msg.role === "user"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                  : "border border-slate-200 bg-white text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              }`}
            >
              <div
                className={`prose prose-sm max-w-none ${
                  msg.role === "user" ? "prose-invert" : "dark:prose-invert"
                } prose-p:my-2 prose-headings:mb-2 prose-headings:mt-4 prose-pre:rounded-xl prose-pre:bg-slate-950 prose-code:before:hidden prose-code:after:hidden`}
              >
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-start">
            <div className="mb-1 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-white">
                <Brain size={12} />
              </div>

              <span className="text-xs text-slate-500 dark:text-slate-400">
                CampusNotes AI
              </span>
            </div>

            <div className="flex gap-1 rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" />

              <div
                className="h-2 w-2 rounded-full bg-blue-500 animate-bounce"
                style={{ animationDelay: "0.15s" }}
              />

              <div
                className="h-2 w-2 rounded-full bg-blue-500 animate-bounce"
                style={{ animationDelay: "0.3s" }}
              />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default Messages;
