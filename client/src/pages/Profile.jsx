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
    return <div className="p-10">Loading profile...</div>;
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
