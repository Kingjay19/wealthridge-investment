import {
  DollarSign,
  Calculator,
  TrendingUp,
  Shield,
  Target,
  CheckCircle,
  PieChart,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

const strategies = [
  {
    title: 'Tax-Loss Harvesting',
    description: 'Offset capital gains with strategic loss realization.',
    icon: Calculator,
  },
  {
    title: 'Asset Location',
    description: 'Place investments in optimal account types for tax efficiency.',
    icon: PieChart,
  },
  {
    title: 'Charitable Planning',
    description: 'Maximize deductions through strategic charitable giving.',
    icon: DollarSign,
  },
  {
    title: 'Retirement Account Optimization',
    description: 'Strategies for Traditional vs. Roth accounts.',
    icon: Shield,
  },
  {
    title: 'Capital Gains Management',
    description: 'Timing and realization of capital gains.',
    icon: TrendingUp,
  },
  {
    title: 'Estate Tax Planning',
    description: 'Minimize estate taxes through advanced strategies.',
    icon: Target,
  },
]

const taxSavings = [
  { scenario: 'High-Income Earner', savings: '$15,000 - $50,000', description: 'Annual tax savings' },
  { scenario: 'Retiree', savings: '$5,000 - $20,000', description: 'Annual tax savings' },
  { scenario: 'Business Owner', savings: '$25,000 - $100,000+', description: 'Annual tax savings' },
  { scenario: 'Estate Planning', savings: '10-40%', description: 'Estate tax reduction' },
]

export default function TaxOptimizationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-amber-50 via-white to-amber-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-100 rounded-xl">
                <DollarSign className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Tax Optimization
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  Advanced strategies to minimize your tax burden legally
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Starting at</div>
                <div className="text-2xl font-bold text-gray-900">$1,000/year</div>
                <div className="text-sm text-gray-600">comprehensive tax planning</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Average Client Savings</div>
                <div className="text-2xl font-bold text-gray-900">$18,500</div>
                <div className="text-sm text-gray-600">annual tax reduction</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">CPA Partnership</div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">partner CPAs nationwide</div>
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
                Our Tax Optimization service provides sophisticated strategies to legally 
                minimize your tax burden while maximizing your after-tax returns. We work 
                closely with your CPA to implement proactive tax planning throughout the year.
              </p>
              <p>
                From investment-related tax strategies to comprehensive tax planning for 
                high-net-worth individuals and business owners, our team of tax specialists 
                and financial advisors develop customized solutions that align with your 
                overall financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tax Optimization Strategies</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {strategies.map((strategy, index) => {
                const Icon = strategy.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-200 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-100 rounded-lg">
                        <Icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{strategy.title}</h3>
                        <p className="text-gray-600">{strategy.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tax Savings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Potential Tax Savings</h2>
            
            <div className="bg-linear-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Typical Client Scenarios</h3>
              <div className="space-y-4">
                {taxSavings.map((scenario, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg border border-amber-100">
                    <div>
                      <div className="font-medium text-gray-900">{scenario.scenario}</div>
                      <div className="text-sm text-gray-600">{scenario.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-600">{scenario.savings}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-amber-600" />
                  <h3 className="text-xl font-bold text-gray-900">Annual Tax Planning Process</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'January: Year-end review and planning',
                    'Quarterly: Tax projection updates',
                    'April: Tax return analysis',
                    'Monthly: Tax-loss harvesting opportunities',
                    'December: Year-end tax strategies',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-amber-600" />
                  <h3 className="text-xl font-bold text-gray-900">Compliance & Documentation</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'IRS-compliant strategies only',
                    'Complete transaction documentation',
                    'Annual tax reporting package',
                    'CPA coordination and support',
                    'Audit support if needed',
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
      <section className="py-20 bg-linear-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Start Saving on Taxes Today</h2>
            <p className="text-xl opacity-90 mb-8">
              Implement tax-efficient strategies to keep more of your investment returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-amber-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Begin Tax Planning
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