// app/(app)/dashboard/page.tsx
import { 
  DollarSign, 
  TrendingUp, 
  Wallet, 
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Calendar,
  TrendingDown
} from 'lucide-react'
import Link from 'next/link'

// Mock data - will be replaced with real data later
const dashboardData = {
  stats: {
    totalDeposits: 35420.50,
    totalWithdrawals: 9990.00,
    activeInvestment: 25430.50,
    profit: 3245.75,
    profitPercentage: 12.8
  },
  recentActivities: [
    { type: 'deposit', amount: 5000, date: '2024-01-15', status: 'completed' },
    { type: 'investment', amount: 10000, option: 'Stocks & ETFs', date: '2024-01-10', status: 'active' },
    { type: 'profit', amount: 245.75, date: '2024-01-05', status: 'credited' },
    { type: 'withdrawal', amount: 2000, date: '2024-01-01', status: 'completed' },
  ],
  investmentDistribution: [
    { option: 'Stocks & ETFs', amount: 12000, percentage: 47.2, color: 'bg-blue-500' },
    { option: 'Bonds', amount: 6500, percentage: 25.6, color: 'bg-green-500' },
    { option: 'Real Estate', amount: 4500, percentage: 17.7, color: 'bg-amber-500' },
    { option: 'Cryptocurrency', amount: 2430.50, percentage: 9.5, color: 'bg-red-500' },
  ]
}

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your investment overview.</p>
        </div>
        <div className="flex items-center flex-wrap space-x-4 gap-4 md:flex-nowrap">
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">Jan 15, 2024</span>
          </div>
          <Link
            href="/dashboard/investment"
            className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all"
          >
            New Investment
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Deposit Card */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Total Deposit</p>
              <p className="text-2xl font-bold mt-2">
                ${dashboardData.stats.totalDeposits.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+12.5%</span>
            <span className="text-sm text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        {/* Total Withdrawals Card */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Total Withdrawals</p>
              <p className="text-2xl font-bold mt-2">
                ${dashboardData.stats.totalWithdrawals.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="h-12 w-12 bg-red-50 rounded-lg flex items-center justify-center">
              <Wallet className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-sm text-red-600 font-medium">-3.2%</span>
            <span className="text-sm text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        {/* Active Investment Card */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Active Investment</p>
              <p className="text-2xl font-bold mt-2">
                ${dashboardData.stats.activeInvestment.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="h-12 w-12 bg-green-50 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 text-gray-400 mr-1" />
              <span className="text-gray-600">4 active investments</span>
            </div>
          </div>
        </div>

        {/* Profit Card */}
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Total Profit</p>
              <p className="text-2xl font-bold mt-2">
                ${dashboardData.stats.profit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="h-12 w-12 bg-purple-50 rounded-lg flex items-center justify-center">
              <PieChart className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm font-medium">
              <span className="text-green-600">+{dashboardData.stats.profitPercentage}%</span>
              <span className="text-gray-500 ml-2">ROI</span>
            </span>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl border shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <p className="text-sm text-gray-600 mt-1">Your latest transactions and investments</p>
          </div>
          <div className="p-4">
            {dashboardData.recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center">
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center mr-3 ${
                    activity.type === 'deposit' ? 'bg-blue-50' :
                    activity.type === 'investment' ? 'bg-green-50' :
                    activity.type === 'profit' ? 'bg-purple-50' : 'bg-gray-50'
                  }`}>
                    {activity.type === 'deposit' && <DollarSign className="h-5 w-5 text-blue-600" />}
                    {activity.type === 'investment' && <TrendingUp className="h-5 w-5 text-green-600" />}
                    {activity.type === 'profit' && <PieChart className="h-5 w-5 text-purple-600" />}
                    {activity.type === 'withdrawal' && <Wallet className="h-5 w-5 text-gray-600" />}
                  </div>
                  <div>
                    <p className="font-medium capitalize">{activity.type}</p>
                    {activity.option && (
                      <p className="text-sm text-gray-500">{activity.option}</p>
                    )}
                    <p className="text-xs text-gray-400">{activity.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    activity.type === 'withdrawal' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {activity.type === 'withdrawal' ? '-' : '+'}${activity.amount.toLocaleString()}
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activity.status === 'completed' || activity.status === 'credited' 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <Link
              href="/dashboard/analytics"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center"
            >
              View all activity
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Investment Distribution */}
        <div className="bg-white rounded-xl border shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Investment Distribution</h2>
            <p className="text-sm text-gray-600 mt-1">How your funds are allocated</p>
          </div>
          <div className="p-6">
            {/* Pie Chart Visualization */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative h-48 w-48">
                {/* This is a simple pie chart using conic-gradient */}
                <div 
                  className="h-full w-full rounded-full"
                  style={{
                    background: `conic-gradient(
                      #3b82f6 0% ${dashboardData.investmentDistribution[0].percentage}%,
                      #10b981 ${dashboardData.investmentDistribution[0].percentage}% ${dashboardData.investmentDistribution[0].percentage + dashboardData.investmentDistribution[1].percentage}%,
                      #f59e0b ${dashboardData.investmentDistribution[0].percentage + dashboardData.investmentDistribution[1].percentage}% ${dashboardData.investmentDistribution[0].percentage + dashboardData.investmentDistribution[1].percentage + dashboardData.investmentDistribution[2].percentage}%,
                      #ef4444 ${dashboardData.investmentDistribution[0].percentage + dashboardData.investmentDistribution[1].percentage + dashboardData.investmentDistribution[2].percentage}% 100%
                    )`
                  }}
                />
                <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">
                      ${dashboardData.stats.activeInvestment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </p>
                    <p className="text-sm text-gray-500">Invested</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {dashboardData.investmentDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`h-3 w-3 rounded-full ${item.color} mr-3`}></div>
                    <span className="text-sm font-medium text-gray-700">{item.option}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${item.amount.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">{item.percentage.toFixed(1)}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Current Plan</p>
                <p className="font-medium text-gray-900">Growth Plan</p>
              </div>
              <Link
                href="/dashboard/settings"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Upgrade Plan
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-linear-to-r from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-700">Avg. Daily Return</p>
              <p className="text-2xl font-bold text-blue-900 mt-1">0.35%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-linear-to-r from-green-50 to-green-100 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700">Portfolio Risk</p>
              <p className="text-2xl font-bold text-green-900 mt-1">Medium</p>
            </div>
            <TrendingDown className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-linear-to-r from-purple-50 to-purple-100 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-700">Next Payout</p>
              <p className="text-2xl font-bold text-purple-900 mt-1">Jan 31</p>
            </div>
            <Calendar className="h-8 w-8 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  )
}