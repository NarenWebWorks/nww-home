export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Browser window frame */}
      <div className="bg-gray-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-gray-700 rounded-md px-4 py-1 text-sm text-gray-400 text-center">
            app.clubcaddy.in/dashboard
          </div>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="bg-white rounded-b-xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[var(--color-primary)] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg" />
            <span className="text-white font-semibold">ClubCaddy</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-white/20 rounded-full" />
          </div>
        </div>

        {/* Dashboard grid */}
        <div className="p-6 bg-gray-50">
          {/* Stats row */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Active Members', value: '1,234', color: 'bg-blue-500' },
              { label: 'Tee Times Today', value: '48', color: 'bg-green-500' },
              { label: 'Active Tournaments', value: '3', color: 'bg-purple-500' },
              { label: 'Pending Scores', value: '12', color: 'bg-orange-500' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
                <div className={`w-10 h-10 ${stat.color} rounded-lg mb-2 opacity-80`} />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="grid grid-cols-3 gap-4">
            {/* Tee Times */}
            <div className="col-span-2 bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="font-semibold text-gray-800">Today&apos;s Tee Times</div>
                <div className="text-xs text-[var(--color-primary)]">View All</div>
              </div>
              <div className="space-y-2">
                {['7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM'].map((time, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-700 w-16">{time}</div>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[var(--color-secondary)] rounded-full"
                        style={{ width: `${75 - i * 15}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500">{4 - i}/4</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="font-semibold text-gray-800 mb-4">Quick Actions</div>
              <div className="space-y-2">
                {['Book Tee Time', 'Add Member', 'Enter Scores', 'Create Event'].map((action, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    {action}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute -right-8 top-1/4 w-16 h-16 bg-[var(--color-secondary)]/20 rounded-full blur-xl" />
      <div className="absolute -left-8 bottom-1/4 w-20 h-20 bg-[var(--color-primary)]/20 rounded-full blur-xl" />
    </div>
  );
}
