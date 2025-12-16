'use client'

import { useState } from 'react'
import { Star, Quote, TrendingUp, Shield, Target, Calendar, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const testimonials = [
  {
    id: 1,
    name: 'Michael Rodriguez',
    role: 'Software Engineer',
    location: 'San Francisco, CA',
    investment: '$25,000',
    duration: '2 years',
    returns: '+42%',
    avatar: 'MR',
    color: 'bg-blue-100',
    textColor: 'text-blue-600',
    quote: 'As someone who knew nothing about investing, WealthBridge made it incredibly simple. The automated portfolio management and educational resources gave me confidence to start investing seriously.',
    rating: 5,
    verified: true,
    tags: ['Beginner Friendly', 'Great Returns', 'Easy to Use'],
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Marketing Director',
    location: 'New York, NY',
    investment: '$50,000',
    duration: '3 years',
    returns: '+68%',
    avatar: 'SC',
    color: 'bg-green-100',
    textColor: 'text-green-600',
    quote: 'The tax optimization features alone have saved me thousands. Combined with the excellent returns, this platform has been transformative for my retirement planning.',
    rating: 5,
    verified: true,
    tags: ['Tax Savings', 'Retirement Planning', 'Professional'],
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Retired Doctor',
    location: 'Miami, FL',
    investment: '$150,000',
    duration: '4 years',
    returns: '+92%',
    avatar: 'JW',
    color: 'bg-purple-100',
    textColor: 'text-purple-600',
    quote: 'After trying multiple platforms, WealthBridge stands out for its transparency and customer service. My dedicated advisor has been invaluable in navigating market volatility.',
    rating: 5,
    verified: true,
    tags: ['Excellent Support', 'Transparent', 'Trustworthy'],
  },
  {
    id: 4,
    name: 'Priya Patel',
    role: 'Small Business Owner',
    location: 'Austin, TX',
    investment: '$75,000',
    duration: '1.5 years',
    returns: '+28%',
    avatar: 'PP',
    color: 'bg-amber-100',
    textColor: 'text-amber-600',
    quote: 'The ability to access global markets from one platform has diversified my portfolio significantly. The mobile app is also incredibly well-designed.',
    rating: 4,
    verified: true,
    tags: ['Global Access', 'Mobile App', 'Diversification'],
  },
  {
    id: 5,
    name: 'Robert Kim',
    role: 'Financial Analyst',
    location: 'Chicago, IL',
    investment: '$200,000',
    duration: '5 years',
    returns: '+115%',
    avatar: 'RK',
    color: 'bg-red-100',
    textColor: 'text-red-600',
    quote: 'As a financial professional, I appreciate the sophisticated tools and real-time analytics. The platform offers institutional-grade features at retail prices.',
    rating: 5,
    verified: true,
    tags: ['Professional Tools', 'Real-time Data', 'Advanced Features'],
  },
  {
    id: 6,
    name: 'Emily Davis',
    role: 'Teacher',
    location: 'Portland, OR',
    investment: '$15,000',
    duration: '1 year',
    returns: '+18%',
    avatar: 'ED',
    color: 'bg-indigo-100',
    textColor: 'text-indigo-600',
    quote: 'Starting with just $100 was perfect for me. The educational content helped me learn while I invested, and now I feel confident managing my own portfolio.',
    rating: 5,
    verified: true,
    tags: ['Low Minimum', 'Educational', 'Beginner'],
  },
]

const stats = [
  { label: 'Average Rating', value: '4.9/5', icon: Star, description: 'Based on 2,500+ reviews' },
  { label: 'Customer Satisfaction', value: '98%', icon: TrendingUp, description: 'Would recommend to others' },
  { label: 'Platform Security', value: '99.9%', icon: Shield, description: 'Uptime and reliability' },
  { label: 'Investment Goals Met', value: '92%', icon: Target, description: 'Of users reach their targets' },
]

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [filter, setFilter] = useState<string>('all')

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.tags.includes(filter))

  const tags = ['all', 'Beginner Friendly', 'Tax Savings', 'Professional Tools', 'Global Access', 'Retirement Planning']

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-4">
            <Quote className="h-4 w-4" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Investors Are
            <span className="text-primary-600"> Saying</span>
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied investors who have grown their wealth with our platform.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-50 rounded-lg">
                    <Icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            )
          })}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tag
                  ? 'bg-primary-600 text-blue-600 shadow'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag === 'all' ? 'All Reviews' : tag}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`${testimonial.color} ${testimonial.textColor} w-12 h-12 rounded-full flex items-center justify-center font-semibold`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                {/* Investment Info */}
                <div className="text-right">
                  <div className="text-lg font-bold text-primary-700">{testimonial.returns}</div>
                  <div className="text-xs text-gray-500">returns</div>
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">{testimonial.rating}.0</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {testimonial.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Investment Details */}
              <div className="pt-6 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Investment</div>
                    <div className="font-bold text-gray-900">{testimonial.investment}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-bold text-gray-900">{testimonial.duration}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial (Carousel) */}
        <div className="bg-linear-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left - Quote */}
            <div className="lg:w-2/3">
              <Quote className="h-12 w-12 text-primary-300 mb-6" />
              <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
                "WealthBridge transformed how I think about investing. What used to feel overwhelming now feels empowering."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-bold text-gray-900">David Miller</div>
                  <div className="text-gray-600">WealthBridge user since 2019</div>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Video/Stats */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Portfolio Growth</div>
                    <div className="text-sm text-gray-600">David's Journey</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: 'Initial Investment', value: '$50,000' },
                    { label: 'Current Value', value: '$98,500' },
                    { label: 'Total Return', value: '+97%' },
                    { label: 'Annualized Return', value: '+15.2%' },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="font-bold text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Featured In
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: 'Forbes', color: 'text-blue-600' },
              { name: 'Bloomberg', color: 'text-purple-600' },
              { name: 'Wall Street Journal', color: 'text-amber-600' },
              { name: 'Financial Times', color: 'text-pink-600' },
              { name: 'CNBC', color: 'text-red-600' },
            ].map((publication, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl font-bold ${publication.color} mb-2`}>
                  {publication.name}
                </div>
                <div className="text-sm text-gray-600">
                  {['Best Platform', 'Top Pick', 'Editor\'s Choice', 'Recommended', '5-Star'][index]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary-100 to-blue-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="font-medium text-primary-800">Real investors, real results</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Join Our Community of Successful Investors?
          </h3>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your investment journey today and see why thousands of investors trust us with their financial future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="shadow-lg hover:shadow-xl">
                Start Investing Free
              </Button>
            </Link>
            <Link href="/testimonials">
              <Button variant="outline" size="lg">
                Read More Stories
              </Button>
            </Link>
          </div>

          {/* Trust Note */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>All testimonials verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-500" />
                <span>Updated quarterly</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-500" />
                <span>Real investment data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}