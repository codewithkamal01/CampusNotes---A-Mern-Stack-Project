export default function SystemStatus() {
  const services = [
    { name: "Website", status: "Operational" },
    { name: "API Server", status: "Operational" },
    { name: "Database", status: "Operational" },
    { name: "Authentication", status: "Operational" },
    { name: "Cloud Storage", status: "Operational" },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-16 dark:bg-slate-950 md:px-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            System Status
          </h1>

          <p className="text-lg text-gray-600 dark:text-slate-400">
            Monitor platform services, uptime, and maintenance updates.
          </p>
        </div>

        {/* Overall Status */}
        <div className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900 dark:bg-green-950/30">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-4 w-4 rounded-full bg-green-500"></div>

            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">
              All Systems Operational
            </h2>
          </div>

          <p className="text-green-700 dark:text-green-400">
            All platform services are running normally.
          </p>
        </div>

        {/* Services */}
        <div className="rounded-3xl border border-gray-200 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            Services
          </h2>

          <div className="space-y-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-2xl border border-gray-100 p-5 dark:border-slate-800"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {service.name}
                </h3>

                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>

                  <span className="font-medium text-green-700 dark:text-green-400">
                    {service.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance */}
        <div className="mt-10 rounded-3xl border border-yellow-200 bg-yellow-50 p-8 dark:border-yellow-900 dark:bg-yellow-950/30">
          <h2 className="mb-4 text-2xl font-semibold text-yellow-800 dark:text-yellow-400">
            Scheduled Maintenance
          </h2>

          <p className="leading-7 text-yellow-700 dark:text-yellow-400">
            No scheduled maintenance at the moment.
          </p>
        </div>

        {/* Incident History */}
        <div className="mt-10 rounded-3xl border border-gray-200 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
            Recent Incidents
          </h2>

          <div className="rounded-2xl bg-gray-100 p-6 text-center dark:bg-slate-800">
            <p className="text-gray-600 dark:text-slate-400">
              No incidents reported in the last 30 days.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-sm text-gray-500 dark:text-slate-500">
          Last updated: Just now
        </div>
      </div>
    </div>
  );
}
