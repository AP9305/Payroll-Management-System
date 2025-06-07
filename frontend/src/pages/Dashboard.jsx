  {/* Second Row */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-white p-4 rounded-xl border border-gray-300">
      <h2 className="text-lg font-semibold mb-4">Department Distribution</h2>
      <div className="h-64">
        <PieChart
          data={departmentDistribution}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {departmentDistribution.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </PieChart>
      </div>
    </div>
    <div className="bg-white p-4 rounded-xl border border-gray-300">
      <h2 className="text-lg font-semibold mb-4">Payroll Trend (Last 6 Months)</h2>
      <div className="h-64">
        <LineChart
          data={payrollTrend}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  </div>  

  {/* Third Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 min-w-0 items-start h-[400px]">
    <div className="bg-white p-4 rounded-xl border border-gray-300 h-full flex flex-col flex-1">
      <h2 className="text-lg font-semibold mb-4">Recent Hires</h2>
      <div className="space-y-4 flex-1">
        {recentHires.map((hire) => (
          <div key={hire.id} className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 font-semibold">
                {hire.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium">{hire.name}</p>
              <p className="text-sm text-gray-600">{hire.department}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-white p-4 rounded-xl border border-gray-300 h-full flex flex-col flex-1">
      <h2 className="text-lg font-semibold mb-4">Top Earners</h2>
      <div className="space-y-4 flex-1">
        {topEarners.map((earner) => (
          <div key={earner.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600 font-semibold">
                  {earner.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium">{earner.name}</p>
                <p className="text-sm text-gray-600">{earner.department}</p>
              </div>
            </div>
            <p className="font-semibold">${earner.salary.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-white p-4 rounded-xl border border-gray-300 h-full flex flex-col flex-1">
      <h2 className="text-lg font-semibold mb-4">Recent Leave Requests</h2>
      <div className="space-y-4 flex-1">
        {recentLeaveRequests.map((request) => (
          <div key={request.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium">{request.employee_name}</p>
              <p className="text-sm text-gray-600">
                {request.start_date} - {request.end_date}
              </p>
            </div>
            <span
              className={`px-2 py-1 rounded text-sm ${
                request.status === "Approved"
                  ? "bg-green-100 text-green-800"
                  : request.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {request.status}
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-white p-4 rounded-xl border border-gray-300 h-full flex flex-col flex-1">
      <h2 className="text-lg font-semibold mb-4">Upcoming Birthdays</h2>
      <div className="space-y-4 flex-1">
        {upcomingBirthdays.map((birthday) => (
          <div
            key={birthday.id}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold">
                {birthday.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium">{birthday.name}</p>
              <p className="text-sm text-gray-600">
                {birthday.address} | {new Date(birthday.birth_date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div> 