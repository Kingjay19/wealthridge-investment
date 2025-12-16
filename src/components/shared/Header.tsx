'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Building2, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Investments', href: '/investments' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-primary-600 to-primary-800">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">WealthBridge</span>
                <span className="text-xs text-primary-600 font-medium">Investment Banking</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-6 ml-8 pl-8 border-l border-gray-200">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-success" />
                <span className="text-gray-600">256-bit SSL Secure</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={cn(
          "lg:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}>
          <div className="space-y-2 py-6 border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-gray-700 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" fullWidth>
                  Sign In
                </Button>
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" fullWidth>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}