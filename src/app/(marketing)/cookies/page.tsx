import { Cookie, Settings, Shield, Eye } from 'lucide-react'
import Link from 'next/link'

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-linear-to-r from-primary-600 to-primary-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl">
                <Cookie className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
                <p className="text-xl opacity-90 mt-2">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="lead">
                This Cookie Policy explains how WealthBridge Investment Banking ("we," "us," or "our") uses cookies 
                and similar technologies on our website and platform. It explains what these technologies are and why 
                we use them, as well as your rights to control our use of them.
              </p>
            </div>

            {/* Cookie Types */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">Essential Cookies</h3>
                </div>
                <p className="text-gray-600">
                  Required for the website to function properly. Cannot be disabled.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="h-6 w-6 text-purple-600" />
                  <h3 className="text-lg font-bold text-gray-900">Functional Cookies</h3>
                </div>
                <p className="text-gray-600">
                  Remember your preferences and enhance your experience.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-900">Analytics Cookies</h3>
                </div>
                <p className="text-gray-600">
                  Help us understand how visitors use our website.
                </p>
              </div>
            </div>

            {/* Policy Sections */}
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                    Cookies are widely used by website owners to make their websites work, or to work more efficiently, 
                    as well as to provide reporting information.
                  </p>
                  <p>
                    Cookies set by the website owner are called "first-party cookies." Cookies set by parties other than 
                    the website owner are called "third-party cookies." Third-party cookies enable third-party features 
                    or functionality to be provided on or through the website (e.g., advertising, interactive content, 
                    and analytics).
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Do We Use Cookies?</h2>
                <div className="prose prose-gray max-w-none">
                  <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical 
                    reasons for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies.</p>
                  
                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Essential Cookies</h3>
                  <ul className="list-disc pl-5">
                    <li><strong>Session Management:</strong> Maintain your logged-in state</li>
                    <li><strong>Security:</strong> Protect against cross-site request forgery</li>
                    <li><strong>Load Balancing:</strong> Distribute traffic across servers</li>
                    <li><strong>Authentication:</strong> Verify your identity</li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Functional Cookies</h3>
                  <ul className="list-disc pl-5">
                    <li><strong>Preferences:</strong> Remember your language and region settings</li>
                    <li><strong>Personalization:</strong> Remember your dashboard layout preferences</li>
                    <li><strong>Feature Usage:</strong> Remember which features you use most</li>
                  </ul>

                  <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">Analytics Cookies</h3>
                  <ul className="list-disc pl-5">
                    <li><strong>Usage Statistics:</strong> Understand how visitors use our platform</li>
                    <li><strong>Performance:</strong> Monitor website performance and errors</li>
                    <li><strong>Improvement:</strong> Identify areas for improvement</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How Can You Control Cookies?</h2>
                <div className="prose prose-gray max-w-none">
                  <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie 
                    preferences by clicking on the appropriate opt-out links provided in the cookie banner or by 
                    modifying your web browser controls.</p>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mt-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Browser Controls</h3>
                    <p>Most web browsers allow you to control cookies through their settings preferences. However, 
                      if you limit the ability of websites to set cookies, you may worsen your overall user experience, 
                      since it will no longer be personalized to you. It may also stop you from saving customized 
                      settings like login information.</p>
                    
                    <p className="mt-4"><strong>Browser-specific instructions:</strong></p>
                    <ul className="list-disc pl-5">
                      <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline">Google Chrome</a></li>
                      <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
                      <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:underline">Safari</a></li>
                      <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="prose prose-gray max-w-none">
                  <p>If you have questions about our use of cookies or other technologies, please contact us:</p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4">
                    <p><strong>WealthBridge Investment Banking</strong></p>
                    <p>Email: privacy@wealthbridge.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Wall Street, New York, NY 10005</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Back Link */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                ← Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}