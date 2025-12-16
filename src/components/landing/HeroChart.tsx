'use client'

import { useState, useEffect } from 'react'
import { 
  AreaChart, 
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts'
import { TrendingUp, DollarSign, BarChart3, Target } from 'lucide-react'

const data = [
  { month: 'Jan', value: 10000, projection: 10500 },
  { month: 'Feb', value: 10500, projection: 11000 },
  { month: 'Mar', value: 11200, projection: 11800 },
  { month: 'Apr', value: 11800, projection: 12500 },
  { month: 'May', value: 12500, projection: 13300 },
  { month: 'Jun', value: 13400, projection: 14200 },
  { month: 'Jul', value: 14200, projection: 15200 },
  { month: 'Aug', value: 15200, projection: 16300 },
  { month: 'Sep', value: 16300, projection: 17500 },
  { month: 'Oct', value: 17500, projection: 18800 },
  { month: 'Nov', value: 18800, projection: 20200 },
  { month: 'Dec', value: 20300, projection: 21800 },
]

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-semibold text-gray-900 mb-2">{`Month: ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.dataKey === 'value' ? 'Current Value' : 'Projected'}:{' '}
            <span className="font-semibold">
              ${entry.value?.toLocaleString()}
            </span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function HeroChart() {
  const [animatedData, setAnimatedData] = useState(data.map(d => ({ ...d, value: 10000, projection: 10000 })))
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    if (!isAnimating) return

    let currentStep = 0
    const totalSteps = 20
    const stepDuration = 50
    
    const animate = () => {
      if (currentStep >= totalSteps) {
        setIsAnimating(false)
        return
      }

      const progress = currentStep / totalSteps
      const newData = data.map((item, index) => {
        const startValue = 10000
        const targetValue = item.value
        const currentValue = startValue + (targetValue - startValue) * progress
        
        const targetProjection = item.projection
        const currentProjection = startValue + (targetProjection - startValue) * progress
        
        return {
          ...item,
          value: Math.round(currentValue),
          projection: Math.round(currentProjection)
        }
      })

      setAnimatedData(newData)
      currentStep++
      setTimeout(animate, stepDuration)
    }

    animate()
  }, [isAnimating])

  // Calculate stats
  const initialInvestment = 10000
  const currentValue = animatedData[animatedData.length - 1]?.value || 10000
  const profit = currentValue - initialInvestment
  const profitPercentage = ((profit / initialInvestment) * 100).toFixed(1)

  return (
    <div className="relative bg-linear-to-br from-white via-gray-50 to-primary-50 rounded-2xl p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-primary-100/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-2 bg-primary-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Portfolio Growth</h3>
          </div>
          <p className="text-gray-600">$10,000 initial investment · 12 months</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-primary-700">+{profitPercentage}%</div>
          <div className="text-sm text-gray-600 flex items-center justify-end">
            <span className="text-green-600 font-medium">+${profit.toLocaleString()}</span>
            <span className="mx-2">•</span>
            <span>Total Return</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={animatedData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorProjection" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#e5e7eb" 
              vertical={false}
            />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              tickMargin={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              tickMargin={10}
              tickFormatter={(value: number) => `$${(value/1000).toFixed(0)}k`}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: '#e5e7eb', strokeWidth: 1 }}
            />
            {/* Projection line (dashed) */}
            <Area
              type="monotone"
              dataKey="projection"
              stroke="#10b981"
              strokeWidth={2}
              strokeDasharray="5 5"
              fill="url(#colorProjection)"
              fillOpacity={0.3}
            />
            {/* Actual value line (solid) */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#colorValue)"
              fillOpacity={0.8}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 mb-8">
        <div className="flex items-center">
          <div className="w-4 h-0.5 bg-blue-500 mr-2"></div>
          <span className="text-sm text-gray-600">Actual Growth</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-0.5 border border-dashed border-green-500 mr-2"></div>
          <span className="text-sm text-gray-600">Projection</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-linear-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100">
          <div className="flex items-center mb-2">
            <DollarSign className="h-4 w-4 text-blue-500 mr-2" />
            <div className="text-sm text-gray-600">Current Value</div>
          </div>
          <div className="text-xl font-bold text-gray-900">
            ${currentValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
        </div>
        
        <div className="bg-linear-to-br from-green-50 to-white p-4 rounded-xl border border-green-100">
          <div className="flex items-center mb-2">
            <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
            <div className="text-sm text-gray-600">Monthly Avg.</div>
          </div>
          <div className="text-xl font-bold text-gray-900">+0.86%</div>
        </div>
        
        <div className="bg-linear-to-br from-purple-50 to-white p-4 rounded-xl border border-purple-100">
          <div className="flex items-center mb-2">
            <BarChart3 className="h-4 w-4 text-purple-500 mr-2" />
            <div className="text-sm text-gray-600">Peak Value</div>
          </div>
          <div className="text-xl font-bold text-gray-900">$20,300</div>
        </div>
        
        <div className="bg-linear-to-br from-yellow-50 to-white p-4 rounded-xl border border-yellow-100">
          <div className="flex items-center mb-2">
            <Target className="h-4 w-4 text-yellow-500 mr-2" />
            <div className="text-sm text-gray-600">Next Target</div>
          </div>
          <div className="text-xl font-bold text-gray-900">$22,500</div>
        </div>
      </div>

      {/* Performance Indicator */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">Performance vs. S&P 500</div>
          <div className="flex items-center">
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mr-3">
              <div 
                className="h-full bg-green-500 rounded-full"
                style={{ width: '85%' }}
              />
            </div>
            <span className="font-bold text-green-600">+35% better</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500/10 to-transparent rounded-full -translate-y-16 translate-x-16 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-br from-green-500/10 to-transparent rounded-full translate-y-16 -translate-x-16 blur-3xl" />
    </div>
  )
}