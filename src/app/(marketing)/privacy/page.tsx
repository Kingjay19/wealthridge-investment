import { Shield, Lock, Eye, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-linear-to-r from-primary-600 to-primary-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
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
                WealthBridge Investment Banking ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you use our investment platform and services.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="h-6 w-6 text-primary-600" />
                  <h3 className="text-lg font-bold text-gray-900">Data Security</h3>
                </div>
                <p className="text-gray-600">
                  We use bank-level 256-bit SSL encryption to protect your personal and financial information.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-6 w-6 text-primary-600" />
                  <h3 className="text-lg font-bold text-gray-900">Transparency</h3>
                </div>
                <p className="text-gray-600">
                  We clearly explain what data we collect and how we use it to serve you better.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                  <h3 className="text-lg font-bold text-gray-900">Your Control</h3>
                </div>
                <p className="text-gray-600">
                  You have control over your data and can manage your privacy preferences anytime.
                </p>
              </div>
            </div>

            {/* Policy Sections */}
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <div className="prose prose-gray max-w-none">
                  <p>We collect information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-5">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, Social Security number</li>
                    <li><strong>Financial Information:</strong> Bank account details, investment history, transaction data</li>
                    <li><strong>Identification Documents:</strong> Government-issued ID, proof of address</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information, usage data</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <div className="prose prose-gray max-w-none">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-5">
                    <li>Provide, maintain, and improve our investment services</li>
                    <li>Process your transactions and manage your account</li>
                    <li>Verify your identity and prevent fraud</li>
                    <li>Communicate with you about your account and our services</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Personalize your experience and provide relevant investment recommendations</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                <div className="prose prose-gray max-w-none">
                  <p>We implement appropriate technical and organizational security measures to protect your personal information, including:</p>
                  <ul className="list-disc pl-5">
                    <li>256-bit SSL encryption for all data transmissions</li>
                    <li>Two-factor authentication for account access</li>
                    <li>Regular security audits and vulnerability testing</li>
                    <li>Secure data centers with 24/7 monitoring</li>
                    <li>Employee training on data protection and privacy</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Your Rights</h2>
                <div className="prose prose-gray max-w-none">
                  <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-5">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                    <li><strong>Restriction:</strong> Request restriction of processing</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Objection:</strong> Object to certain types of processing</li>
                  </ul>
                  <p>To exercise these rights, please contact us at privacy@wealthbridge.com.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
                <div className="prose prose-gray max-w-none">
                  <p>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4">
                    <p><strong>WealthBridge Investment Banking</strong></p>
                    <p>123 Wall Street, New York, NY 10005</p>
                    <p>Email: privacy@wealthbridge.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
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