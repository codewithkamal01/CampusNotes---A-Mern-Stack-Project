import { useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileSidebar from "../components/profile/ProfileSidebar";
import ProfileStats from "../components/profile/ProfileStats";
import ProfileTabs from "../components/profile/ProfileTabs";
import UploadedNotes from "../components/profile/UploadedNotes";
import API from "../services/api";
import { useEffect } from "react";
import { toast } from "sonner";

function Profile() {
  const [activeTab, setActiveTab] = useState("notes");
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);

        const notesRes = await API.get("/notes/my-notes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setNotes(notesRes.data);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
        {/* Profile Skeleton */}
        <div className="w-full max-w-4xl animate-pulse rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          {/* Top Section */}
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
            {/* Avatar */}
            <div className="h-24 w-24 rounded-full bg-slate-200 dark:bg-slate-700"></div>

            {/* User Info */}
            <div className="flex-1 space-y-3">
              <div className="h-6 w-48 rounded bg-slate-200 dark:bg-slate-700"></div>
              <div className="h-4 w-72 rounded bg-slate-200 dark:bg-slate-700"></div>
              <div className="h-4 w-40 rounded bg-slate-200 dark:bg-slate-700"></div>
            </div>
          </div>

          {/* Stats / Content */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-100 p-5 dark:border-slate-800"
              >
                <div className="h-5 w-24 rounded bg-slate-200 dark:bg-slate-700"></div>
                <div className="mt-4 h-8 w-16 rounded bg-slate-200 dark:bg-slate-700"></div>
                <div className="mt-3 h-4 w-full rounded bg-slate-200 dark:bg-slate-700"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          Loading your profile...
        </p>
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

            {activeTab === "notes" && <UploadedNotes notes={notes} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
