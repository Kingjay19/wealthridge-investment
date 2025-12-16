import {
  Target,
  Calculator,
  TrendingUp,
  Shield,
  Calendar,
  DollarSign,
  CheckCircle,
  Users
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    title: 'Retirement Income Planning',
    description: 'Strategies to generate sustainable income throughout retirement.',
    icon: DollarSign,
  },
  {
    title: 'Social Security Optimization',
    description: 'Guidance on when and how to claim Social Security benefits.',
    icon: Shield,
  },
  {
    title: 'Tax-Efficient Withdrawals',
    description: 'Strategies to minimize taxes on retirement account distributions.',
    icon: Calculator,
  },
  {
    title: 'Healthcare Cost Planning',
    description: 'Planning for Medicare and healthcare expenses in retirement.',
    icon: Calendar,
  },
  {
    title: 'Estate Planning Integration',
    description: 'Coordinating retirement plans with estate planning goals.',
    icon: Users,
  },
  {
    title: 'Regular Plan Reviews',
    description: 'Annual reviews to adjust your plan as circumstances change.',
    icon: TrendingUp,
  },
]

const accountTypes = [
  { type: 'Traditional IRA', description: 'Tax-deferred growth', contribution: '$7,000/year' },
  { type: 'Roth IRA', description: 'Tax-free growth', contribution: '$7,000/year' },
  { type: '401(k)', description: 'Employer-sponsored plan', contribution: '$23,000/year' },
  { type: 'SEP IRA', description: 'For self-employed', contribution: '25% of income' },
]

export default function RetirementPlanningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-green-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Retirement Planning
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  Comprehensive solutions for a secure and comfortable retirement
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Starting at</div>
                <div className="text-2xl font-bold text-gray-900">$500/year</div>
                <div className="text-sm text-gray-600">comprehensive planning</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Free Initial Consultation</div>
                <div className="text-2xl font-bold text-gray-900">30 minutes</div>
                <div className="text-sm text-gray-600">with a retirement specialist</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Average Retirement Savings</div>
                <div className="text-2xl font-bold text-gray-900">$1.2M</div>
                <div className="text-sm text-gray-600">for our clients at 65</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Our Retirement Planning service provides a comprehensive approach to 
                preparing for your golden years. We help you create a roadmap that considers 
                your desired lifestyle, healthcare needs, legacy goals, and potential risks.
              </p>
              <p>
                Whether you're just starting to save for retirement or are approaching 
                retirement age, our certified retirement planners will work with you to 
                develop strategies that maximize your savings, minimize taxes, and ensure 
                your money lasts throughout retirement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Comprehensive Retirement Planning</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-200 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <Icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Retirement Accounts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Retirement Account Management</h2>
            
            <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Account Types We Manage</h3>
              <div className="space-y-4">
                {accountTypes.map((account, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg border border-green-100">
                    <div>
                      <div className="font-medium text-gray-900">{account.type}</div>
                      <div className="text-sm text-gray-600">{account.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">{account.contribution}</div>
                      <div className="text-sm text-gray-600">max contribution</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Pre-Retirees</h3>
                <ul className="space-y-3">
                  {[
                    'Catch-up contribution strategies',
                    'Portfolio de-risking approaches',
                    'Healthcare cost projections',
                    'Social Security timing analysis',
                    'Retirement budget planning',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Retirees</h3>
                <ul className="space-y-3">
                  {[
                    'Withdrawal strategy development',
                    'Required Minimum Distribution planning',
                    'Tax bracket management',
                    'Legacy planning',
                    'Long-term care considerations',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Plan Your Secure Retirement</h2>
            <p className="text-xl opacity-90 mb-8">
              Start building your retirement strategy with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Planning
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-white font-semibold rounded-lg border border-white hover:bg-white/10 transition-colors"
              >
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}