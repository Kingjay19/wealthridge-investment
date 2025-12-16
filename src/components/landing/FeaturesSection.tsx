import { Shield, TrendingUp, Zap, Lock, Globe, Users } from 'lucide-react'

const features = [
  {
    title: 'Bank-Level Security',
    description: '256-bit SSL encryption, two-factor authentication, and FDIC insurance on cash balances.',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Smart Portfolio',
    description: 'AI-powered investment recommendations based on your risk tolerance and financial goals.',
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Instant Execution',
    description: 'Real-time trading with zero commission fees and instant settlement.',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    title: 'Global Access',
    description: 'Invest in stocks, ETFs, and funds from 30+ global markets all in one platform.',
    icon: Globe,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Advanced Protection',
    description: 'Biometric login, device monitoring, and SOC 2 Type II certified security.',
    icon: Lock,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    title: 'Expert Support',
    description: '24/7 access to certified financial advisors and investment specialists.',
    icon: Users,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for
            <span className="text-primary-600"> Smart Investing</span>
          </h2>
          <p className="text-xl text-gray-600">
            Professional-grade tools with simplicity for every investor, from beginners to experts.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-linear-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-primary-200">Platform Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$0</div>
              <div className="text-primary-200">Commission Fees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-200">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">256-bit</div>
              <div className="text-primary-200">SSL Encryption</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}