import {
  Globe,
  GraduationCap,
  Calculator,
  Target,
  CheckCircle,
  Users,
  DollarSign,
  Calendar
} from 'lucide-react'
import Link from 'next/link'

const planningAreas = [
  {
    title: '529 Plan Management',
    description: 'Tax-advantaged savings plans for education expenses.',
    icon: DollarSign,
  },
  {
    title: 'Financial Aid Optimization',
    description: 'Strategies to maximize eligibility for financial aid.',
    icon: Calculator,
  },
  {
    title: 'College Cost Projections',
    description: 'Realistic projections of future education costs.',
    icon: Target,
  },
  {
    title: 'Multi-Child Planning',
    description: 'Coordinated planning for multiple children.',
    icon: Users,
  },
  {
    title: 'Savings Strategies',
    description: 'Optimal savings vehicles and contribution plans.',
    icon: GraduationCap,
  },
  {
    title: 'Timeline Planning',
    description: 'Phased approach based on childs age.',
    icon: Calendar,
  },
]

const collegeCosts = [
  { type: 'Public In-State', cost: '$25,000', annualIncrease: '3%' },
  { type: 'Public Out-of-State', cost: '$45,000', annualIncrease: '3.5%' },
  { type: 'Private University', cost: '$55,000', annualIncrease: '4%' },
  { type: 'Graduate School', cost: '$40,000', annualIncrease: '3%' },
]

export default function EducationPlanningPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-red-50 via-white to-red-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-xl">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Education Planning
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  Comprehensive strategies to save for education expenses
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Starting at</div>
                <div className="text-2xl font-bold text-gray-900">$250/year</div>
                <div className="text-sm text-gray-600">education planning service</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Average 529 Balance</div>
                <div className="text-2xl font-bold text-gray-900">$35,000</div>
                <div className="text-sm text-gray-600">for our clients at college age</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Financial Aid Impact</div>
                <div className="text-2xl font-bold text-gray-900">$15,000</div>
                <div className="text-sm text-gray-600">average annual aid optimization</div>
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
                Our Education Planning service helps families prepare for the significant 
                costs of higher education. We develop customized savings strategies that 
                maximize tax advantages while considering your overall financial picture.
              </p>
              <p>
                From 529 plan selection and management to financial aid optimization 
                strategies, we guide you through the complex landscape of education funding. 
                Our goal is to help you provide educational opportunities for your children 
                without jeopardizing your own financial security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education Planning Services</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {planningAreas.map((area, index) => {
                const Icon = area.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-red-100 rounded-lg">
                        <Icon className="h-6 w-6 text-red-600" />
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

      {/* College Costs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding College Costs</h2>
            
            <div className="bg-linear-to-r from-red-50 to-pink-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Annual College Costs (2024)</h3>
              <div className="space-y-4">
                {collegeCosts.map((cost, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg border border-red-100">
                    <div className="font-medium text-gray-900">{cost.type}</div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{cost.cost}</div>
                        <div className="text-sm text-gray-600">per year</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-red-600">{cost.annualIncrease}</div>
                        <div className="text-sm text-gray-600">annual increase</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Age-Based Planning</h3>
                <ul className="space-y-3">
                  {[
                    '0-5 years: Start 529 plan with aggressive growth',
                    '6-12 years: Regular contributions, moderate growth',
                    '13-17 years: Conservative allocation, final savings push',
                    '18+ years: Withdrawal strategy, financial aid applications',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tax Advantages</h3>
                <ul className="space-y-3">
                  {[
                    '529 Plans: Tax-free growth for qualified expenses',
                    'Coverdell ESAs: $2,000 annual contribution limit',
                    'UGMA/UTMA: Flexible but limited tax benefits',
                    'Roth IRA: Penalty-free withdrawals for education',
                    'Financial aid optimization strategies',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
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
      <section className="py-20 bg-linear-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Start Planning for Education Today</h2>
            <p className="text-xl opacity-90 mb-8">
              Secure your childs educational future with expert planning guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-red-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Begin Education Planning
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