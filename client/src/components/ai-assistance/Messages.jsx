import { Brain } from "lucide-react";
import ReactMarkdown from "react-markdown";

function Messages({ messages, loading, messagesEndRef }) {
  return (
    <div
      className="
      flex-1
      overflow-y-auto
      px-4
      md:px-6
      scrollbar-none
      min-h-0
    "
    >
      {messages.length === 1 && (
        <div className="text-center py-20">
          <div
            className="
            h-24
            w-24
            mx-auto
            rounded-3xl

            bg-gradient-to-br
            from-blue-500
            to-indigo-600

            text-white

            flex
            items-center
            justify-center

            shadow-xl
            shadow-blue-500/20

            mb-6
          "
          >
            <Brain size={46} />
          </div>

          <h3 className="font-bold text-2xl text-slate-900 dark:text-white">
            How can I help you today?
          </h3>

          <p className="text-slate-500 mt-3 max-w-md mx-auto">
            Generate notes, flashcards, MCQs, summaries, study plans and more.
          </p>
        </div>
      )}

      <div className="space-y-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "assistant" && (
              <div
                className="
                h-9
                w-9
                shrink-0

                rounded-xl

                bg-gradient-to-br
                from-blue-500
                to-indigo-600

                text-white

                flex
                items-center
                justify-center
              "
              >
                <Brain size={16} />
              </div>
            )}

            <div
              className={`
                ${
                  msg.role === "user"
                    ? "max-w-[85%] md:max-w-[70%] w-full"
                    : "max-w-[95%] md:max-w-[80%] w-full"
                }
              `}
            >
              <p
                className="
                text-xs
                text-slate-500
                mb-2
                px-1
              "
              >
                {msg.role === "user" ? "You" : "CampusNotes AI"}
              </p>

              <div
                className={`
                  px-4
                  md:px-5
                  py-3
                  rounded-3xl
                  leading-7

                  whitespace-pre-wrap
                  break-words

                  transition-all
                  duration-300

                  ${
                    msg.role === "user"
                      ? `
                        bg-gradient-to-r
                        from-blue-600
                        to-indigo-600

                        text-white

                        shadow-lg
                        shadow-blue-500/20
                      `
                      : `
                        bg-white
                        dark:bg-slate-800

                        text-slate-900
                        dark:text-slate-100

                        border
                        border-slate-200
                        dark:border-slate-700

                        shadow-sm
                      `
                  }
                `}
              >
                <div
                  className="
                  prose
                  prose-sm
                  max-w-none

                  dark:prose-invert

                  prose-p:my-2
                  prose-pre:rounded-xl
                  prose-pre:bg-slate-900
                "
                >
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-3">
            <div
              className="
              h-9
              w-9

              rounded-xl

              bg-gradient-to-br
              from-blue-500
              to-indigo-600

              text-white

              flex
              items-center
              justify-center
            "
            >
              <Brain size={16} />
            </div>

            <div
              className="
              bg-white
              dark:bg-slate-800

              border
              border-slate-200
              dark:border-slate-700

              rounded-3xl

              px-5
              py-4

              shadow-sm
            "
            >
              <div className="flex gap-2">
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
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default Messages;
