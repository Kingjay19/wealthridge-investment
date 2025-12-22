import {
  TrendingUp,
  Shield,
  Users,
  BarChart3,
  Target,
  Globe,
  PieChart,
  DollarSign,
  Clock,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const services = [
  {
    title: 'Investment Management',
    description: 'Professional portfolio management tailored to your financial goals.',
    icon: TrendingUp,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    features: [
      'Personalized portfolio construction',
      'Regular rebalancing',
      'Tax optimization strategies',
      'Performance reporting'
    ],
    startingAt: '0.25%',
  },
  {
    title: 'Retirement Planning',
    description: 'Comprehensive retirement solutions for a secure future.',
    icon: Target,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    features: [
      'IRA & 401(k) management',
      'Income planning',
      'Social security optimization',
      'Estate planning'
    ],
    startingAt: '$500/year',
  },
  {
    title: 'Wealth Advisory',
    description: 'Personalized financial advice for high-net-worth individuals.',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    features: [
      'Dedicated financial advisor',
      'Family office services',
      'Philanthropic planning',
      'Business succession planning'
    ],
    startingAt: 'Custom',
  },
  {
    title: 'Tax Optimization',
    description: 'Strategies to minimize your tax burden legally.',
    icon: DollarSign,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    features: [
      'Tax-loss harvesting',
      'Charitable giving strategies',
      'Tax-efficient withdrawals',
      'Annual tax planning'
    ],
    startingAt: '$1,000/year',
  },
  {
    title: 'Education Planning',
    description: 'Save for education expenses with tax-advantaged accounts.',
    icon: Globe,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    features: [
      '529 plan management',
      'Education savings strategies',
      'Financial aid optimization',
      'Multi-child planning'
    ],
    startingAt: '$250/year',
  },
  {
    title: 'Risk Management',
    description: 'Protect your assets and income against uncertainties.',
    icon: Shield,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    features: [
      'Insurance analysis',
      'Emergency fund planning',
      'Asset protection strategies',
      'Liability management'
    ],
    startingAt: '$750/year',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Free initial consultation to understand your financial goals.',
    icon: Users,
  },
  {
    step: '02',
    title: 'Analysis',
    description: 'Comprehensive analysis of your current financial situation.',
    icon: BarChart3,
  },
  {
    step: '03',
    title: 'Strategy',
    description: 'Personalized financial strategy development.',
    icon: Target,
  },
  {
    step: '04',
    title: 'Implementation',
    description: 'Execution of your customized financial plan.',
    icon: PieChart,
  },
  {
    step: '05',
    title: 'Monitoring',
    description: 'Ongoing monitoring and regular adjustments.',
    icon: Clock,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary-50 via-white to-primary-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional
              <span className="text-primary-600"> Financial Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive financial solutions designed to help you achieve your wealth goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/investments">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional financial services tailored to your unique needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-500">Starting at</div>
                        <div className="text-xl font-bold text-gray-900">{service.startingAt}</div>
                      </div>
                      <Link href={`/services/${service.title.toLowerCase().replace(/ /g, '-')}`}>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach to achieving your financial goals
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-primary-200 to-blue-200 hidden lg:block" />
            
            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0
                
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col lg:flex-row items-center ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`lg:w-1/2 ${isEven ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                      <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                        <div className="inline-flex items-center gap-3 mb-4">
                          <div className="p-2 bg-primary-100 rounded-lg">
                            <Icon className="h-6 w-6 text-primary-600" />
                          </div>
                          <span className="text-2xl font-bold text-gray-900">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2">
                      <div className="w-8 h-8 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center z-10">
                        <span className="text-sm font-bold text-primary-600">{step.step}</span>
                      </div>
                    </div>

                    {/* Spacer for alternating sides */}
                    <div className="lg:w-1/2" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Our team of certified financial advisors is ready to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" variant='primary'>
                  Get Started Today
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" >
                  Meet Our Advisors
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}