import Button from '@/components/ui/Button'
import {
    TrendingUp,
    PieChart,
    Shield,
    Target,
    CheckCircle,
    BarChart3,
    DollarSign,
    Clock
} from 'lucide-react'
import Link from 'next/link'

const features = [
    {
        title: 'Personalized Portfolio Construction',
        description: 'Custom investment portfolios based on your goals, risk tolerance, and timeline.',
        icon: Target,
    },
    {
        title: 'Regular Rebalancing',
        description: 'Automatic portfolio adjustments to maintain optimal asset allocation.',
        icon: PieChart,
    },
    {
        title: 'Tax Optimization',
        description: 'Strategies to minimize tax liabilities through smart investing.',
        icon: DollarSign,
    },
    {
        title: 'Performance Monitoring',
        description: 'Regular reporting and analysis of your portfolio performance.',
        icon: BarChart3,
    },
    {
        title: 'Risk Management',
        description: 'Continuous risk assessment and adjustment to protect your investments.',
        icon: Shield,
    },
    {
        title: '24/7 Access',
        description: 'Monitor your portfolio anytime through our web and mobile platforms.',
        icon: Clock,
    },
]

const investmentOptions = [
    { name: 'Stocks & ETFs', allocation: '40-60%', risk: 'Medium-High' },
    { name: 'Bonds', allocation: '20-40%', risk: 'Low' },
    { name: 'Real Estate', allocation: '10-20%', risk: 'Medium' },
    { name: 'Alternative Investments', allocation: '5-10%', risk: 'High' },
]

export default function InvestmentManagementPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-linear-to-br from-blue-50 via-white to-blue-50 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-100 rounded-xl">
                                <TrendingUp className="h-8 w-8 text-blue-600" />
                            </div>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                    Investment Management
                                </h1>
                                <p className="text-xl text-gray-600 mt-2">
                                    Professional portfolio management tailored to your financial goals
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <div className="text-sm text-gray-500">Starting at</div>
                                <div className="text-2xl font-bold text-gray-900">0.25%</div>
                                <div className="text-sm text-gray-600">annual management fee</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <div className="text-sm text-gray-500">Minimum Investment</div>
                                <div className="text-2xl font-bold text-gray-900">$100</div>
                                <div className="text-sm text-gray-600">no account minimums</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <div className="text-sm text-gray-500">Average Returns</div>
                                <div className="text-2xl font-bold text-gray-900">8.5%</div>
                                <div className="text-sm text-gray-600">annualized</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                Our Investment Management service provides professional portfolio management
                                for investors who want expert guidance without the high fees of traditional
                                wealth managers. We combine cutting-edge technology with human expertise to
                                create and manage diversified portfolios tailored to your unique financial goals.
                            </p>
                            <p>
                                Whether you're saving for retirement, building wealth, or planning for major
                                life events, our team of certified investment professionals will design a
                                strategy that aligns with your objectives and risk tolerance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What's Included</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon
                                return (
                                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-blue-100 rounded-lg">
                                                <Icon className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                                <p className="text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Strategy */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Investment Approach</h2>

                        <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Allocation</h3>
                            <div className="space-y-4">
                                {investmentOptions.map((option, index) => (
                                    <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg border border-blue-100">
                                        <div className="font-medium text-gray-900">{option.name}</div>
                                        <div className="flex items-center gap-6">
                                            <div className="text-sm text-gray-600">{option.allocation}</div>
                                            <div className={`px-3 py-1 rounded-full text-sm font-medium ${option.risk === 'Low' ? 'bg-green-100 text-green-800' :
                                                    option.risk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                                        option.risk === 'Medium-High' ? 'bg-orange-100 text-orange-800' :
                                                            'bg-red-100 text-red-800'
                                                }`}>
                                                {option.risk}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Philosophy</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Long-term focus over short-term speculation',
                                        'Evidence-based investing principles',
                                        'Global diversification',
                                        'Cost efficiency',
                                        'Tax-aware strategies',
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Who This Service Is For</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Investors seeking professional management',
                                        'Those with limited time for portfolio management',
                                        'Individuals wanting diversified portfolios',
                                        'Investors looking for tax-efficient strategies',
                                        'Anyone wanting regular performance reporting',
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <CheckCircle className="h-5 w-5 text-blue-500" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-linear-to-r from-blue-600 to-cyan-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-xl opacity-90 mb-8">
                            Begin your investment journey with professional management today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center text-white">
                            <Link href="/register" className="" >
                                <Button variant="primary" size="lg">
                                    Start Investing
                                </Button>
                            </Link>
                            <Link href="/services" >
                                <Button variant="outline" size="lg">
                                    Back to Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}