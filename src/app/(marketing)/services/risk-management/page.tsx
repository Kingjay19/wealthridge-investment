import {
  Shield,
  AlertTriangle,
  Target,
  CheckCircle,
  PieChart,
  Users,
  DollarSign,
  Home
} from 'lucide-react'
import Link from 'next/link'

const riskAreas = [
  {
    title: 'Insurance Analysis',
    description: 'Comprehensive review of all insurance coverage.',
    icon: Shield,
  },
  {
    title: 'Emergency Fund Planning',
    description: 'Establish appropriate cash reserves.',
    icon: DollarSign,
  },
  {
    title: 'Asset Protection',
    description: 'Strategies to protect assets from creditors.',
    icon: Home,
  },
  {
    title: 'Liability Management',
    description: 'Managing personal and business liabilities.',
    icon: AlertTriangle,
  },
  {
    title: 'Business Risk Assessment',
    description: 'For business owners and professionals.',
    icon: Target,
  },
  {
    title: 'Family Risk Planning',
    description: 'Protecting your familys financial future.',
    icon: Users,
  },
]

const insuranceTypes = [
  { type: 'Life Insurance', coverage: '$1-10M', purpose: 'Income replacement, estate liquidity' },
  { type: 'Disability Insurance', coverage: '60-80% income', purpose: 'Income protection if disabled' },
  { type: 'Long-Term Care', coverage: '$200-500/day', purpose: 'Nursing home or home care' },
  { type: 'Umbrella Liability', coverage: '$1-10M', purpose: 'Extra liability protection' },
]

export default function RiskManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-indigo-50 via-white to-indigo-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Risk Management
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  Protect your assets and income against uncertainties
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Starting at</div>
                <div className="text-2xl font-bold text-gray-900">$750/year</div>
                <div className="text-sm text-gray-600">comprehensive risk assessment</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Average Client Savings</div>
                <div className="text-2xl font-bold text-gray-900">$3,200</div>
                <div className="text-sm text-gray-600">annual insurance optimization</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Emergency Fund Target</div>
                <div className="text-2xl font-bold text-gray-900">6-12 months</div>
                <div className="text-sm text-gray-600">of living expenses</div>
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
                Our Risk Management service focuses on protecting what you've worked hard 
                to build. We identify potential financial risks and develop strategies to 
                mitigate them, ensuring your financial plan remains secure against unexpected events.
              </p>
              <p>
                From insurance analysis and emergency fund planning to asset protection 
                strategies, we provide comprehensive risk management solutions. Our goal 
                is to help you sleep better at night knowing your financial future is 
                protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Comprehensive Risk Management</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {riskAreas.map((area, index) => {
                const Icon = area.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-200 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                        <p className="text-gray-600">{area.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Analysis */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Insurance Analysis & Optimization</h2>
            
            <div className="bg-linear-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Essential Insurance Coverage</h3>
              <div className="space-y-4">
                {insuranceTypes.map((insurance, index) => (
                  <div key={index} className="flex items-start justify-between bg-white p-4 rounded-lg border border-indigo-100">
                    <div>
                      <div className="font-medium text-gray-900">{insurance.type}</div>
                      <div className="text-sm text-gray-600">{insurance.purpose}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{insurance.coverage}</div>
                      <div className="text-sm text-gray-600">typical coverage</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Assessment Process</h3>
                <ul className="space-y-3">
                  {[
                    'Comprehensive risk inventory',
                    'Insurance policy review',
                    'Coverage gap analysis',
                    'Cost optimization recommendations',
                    'Implementation support',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-indigo-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Risk Management</h3>
                <ul className="space-y-3">
                  {[
                    'Key person insurance',
                    'Buy-sell agreement funding',
                    'Business interruption coverage',
                    'Professional liability insurance',
                    'Succession planning integration',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
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
      <section className="py-20 bg-linear-to-r from-indigo-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Protect Your Financial Future</h2>
            <p className="text-xl opacity-90 mb-8">
              Ensure your financial plan is secure against unexpected events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Begin Risk Assessment
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