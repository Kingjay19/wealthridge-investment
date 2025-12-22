import { Shield, Award, Building2, FileCheck } from 'lucide-react'
import Link from 'next/link'

export default function RegulatoryInfoPage() {
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
                <h1 className="text-4xl md:text-5xl font-bold">Regulatory Information</h1>
                <p className="text-xl opacity-90 mt-2">Compliance and regulatory disclosures</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Regulatory Badges */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="font-bold text-gray-900">SEC Registered</div>
                <div className="text-sm text-gray-600">Investment Advisor</div>
              </div>
              <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div className="font-bold text-gray-900">FINRA Member</div>
                <div className="text-sm text-gray-600">Broker-Dealer</div>
              </div>
              <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div className="font-bold text-gray-900">SIPC Protected</div>
                <div className="text-sm text-gray-600">Up to $500,000</div>
              </div>
              <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="h-6 w-6 text-amber-600" />
                </div>
                <div className="font-bold text-gray-900">State Registered</div>
                <div className="text-sm text-gray-600">Multiple Jurisdictions</div>
              </div>
            </div>

            {/* Regulatory Sections */}
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">SEC Registration</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    WealthBridge Investment Banking, LLC is registered with the U.S. Securities and Exchange 
                    Commission (SEC) as an investment adviser. Our SEC registration does not imply a certain 
                    level of skill or training.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4">
                    <p><strong>SEC File Number:</strong> 801-123456</p>
                    <p><strong>Registration Date:</strong> January 15, 2019</p>
                    <p><strong>CRD Number:</strong> 123456</p>
                    <p>
                      <strong>SEC Investment Adviser Public Disclosure:</strong>{' '}
                      <a 
                        href="https://adviserinfo.sec.gov/" 
                        className="text-primary-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View our Form ADV
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">FINRA Membership</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    WealthBridge Securities, LLC is a member of the Financial Industry Regulatory Authority (FINRA) 
                    and the Securities Investor Protection Corporation (SIPC).
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4">
                    <p><strong>FINRA Member Firm:</strong> Yes</p>
                    <p><strong>FINRA CRD Number:</strong> 654321</p>
                    <p><strong>SIPC Membership:</strong> Yes</p>
                    <p>
                      <strong>FINRA BrokerCheck:</strong>{' '}
                      <a 
                        href="https://brokercheck.finra.org/" 
                        className="text-primary-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View our BrokerCheck report
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">SIPC Protection</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    Securities in your account protected up to $500,000. For details, please see 
                    <a 
                      href="https://www.sipc.org/" 
                      className="text-primary-600 hover:underline ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.sipc.org
                    </a>.
                  </p>
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mt-4">
                    <h3 className="font-bold text-gray-900 mb-2">Important Limitations:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>SIPC protection does not cover market losses</li>
                      <li>Cash balances are protected up to $250,000</li>
                      <li>Protection does not extend to foreign securities</li>
                      <li>Certain types of investments are not covered</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">State Registrations</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    We are registered to conduct business in the following states:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {['New York', 'California', 'Texas', 'Florida', 'Illinois', 'Pennsylvania', 'Georgia', 'New Jersey'].map((state) => (
                      <div key={state} className="bg-gray-50 p-3 rounded-lg text-center">
                        <span className="font-medium text-gray-900">{state}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4">
                    For a complete list of states where we are registered, please contact our compliance department.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Contact</h2>
                <div className="prose prose-gray max-w-none">
                  <p>
                    For regulatory inquiries or to request additional compliance information:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6 mt-4">
                    <p><strong>WealthBridge Compliance Department</strong></p>
                    <p>Email: compliance@wealthbridge.com</p>
                    <p>Phone: +1 (555) 123-4567 ext. 101</p>
                    <p>Address: 123 Wall Street, New York, NY 10005</p>
                    <p>Hours: Monday-Friday, 9am-5pm EST</p>
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