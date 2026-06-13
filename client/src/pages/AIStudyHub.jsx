import { useState, useRef, useEffect } from "react";
import { Brain, Lightbulb, Sparkles } from "lucide-react";

import Hero from "../components/ai-assistance/Hero";
import Input from "../components/ai-assistance/Input";
import Messages from "../components/ai-assistance/Messages";
import API from "../services/api";

const examplePrompts = [
  {
    title: "Explain a topic",
    text: "Explain recursion with real-world examples.",
  },
  {
    title: "Generate MCQs",
    text: "Create 5 MCQs for Operating Systems.",
  },
  {
    title: "Flashcards",
    text: "Make flashcards for the Python list methods.",
  },
  {
    title: "Study plan",
    text: "Build a 7-day revision plan for discrete math.",
  },
];

export default function AIStudyHub() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Welcome to CampusNotes AI!\n\nAsk for explanations, summaries, flashcards, MCQs, or study plans. Try a sample prompt below to get started.",
    },
  ]);

  const messagesEndRef = useRef(null);

  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

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
          content:
            "❌ Unable to connect to AI server. Please check your connection and try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="mb:5">
          <Hero />
        </div>

        <div className="grid gap-8">
          <div className="flex flex-col gap-6">
            <div
              className="
  rounded-3xl
  bg-white/80
  dark:bg-slate-900/80
  backdrop-blur-xl
  border
  border-slate-200/70
  dark:border-slate-800
  shadow-2xl
  shadow-slate-900/5
  overflow-hidden
  h-[calc(100vh-5px)]
  max-h-[900px]
  flex
  flex-col
"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shrink-0">
                  <Brain size={16} />
                </div>

                <div className="flex flex-col">
                  <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                    CampusNotes AI
                  </h2>

                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <Messages
                messages={messages}
                loading={loading}
                messagesEndRef={messagesEndRef}
              />
              <Input
                sendMessage={sendMessage}
                loading={loading}
                prompt={prompt}
                setPrompt={setPrompt}
              />
            </div>
            <div className="border-b border-slate-200 dark:border-slate-800 px-6 py-4 mx-auto">
              <div className="flex flex-wrap gap-3">
                {examplePrompts.map((item) => (
                  <button
                    key={item.text}
                    type="button"
                    onClick={() => sendMessage(item.text)}
                    className="
    group
    rounded-2xl
    border
    border-slate-200
    dark:border-slate-700
    bg-white
    dark:bg-slate-800
    px-2
    py-1
    text-sm
    font-medium
    text-slate-700
    dark:text-slate-200
    shadow-sm
    transition-all
    duration-200
    hover:shadow-lg
    hover:-translate-y-1
    hover:border-blue-500
    dark:hover:border-blue-400
  "
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
