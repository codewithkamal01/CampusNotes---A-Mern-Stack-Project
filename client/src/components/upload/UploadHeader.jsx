import { useState } from "react";
import { BookOpen, FileText, ShieldCheck, X } from "lucide-react";

function UploadHeader() {
  const [showGuidelines, setShowGuidelines] = useState(false);

  const guidelines = [
    {
      icon: <BookOpen size={18} />,
      title: "Upload quality notes",
      desc: "Make sure the content is clear and readable.",
    },

    {
      icon: <FileText size={18} />,
      title: "Use proper titles",
      desc: "Example: DSA Unit 2 Notes or DBMS PYQ 2025.",
    },

    {
      icon: <ShieldCheck size={18} />,
      title: "Avoid copyrighted files",
      desc: "Only upload materials you own or can share.",
    },
  ];

  return (
    <>
      <div
        className="
          mb-10
          flex flex-col gap-6
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <h1
            className="
              text-4xl font-extrabold
              tracking-tight
              text-slate-900
              dark:text-white
            "
          >
            Upload New Note
          </h1>

          <p
            className="
              mt-2 text-slate-600
              dark:text-slate-400
            "
          >
            Share your knowledge with the student community.
          </p>
        </div>

        <button
          onClick={() => setShowGuidelines(true)}
          className="
              rounded-2xl
              bg-blue-600
              px-5 py-3
              text-sm font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
        >
          Guidelines
        </button>
      </div>

      {/* Floating Guidelines */}
      {showGuidelines && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center
            justify-center
            bg-black/40
            p-4 backdrop-blur-sm
          "
        >
          <div
            className="
              w-full max-w-md
              rounded-3xl
              border border-slate-200
              bg-white
              p-6 shadow-2xl
              dark:border-slate-800
              dark:bg-slate-950
            "
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h2
                  className="
                    text-2xl font-bold
                    text-slate-900
                    dark:text-white
                  "
                >
                  Upload Guidelines
                </h2>

                <p
                  className="
                    mt-1 text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Please follow these rules before uploading.
                </p>
              </div>

              <button
                onClick={() => setShowGuidelines(false)}
                className="
                  rounded-xl p-2
                  text-slate-500
                  transition
                  hover:bg-slate-100
                  dark:hover:bg-slate-900
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* Guidelines List */}
            <div className="mt-6 space-y-4">
              {guidelines.map((item, index) => (
                <div
                  key={index}
                  className="
                      flex gap-4
                      rounded-2xl
                      border border-slate-200
                      bg-slate-50
                      p-4
                      dark:border-slate-800
                      dark:bg-slate-900
                    "
                >
                  <div
                    className="
                        flex h-10 w-10
                        shrink-0 items-center
                        justify-center
                        rounded-xl
                        bg-blue-100
                        text-blue-600
                        dark:bg-blue-950/40
                        dark:text-blue-400
                      "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3
                      className="
                          text-sm font-semibold
                          text-slate-900
                          dark:text-white
                        "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                          mt-1 text-sm
                          text-slate-500
                          dark:text-slate-400
                        "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <button
              onClick={() => setShowGuidelines(false)}
              className="
                mt-6 w-full
                rounded-2xl
                bg-blue-600
                py-3 text-sm
                font-semibold text-white
                transition
                hover:bg-blue-700
              "
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default UploadHeader;
