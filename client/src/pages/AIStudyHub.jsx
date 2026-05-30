import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Brain } from "lucide-react";

import Hero from "../components/ai-assistance/Hero";
import Input from "../components/ai-assistance/Input";
import Messages from "../components/ai-assistance/Messages";
import API from "../services/api";

export default function AIStudyHub() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Welcome to CampusNotes AI.\n\nAsk me to explain topics, generate MCQs, create flashcards, or build study plans.",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async (customPrompt = null) => {
    const text = customPrompt || prompt;

    if (!text.trim()) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setPrompt("");
    setLoading(true);

    try {
      const response = await API.post("/ai/chat", {
        message: text,
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.data.response,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Unable to connect to AI server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      via-white
      to-blue-50

      dark:from-slate-950
      dark:via-slate-900
      dark:to-slate-950

      transition-colors
      duration-300
    "
    >
      <div className="max-w-5xl mx-auto px-4 py-10">
        <Hero />

        <div
          className="
          bg-white/70
          dark:bg-slate-900/70

          backdrop-blur-xl

          border
          border-slate-200
          dark:border-slate-800

          rounded-3xl

          shadow-xl
          shadow-black/5

          overflow-hidden

          flex
          flex-col

          h-[65vh]
          md:h-[75vh]
          lg:h-[750px]

          min-h-0
        "
        >
          {/* Header */}
          <div
            className="
            border-b
            border-slate-200
            dark:border-slate-800

            px-6
            py-4

            flex
            items-center
            gap-4

            shrink-0
          "
          >
            <div
              className="
              h-11
              w-11

              rounded-2xl

              bg-gradient-to-br
              from-blue-500
              to-indigo-600

              text-white

              flex
              items-center
              justify-center
            "
            >
              <Brain size={18} />
            </div>

            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">
                CampusNotes AI
              </h2>

              <p className="text-xs text-emerald-500">● Online</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div
            className="
            px-6
            py-4

            border-b
            border-slate-200
            dark:border-slate-800

            shrink-0
          "
          >
            <div
              className="
  flex
  gap-2

  overflow-x-auto
  scrollbar-none

  pb-1

  snap-x
  snap-mandatory
"
            >
              {[
                "Explain React Hooks",
                "Generate 10 MCQs on DBMS",
                "Create Flashcards for Python",
                "Make a Study Plan",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => sendMessage(item)}
                  className="
      shrink-0
      snap-start

      px-4
      py-2.5

      text-sm
      font-medium

      rounded-full

      bg-slate-100
      dark:bg-slate-800

      text-slate-700
      dark:text-slate-300

      border
      border-slate-200
      dark:border-slate-700

      hover:bg-slate-200
      dark:hover:bg-slate-700

      transition-all
      duration-200
    "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <Messages
            messages={messages}
            loading={loading}
            messagesEndRef={messagesEndRef}
          />

          {/* Input */}
          <Input
            sendMessage={sendMessage}
            loading={loading}
            prompt={prompt}
            setPrompt={setPrompt}
          />
        </div>
      </div>
    </div>
  );
}
