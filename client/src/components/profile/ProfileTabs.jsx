function ProfileTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      id: "notes",
      label: "My Uploads",
    },
  ];

  return (
    <div className="flex gap-3 border-b border-slate-200 dark:border-slate-800">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-4 text-sm font-semibold transition-colors ${
            activeTab === tab.id
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default ProfileTabs;
