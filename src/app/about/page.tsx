import {
  Target,
  Shield,
  Users,
  TrendingUp,
  Award,
  Globe,
  Heart,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const values = [
  {
    title: 'Integrity',
    description: 'We believe in transparent, honest communication with our clients.',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in everything we do for our clients.',
    icon: Award,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
  },
  {
    title: 'Innovation',
    description: 'We leverage cutting-edge technology to deliver superior results.',
    icon: TrendingUp,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Client Focus',
    description: 'Our clients success is our ultimate measure of achievement.',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
]

const milestones = [
  { year: '2018', event: 'Company Founded', description: 'Started with a vision to democratize investing' },
  { year: '2019', event: 'First 1,000 Clients', description: 'Reached our first major milestone' },
  { year: '2020', event: '$50M in Assets', description: 'Crossed $50 million in assets under management' },
  { year: '2021', event: '25,000 Investors', description: 'Crossed 25,000 investors milestone' },
  { year: '2022', event: 'International Expansion', description: 'Expanded services to 10 new countries' },
  { year: '2023', event: '$1.2B in Assets', description: 'Reached $1.2 billion in assets under management' },
]

const team = [
  {
    name: 'Robert Chen',
    role: 'CEO & Founder',
    experience: '20+ years in finance',
    education: 'MBA, Harvard Business School',
    image: 'RC',
    color: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    name: 'Sarah Johnson',
    role: 'Chief Investment Officer',
    experience: '15+ years portfolio management',
    education: 'CFA, Wharton School',
    image: 'SJ',
    color: 'bg-green-100',
    textColor: 'text-green-600',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Technology',
    experience: '12+ years fintech',
    education: 'M.S. Computer Science, MIT',
    image: 'MR',
    color: 'bg-purple-100',
    textColor: 'text-purple-600',
  },
  {
    name: 'Priya Patel',
    role: 'Head of Client Services',
    experience: '10+ years client relations',
    education: 'MBA, Stanford University',
    image: 'PP',
    color: 'bg-amber-100',
    textColor: 'text-amber-600',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary-50 via-white to-primary-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="text-primary-600"> WealthBridge</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to make professional investing accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-6">
                <Target className="h-4 w-4" />
                <span className="text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Democratizing
                <span className="text-primary-600"> Investment Banking</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At WealthBridge, we believe that everyone deserves access to professional investment 
                management, regardless of their net worth or financial expertise.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2018, we've grown from a small startup to serving over 50,000 investors 
                worldwide, managing more than $2.5 billion in assets.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Join Our Mission
                </Button>
              </Link>
            </div>

            <div className="bg-linear-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <Globe className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
                    <p className="text-gray-600">
                      Serving investors in 40+ countries with localized investment strategies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Client Success</h3>
                    <p className="text-gray-600">
                      98% client satisfaction rate with an average portfolio growth of 12.5% annually.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Recognition</h3>
                    <p className="text-gray-600">
                      Multiple industry awards for innovation and customer service excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center"
                >
                  <div className={`${value.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Milestones in our growth and development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-primary-200 to-blue-200" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
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
                      <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      </div>
                    </div>

                    {/* Year */}
                    <div className={`lg:w-1/2 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                      <div className="text-4xl font-bold text-gray-900 opacity-20">
                        {milestone.year}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experts guiding your financial future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`${member.color} ${member.textColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl`}>
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-primary-600 font-medium mb-4">{member.role}</div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{member.experience}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Award className="h-4 w-4" />
                    <span>{member.education}</span>
                  </div>
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
              Join Us in Building Financial Futures
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Be part of our mission to make professional investing accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" variant='primary'>
                  Join Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}