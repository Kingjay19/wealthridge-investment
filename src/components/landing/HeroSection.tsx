import Link from 'next/link'
import { ArrowRight, Shield, TrendingUp, Lock, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import HeroChart from './HeroChart'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary-50 via-white to-primary-50 py-20 sm:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-primary-100 text-primary-700 border border-primary-200">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Trusted by 50,000+ Investors</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Investing,
              <span className="text-primary-600"> Wealth Building</span>
              <span className="block">Made Simple</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional investment banking platform with intelligent portfolio management, 
              secure transactions, and competitive returns. Start with as little as $100.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                'No account minimums',
                '24/7 Professional Support',
                'Bank-level Security',
                'Automated Investing',
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/register">
                <Button size="lg" className="group shadow-lg hover:shadow-xl transition-shadow">
                  Start Investing Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-success-100 rounded-md">
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
                <span className="text-gray-700 font-medium">Up to 12% Annual Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-primary-100 rounded-md">
                  <Lock className="h-4 w-4 text-primary-600" />
                </div>
                <span className="text-gray-700 font-medium">Bank-Level Security</span>
              </div>
            </div>
          </div>
          
          {/* Right - Hero Chart */}
          <div className="relative">
            <HeroChart />
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200 flex items-center">
              <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-gray-900">Live Data</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-linear-to-r from-primary-600 to-primary-800 text-white rounded-full px-4 py-2 shadow-lg flex items-center">
              <span className="text-sm font-medium">#1 Rated Platform</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" />
    </section>
  )
}