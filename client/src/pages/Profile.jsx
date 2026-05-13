import { useEffect, useState } from "react";
import { toast } from "sonner";

import API from "../services/api";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import ProfileStats from "../components/profile/ProfileStats";
import ProfileTabs from "../components/profile/ProfileTabs";
import UploadedNotes from "../components/profile/UploadedNotes";

function Profile() {
  const [activeTab, setActiveTab] = useState("notes");
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          toast.error("Please login first");
          return;
        }

        // Parallel API Calls
        const [profileRes, notesRes] = await Promise.all([
          API.get("/users/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),

          API.get("/notes/my-notes", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        setUser(profileRes.data);
        setNotes(notesRes.data || []);
      } catch (error) {
        console.error(error);

        toast.error(error?.response?.data?.message || "Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this note?");

    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      await API.delete(`/notes/${id}`);

      setNotes((prev) => prev.filter((note) => note._id !== id));
    } catch (error) {
      toast.error("Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  // Loading Skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8">
            {/* Header */}
            <div
              className="
                overflow-hidden rounded-3xl
                border border-slate-200
                bg-white dark:border-slate-800
                dark:bg-slate-950
              "
            >
              <div className="h-40 bg-slate-200 dark:bg-slate-800" />

              <div className="p-6">
                <div className="flex items-center gap-5">
                  <div
                    className="
                      -mt-16 h-28 w-28
                      rounded-3xl
                      bg-slate-200
                      dark:bg-slate-800
                    "
                  />

                  <div className="space-y-3">
                    <div className="h-7 w-52 rounded bg-slate-200 dark:bg-slate-800" />
                    <div className="h-4 w-36 rounded bg-slate-200 dark:bg-slate-800" />
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Sidebar */}
              <div className="lg:col-span-4 xl:col-span-3">
                <div
                  className="
                    rounded-3xl border border-slate-200
                    bg-white p-6 dark:border-slate-800
                    dark:bg-slate-950
                  "
                >
                  <div className="h-6 w-40 rounded bg-slate-200 dark:bg-slate-800" />

                  <div className="mt-6 space-y-5">
                    {[1, 2].map((item) => (
                      <div key={item} className="space-y-2">
                        <div className="h-3 w-20 rounded bg-slate-200 dark:bg-slate-800" />
                        <div className="h-5 w-full rounded bg-slate-200 dark:bg-slate-800" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-6 lg:col-span-8 xl:col-span-9">
                {/* Stats */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {[1, 2].map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-3xl border border-slate-200
                        bg-white p-6 dark:border-slate-800
                        dark:bg-slate-950
                      "
                    >
                      <div className="h-4 w-28 rounded bg-slate-200 dark:bg-slate-800" />
                      <div className="mt-4 h-10 w-20 rounded bg-slate-200 dark:bg-slate-800" />
                    </div>
                  ))}
                </div>

                {/* Tabs */}
                <div className="h-14 rounded-2xl bg-slate-200 dark:bg-slate-800" />

                {/* Notes */}
                <div className="grid gap-5 md:grid-cols-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-3xl border border-slate-200
                        bg-white p-5 dark:border-slate-800
                        dark:bg-slate-950
                      "
                    >
                      <div className="h-5 w-40 rounded bg-slate-200 dark:bg-slate-800" />
                      <div className="mt-4 h-4 w-full rounded bg-slate-200 dark:bg-slate-800" />
                      <div className="mt-2 h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <ProfileHeader user={user} />

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3">
            <ProfileSidebar user={user} />
          </div>

          {/* Main */}
          <div className="space-y-8 lg:col-span-8 xl:col-span-9">
            <ProfileStats totalNotes={notes.length} totalDownloads={0} />

            <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "notes" && (
              <UploadedNotes
                notes={notes}
                onDelete={handleDelete}
                deletingId={deletingId}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
