import { 
  TrendingUp, 
  Shield, 
  Globe, 
  PieChart, 
  Target, 
  BarChart3,
  DollarSign,
  Clock,
  Users,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const investmentOptions = [
  {
    title: 'Stocks & ETFs',
    description: 'Invest in individual companies or diversified exchange-traded funds.',
    icon: TrendingUp,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    features: ['Fractional shares', 'Dividend reinvestment', 'Global markets'],
    minimum: '$100',
    risk: 'Medium-High',
  },
  {
    title: 'Bonds',
    description: 'Government and corporate bonds for stable, predictable returns.',
    icon: Shield,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    features: ['Fixed income', 'Regular interest payments', 'Lower volatility'],
    minimum: '$1,000',
    risk: 'Low',
  },
  {
    title: 'Mutual Funds',
    description: 'Professionally managed portfolios for diversified exposure.',
    icon: PieChart,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    features: ['Active management', 'Diversification', 'Professional oversight'],
    minimum: '$100',
    risk: 'Medium',
  },
  {
    title: 'Real Estate',
    description: 'REITs and real estate funds for property investment.',
    icon: Globe,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    features: ['Property exposure', 'Rental income', 'Portfolio diversification'],
    minimum: '$500',
    risk: 'Medium',
  },
  {
    title: 'Cryptocurrency',
    description: 'Digital assets with high growth potential.',
    icon: DollarSign,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    features: ['24/7 trading', 'High volatility', 'Emerging asset class'],
    minimum: '$10',
    risk: 'Very High',
  },
  {
    title: 'Retirement Accounts',
    description: 'IRA and 401(k) plans with tax advantages.',
    icon: Target,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    features: ['Tax benefits', 'Long-term growth', 'Retirement planning'],
    minimum: '$100',
    risk: 'Varies',
  },
]

const strategies = [
  {
    title: 'Conservative',
    description: 'Preserve capital with minimal risk',
    allocation: '70% Bonds, 20% Stocks, 10% Cash',
    expectedReturn: '4-6%',
    riskLevel: 'Low',
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Balanced',
    description: 'Mix of growth and stability',
    allocation: '50% Stocks, 40% Bonds, 10% Alternatives',
    expectedReturn: '6-8%',
    riskLevel: 'Medium',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Growth',
    description: 'Focus on long-term capital appreciation',
    allocation: '70% Stocks, 20% Bonds, 10% Real Estate',
    expectedReturn: '8-10%',
    riskLevel: 'Medium-High',
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Aggressive',
    description: 'Maximum growth potential',
    allocation: '85% Stocks, 10% Crypto, 5% Alternatives',
    expectedReturn: '10-12%',
    riskLevel: 'High',
    color: 'from-red-500 to-orange-600',
  },
]

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary-50 via-white to-primary-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Investment
              <span className="text-primary-600"> Opportunities</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access a wide range of investment options tailored to your financial goals and risk tolerance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg">
                  Start Investing
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Speak with an Advisor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Diverse Investment Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose from various asset classes to build your perfect portfolio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`${option.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className={`h-8 w-8 ${option.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {option.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Minimum Investment</div>
                      <div className="font-bold text-gray-900">{option.minimum}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Risk Level</div>
                      <div className={`font-bold ${
                        option.risk === 'Low' ? 'text-green-600' :
                        option.risk === 'Medium' ? 'text-yellow-600' :
                        option.risk === 'Medium-High' ? 'text-orange-600' : 'text-red-600'
                      }`}>
                        {option.risk}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {option.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Smart Investment Strategies
            </h2>
            <p className="text-xl text-gray-600">
              Choose a strategy that matches your goals and risk tolerance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`bg-linear-to-r ${strategy.color} text-white p-6 rounded-xl mb-6`}>
                  <h3 className="text-2xl font-bold mb-2">{strategy.title}</h3>
                  <p className="opacity-90">{strategy.description}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Asset Allocation</div>
                    <div className="font-bold text-gray-900">{strategy.allocation}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Expected Return</div>
                      <div className="font-bold text-gray-900">{strategy.expectedReturn}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Risk Level</div>
                      <div className={`font-bold ${
                        strategy.riskLevel === 'Low' ? 'text-green-600' :
                        strategy.riskLevel === 'Medium' ? 'text-yellow-600' :
                        strategy.riskLevel === 'Medium-High' ? 'text-orange-600' : 'text-red-600'
                      }`}>
                        {strategy.riskLevel}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Link href={`/strategy/${strategy.title.toLowerCase()}`}>
                    <Button variant="outline" fullWidth>
                      Explore {strategy.title} Strategy
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Investing?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of investors who are already building wealth with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" variant='primary'>
                  Open An Account
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" >
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}