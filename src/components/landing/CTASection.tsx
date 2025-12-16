'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Check, Shield, Lock, TrendingUp, ArrowRight, Zap, Clock, BarChart } from 'lucide-react'
import Button from '@/components/ui/Button'

const benefits = [
  {
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no account minimums',
    icon: Shield,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Bank-Level Security',
    description: '256-bit encryption & two-factor authentication',
    icon: Lock,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Start with $100',
    description: 'Begin your investment journey with just $100',
    icon: TrendingUp,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer service',
    icon: Clock,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
  },
]

const faqs = [
  {
    question: 'Is there a minimum investment amount?',
    answer: 'Yes, you can start with as little as $100. There are no account minimums or hidden fees.',
  },
  {
    question: 'How are my investments protected?',
    answer: 'We use 256-bit SSL encryption, two-factor authentication, and are FDIC insured on cash balances. Your investments are also SIPC protected up to $500,000.',
  },
  {
    question: 'Can I withdraw my money anytime?',
    answer: 'Yes, you can withdraw your funds at any time. Withdrawals typically take 2-3 business days to process.',
  },
  {
    question: 'Do you charge management fees?',
    answer: 'We charge a transparent 0.25% annual management fee for our automated portfolios. There are no commission fees on trades.',
  },
]

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 22,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes--
          } else {
            minutes = 59
            if (hours > 0) {
              hours--
            } else {
              hours = 23
              if (days > 0) {
                days--
              }
            }
          }
        }
        
        // If timer reaches zero, clear interval
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer)
        }
        
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`
  }

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0

  return (
    <div className="mb-8">
      <div className="text-sm text-gray-400 mb-3">Offer expires in:</div>
      <div className="flex gap-3 mb-4">
        <div className="text-center">
          <div className="bg-gray-800 text-white text-2xl font-bold px-4 py-3 rounded-lg font-mono">
            {formatTime(timeLeft.days)}
          </div>
          <div className="text-xs text-gray-400 mt-2">Days</div>
        </div>
        <div className="text-center">
          <div className="bg-gray-800 text-white text-2xl font-bold px-4 py-3 rounded-lg font-mono">
            {formatTime(timeLeft.hours)}
          </div>
          <div className="text-xs text-gray-400 mt-2">Hours</div>
        </div>
        <div className="text-center">
          <div className="bg-gray-800 text-white text-2xl font-bold px-4 py-3 rounded-lg font-mono">
            {formatTime(timeLeft.minutes)}
          </div>
          <div className="text-xs text-gray-400 mt-2">Minutes</div>
        </div>
        <div className="text-center">
          <div className="bg-gray-800 text-white text-2xl font-bold px-4 py-3 rounded-lg font-mono">
            {formatTime(timeLeft.seconds)}
          </div>
          <div className="text-xs text-gray-400 mt-2">Seconds</div>
        </div>
      </div>
      
      {isExpired ? (
        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
          <p className="text-amber-400 text-sm font-medium text-center">
            ⚠️ This offer has expired. Contact support for current promotions.
          </p>
        </div>
      ) : (
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Time remaining</span>
            <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-linear-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: `${100 - ((timeLeft.hours + timeLeft.days * 24) / 72) * 100}%` 
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      console.log('Email submitted:', email)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary-50 via-white to-blue-50" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[20px_20px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-linear-to-br from-gray-900 to-gray-950 rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 mb-6">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-medium">Limited Time Offer</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Start Investing
                  <span className="text-primary-400"> Today</span>
                  <span className="block">Get 3 Months Free</span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-8">
                  Open your account in minutes and get 3 months of free portfolio management. 
                  No commitment, cancel anytime.
                </p>

                {/* Working Countdown Timer */}
                <CountdownTimer />

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  {[
                    'No management fees for 3 months',
                    'Personalized investment strategy',
                    'Access to premium features',
                    'Dedicated account manager',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Form */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Create Your Account
                  </h3>
                  <p className="text-gray-600">
                    Join 50,000+ investors in under 5 minutes
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h4>
                    <p className="text-gray-600">
                      We've sent a confirmation email to you. Check your inbox to continue.
                    </p>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Create Password
                        </label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition-all"
                          required
                        />
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="terms"
                          className="h-4 w-4 text-primary-600 rounded"
                          required
                        />
                        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                          I agree to the{' '}
                          <Link href="/terms" className="text-primary-600 hover:underline">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link href="/privacy" className="text-primary-600 hover:underline">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        fullWidth
                        className="bg-linear-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 shadow-lg"
                      >
                        Get Started Free
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link href="/login" className="text-primary-600 font-medium hover:underline">
                          Sign In
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`${benefit.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about investing with WealthBridge
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <BarChart className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Still have questions?{' '}
                <Link href="/contact" className="text-primary-600 font-medium hover:underline">
                  Contact our support team
                </Link>
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-green-100 to-emerald-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium text-green-800">No credit card required</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What Are You Waiting For?
            </h3>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of investors who are already building wealth with our platform. 
              Your financial future starts today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="shadow-lg hover:shadow-xl px-8">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg" className="px-8">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Trust Note */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>256-bit SSL Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-500" />
                  <span>FDIC Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-purple-500" />
                  <span>SIPC Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-linear-to-br from-primary-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-linear-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
    </section>
  )
}