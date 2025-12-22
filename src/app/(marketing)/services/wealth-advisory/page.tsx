import {
  Users,
  Shield,
  TrendingUp,
  Target,
  PieChart,
  Globe,
  CheckCircle,
  Award
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    title: 'Dedicated Financial Advisor',
    description: 'Your personal advisor for all financial matters.',
    icon: Users,
  },
  {
    title: 'Family Office Services',
    description: 'Comprehensive wealth management for families.',
    icon: Shield,
  },
  {
    title: 'Philanthropic Planning',
    description: 'Charitable giving and foundation management.',
    icon: Globe,
  },
  {
    title: 'Business Succession',
    description: 'Planning for business transition and sale.',
    icon: TrendingUp,
  },
  {
    title: 'Complex Tax Planning',
    description: 'Advanced strategies for high-net-worth individuals.',
    icon: PieChart,
  },
  {
    title: 'Investment Due Diligence',
    description: 'Thorough analysis of private investment opportunities.',
    icon: Target,
  },
]

const serviceTiers = [
  {
    tier: 'Executive',
    assets: '$1M - $5M',
    fee: '0.75%',
    features: ['Dedicated advisor', 'Quarterly reviews', 'Tax planning', 'Estate planning basics'],
  },
  {
    tier: 'Premium',
    assets: '$5M - $10M',
    fee: '0.60%',
    features: ['Senior advisor', 'Monthly reviews', 'Advanced tax strategies', 'Family meeting facilitation'],
  },
  {
    tier: 'Family Office',
    assets: '$10M+',
    fee: 'Custom',
    features: ['Team of specialists', 'Weekly coordination', 'Full family office services', 'Generational planning'],
  },
]

export default function WealthAdvisoryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-purple-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Wealth Advisory
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  Personalized financial advice for high-net-worth individuals and families
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Minimum Assets</div>
                <div className="text-2xl font-bold text-gray-900">$1M</div>
                <div className="text-sm text-gray-600">for advisory services</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Average Client</div>
                <div className="text-2xl font-bold text-gray-900">$5.2M</div>
                <div className="text-sm text-gray-600">in assets under management</div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-sm text-gray-500">Advisor Experience</div>
                <div className="text-2xl font-bold text-gray-900">15+ years</div>
                <div className="text-sm text-gray-600">average industry experience</div>
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
                Our Wealth Advisory service provides comprehensive financial planning and 
                investment management for high-net-worth individuals, families, and 
                executives. We serve as your personal Chief Financial Officer, coordinating 
                all aspects of your financial life.
              </p>
              <p>
                With a team approach that brings together specialists in investments, 
                taxes, estate planning, and risk management, we provide integrated solutions 
                for complex financial situations. Our advisors have extensive experience 
                working with successful individuals and families to preserve and grow 
                multigenerational wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Comprehensive Wealth Management</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-200 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Icon className="h-6 w-6 text-purple-600" />
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

      {/* Service Tiers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Tiers</h2>
            
            <div className="space-y-8 mb-12">
              {serviceTiers.map((tier, index) => (
                <div key={index} className="bg-linear-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{tier.tier}</h3>
                      <div className="text-purple-600 font-medium">{tier.assets} in assets</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">{tier.fee}</div>
                      <div className="text-sm text-gray-600">annual fee</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-purple-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Our Advisors</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'CFA, CFP, or CPA certified',
                    'Average 15+ years experience',
                    'Specialized industry expertise',
                    'Advanced degree holders',
                    'Continuous professional development',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-900">Client Benefits</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Integrated financial planning',
                    'Access to exclusive investments',
                    'Family governance support',
                    'Multi-generational planning',
                    'Regular performance reporting',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
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
      <section className="py-20 bg-linear-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Experience Personalized Wealth Management</h2>
            <p className="text-xl opacity-90 mb-8">
              Schedule a confidential consultation with our wealth advisory team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
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