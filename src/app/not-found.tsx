import Link from 'next/link'
import { Home, AlertTriangle, ArrowLeft, Search, Building2 } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8">
              <Building2 className="h-6 w-6" />
              <span className="text-xl font-bold">WealthBridge</span>
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 mb-6">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">404 Error</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Illustration/Message */}
            <div>
              <div className="relative">
                {/* Animated background */}
                <div className="absolute inset-0 bg-linear-to-r from-primary-100 to-blue-100 rounded-3xl -rotate-6" />
                
                <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl">
                  <div className="text-9xl font-bold text-primary-100 mb-6">404</div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">What happened?</h3>
                        <p className="text-gray-600">
                          The page may have been moved, deleted, or you might have typed the wrong URL.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Search className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">What can you do?</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full" />
                            Double-check the URL for typos
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full" />
                            Use the navigation menu above
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full" />
                            Return to the homepage
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary-500 rounded-full" />
                            Contact our support team
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Actions */}
            <div className="space-y-8">
              <div className="bg-linear-to-br from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Let's Get You Back on Track
                </h2>
                <p className="text-gray-600 mb-6">
                  While we work on creating that page, here are some helpful alternatives:
                </p>

                <div className="space-y-4">
                  <Link
                    href="/"
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Home className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Homepage</div>
                        <div className="text-sm text-gray-600">Return to the main page</div>
                      </div>
                    </div>
                    <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-primary-600 group-hover:-translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/services"
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Building2 className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Our Services</div>
                        <div className="text-sm text-gray-600">Explore investment options</div>
                      </div>
                    </div>
                    <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-green-600 group-hover:-translate-x-1 transition-all" />
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Report Issue</div>
                        <div className="text-sm text-gray-600">Tell us about this problem</div>
                      </div>
                    </div>
                    <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:-translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>

              {/* Search Suggestions */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Looking for something specific?</h3>
                <div className="space-y-3">
                  {[
                    { text: 'Investment Plans', href: '/investments' },
                    { text: 'Account Login', href: '/login' },
                    { text: 'Contact Support', href: '/contact' },
                    { text: 'Privacy Policy', href: '/privacy' },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-primary-600">{item.text}</span>
                      <ArrowLeft className="h-4 w-4 text-gray-400 group-hover:text-primary-600 group-hover:-translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 pt-12 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-6">
              Still can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-blue-700 font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-700 font-semibold rounded-lg border border-primary-200 hover:bg-primary-50 transition-colors"
              >
                Back to Homepage
              </Link>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-linear-to-br from-primary-500/10 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-linear-to-br from-blue-500/10 to-transparent rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </div>
  )
}