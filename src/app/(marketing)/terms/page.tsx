import { FileText, AlertTriangle, CheckCircle, Shield } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-linear-to-r from-primary-600 to-primary-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-xl">
                <FileText className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
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
            {/* Important Notice */}
            <div className="bg-linear-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border border-amber-200">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Important Legal Notice</h3>
                  <p className="text-gray-700">
                    Please read these Terms of Service carefully before using WealthBridge Investment Banking. 
                    By accessing or using our platform, you agree to be bound by these terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Terms */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-900">Agreement to Terms</h3>
                </div>
                <p className="text-gray-600">
                  By creating an account or using our services, you agree to these Terms of Service and our Privacy Policy.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">Investment Risks</h3>
                </div>
                <p className="text-gray-600">
                  All investments involve risk, including possible loss of principal. Past performance does not guarantee future results.
                </p>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Account Registration</h2>
                <div className="prose prose-gray max-w-none">
                  <p>To use our services, you must:</p>
                  <ul className="list-disc pl-5">
                    <li>Be at least 18 years old</li>
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Promptly update any changes to your information</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                  <p>We reserve the right to refuse service, suspend, or terminate accounts at our discretion.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Investment Services</h2>
                <div className="prose prose-gray max-w-none">
                  <p>WealthBridge provides:</p>
                  <ul className="list-disc pl-5">
                    <li>Investment advisory services through our automated platform</li>
                    <li>Portfolio management and rebalancing</li>
                    <li>Financial planning tools and resources</li>
                    <li>Educational content about investing</li>
                  </ul>
                  <p className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <strong>Important:</strong> We are not a broker-dealer. We do not execute trades on your behalf. 
                    All investment decisions are made by you, and you are responsible for all investment outcomes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Fees and Payments</h2>
                <div className="prose prose-gray max-w-none">
                  <p>Our fee structure includes:</p>
                  <ul className="list-disc pl-5">
                    <li><strong>Management Fee:</strong> 0.25% annually of assets under management</li>
                    <li><strong>Transaction Fees:</strong> None for standard trades</li>
                    <li><strong>Account Fees:</strong> No account minimums or inactivity fees</li>
                  </ul>
                  <p>Fees are charged quarterly in arrears and are automatically deducted from your account. 
                    We will provide 30 days notice for any fee changes.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Risk Disclosure</h2>
                <div className="prose prose-gray max-w-none">
                  <p>Investing involves risk, including but not limited to:</p>
                  <ul className="list-disc pl-5">
                    <li><strong>Market Risk:</strong> The value of investments may fluctuate</li>
                    <li><strong>Liquidity Risk:</strong> Some investments may be difficult to sell quickly</li>
                    <li><strong>Inflation Risk:</strong> Inflation may erode purchasing power</li>
                    <li><strong>Concentration Risk:</strong> Lack of diversification increases risk</li>
                    <li><strong>Regulatory Risk:</strong> Changes in laws may affect investments</li>
                  </ul>
                  <p>You should carefully consider your investment objectives, risk tolerance, and financial situation before investing.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                <div className="prose prose-gray max-w-none">
                  <p>To the maximum extent permitted by law:</p>
                  <ul className="list-disc pl-5">
                    <li>We are not liable for any indirect, incidental, or consequential damages</li>
                    <li>Our total liability shall not exceed the fees paid to us in the last 12 months</li>
                    <li>We are not responsible for third-party actions or market conditions</li>
                    <li>We do not guarantee investment returns or account performance</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Information</h2>
                <div className="prose prose-gray max-w-none">
                  <p>For questions about these Terms of Service, please contact us:</p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4">
                    <p><strong>WealthBridge Investment Banking</strong></p>
                    <p>123 Wall Street, New York, NY 10005</p>
                    <p>Email: legal@wealthbridge.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Hours: Monday-Friday, 9am-6pm EST</p>
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