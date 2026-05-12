import { Upload } from "lucide-react";

function ProfileHeader({ user }) {
  return (
    <section
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      {/* Cover */}
      <div
        className="
          h-36
          bg-gradient-to-r
          from-blue-600
          via-indigo-500
          to-violet-500
        "
      />

      <div className="px-6 pb-6">
        <div
          className="
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="flex items-end gap-6">
            <img
              src="https://imgs.search.brave.com/gVyIyUVHpGPP3fC4INVJfNh-BufkucUP9GR_XUCQDd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/OTExLzczNi9zbWFs/bC9wcm9maWxlLWlj/b24tdXNlci1pY29u/LXBlcnNvbi1pY29u/LWZyZWUtcG5nLnBu/Zw"
              alt={user.name}
              className="
                -mt-10
                h-28
                w-28
                rounded-3xl
                border-4
                border-white
                object-cover
                shadow-lg
                dark:border-slate-950
              "
            />

            <div className="pb-5">
              <h1
                className="
              
                  text-3xl
                  font-bold
                  tracking-tight
                  text-slate-900
                  dark:text-white
                "
              >
                {user?.name}
              </h1>
            </div>
          </div>

          <a
            href="/upload"
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              bg-blue-600
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            <Upload size={16} />
            Upload New Notes
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;
