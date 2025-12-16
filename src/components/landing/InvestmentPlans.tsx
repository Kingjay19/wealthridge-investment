'use client'

import { useState } from 'react'
import { Check, Star, TrendingUp, Shield, Target, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const plans = [
    {
        name: 'Starter',
        description: 'Perfect for beginners starting their investment journey',
        price: 100,
        minInvestment: 100,
        maxInvestment: 10000,
        annualReturn: '6-8%',
        color: 'from-blue-500 to-blue-600',
        textColor: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        features: [
            'Basic portfolio diversification',
            'Automated rebalancing',
            'Email support',
            'Monthly performance reports',
            'Educational resources',
            'Mobile app access'
        ],
        riskLevel: 'Low',
        recommended: false,
    },
    {
        name: 'Growth',
        description: 'For serious investors looking for balanced growth',
        price: 1000,
        minInvestment: 1000,
        maxInvestment: 50000,
        annualReturn: '8-10%',
        color: 'from-primary-500 to-primary-700',
        textColor: 'text-primary-700',
        bgColor: 'bg-primary-50',
        borderColor: 'border-primary-200',
        features: [
            'Advanced portfolio diversification',
            'Tax-loss harvesting',
            'Priority email & chat support',
            'Weekly performance reports',
            'Personalized investment strategy',
            'Tax optimization tools',
            'Access to ETFs and mutual funds',
            'Retirement planning tools'
        ],
        riskLevel: 'Medium',
        recommended: true,
    },
    {
        name: 'Premium',
        description: 'Maximum returns for experienced investors',
        price: 10000,
        minInvestment: 10000,
        maxInvestment: 1000000,
        annualReturn: '10-12%',
        color: 'from-purple-600 to-purple-800',
        textColor: 'text-purple-700',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        features: [
            'Custom portfolio construction',
            'Direct indexing',
            '24/7 phone & dedicated advisor',
            'Real-time performance dashboard',
            'Custom investment strategies',
            'Advanced tax optimization',
            'Access to alternative investments',
            'Estate planning services',
            'Family office services',
            'Exclusive investment opportunities'
        ],
        riskLevel: 'High',
        recommended: false,
    },
]

export default function InvestmentPlans() {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('annually')
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

    return (
        <section className="py-20 bg-linear-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-4">
                        <Star className="h-4 w-4" />
                        <span className="text-sm font-medium">Investment Plans</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Choose Your
                        <span className="text-primary-600"> Investment Strategy</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Start with as little as $100. No hidden fees, no account minimums.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-12">
                        <button
                            onClick={() => setBillingPeriod('monthly')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingPeriod === 'monthly'
                                    ? 'bg-white text-gray-900 shadow'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingPeriod('annually')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingPeriod === 'annually'
                                    ? 'bg-white text-gray-900 shadow'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Annually
                            <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                                Save 20%
                            </span>
                        </button>
                    </div>
                </div>

                {/* Plans Grid */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl border-2 ${plan.borderColor} bg-white p-8 transition-all duration-300 hover:shadow-xl ${plan.recommended ? 'shadow-lg scale-[1.02] border-primary-300' : ''
                                } ${selectedPlan === plan.name ? 'ring-2 ring-primary-500' : ''}`}
                            onClick={() => setSelectedPlan(plan.name)}
                        >
                            {/* Recommended Badge */}
                            {plan.recommended && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <div className="bg-linear-to-r from-primary-600 to-primary-800 text-blue-600 px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-600 mb-6">{plan.description}</p>

                                {/* Price Display */}
                                <div className="mb-6">
                                    <div className="text-5xl font-bold text-gray-900 mb-2">
                                        ${plan.minInvestment}
                                        <span className="text-lg text-gray-500 font-normal"> minimum</span>
                                    </div>
                                    <div className="text-gray-600">
                                        Up to ${plan.maxInvestment.toLocaleString()}
                                    </div>
                                </div>

                                {/* Return Rate */}
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${plan.bgColor} ${plan.textColor} mb-6`}>
                                    <TrendingUp className="h-4 w-4" />
                                    <span className="font-semibold">{plan.annualReturn} Annual Return</span>
                                </div>

                                {/* Risk Indicator */}
                                <div className="flex items-center justify-center gap-2 mb-8">
                                    <div className="flex items-center gap-1">
                                        <Shield className="h-4 w-4 text-gray-400" />
                                        <span className="text-sm text-gray-600">Risk Level:</span>
                                        <span className={`font-semibold ${plan.riskLevel === 'Low' ? 'text-green-600' :
                                                plan.riskLevel === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                                            }`}>
                                            {plan.riskLevel}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Target className="h-5 w-5 text-gray-400" />
                                    <h4 className="font-semibold text-gray-900">Features Included</h4>
                                </div>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <Link href="/register">
                                <Button
                                    variant={plan.recommended ? 'primary' : 'outline'}
                                    fullWidth
                                    size="lg"
                                    className={`${plan.recommended
                                            ? 'bg-linear-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900'
                                            : ''
                                        }`}
                                >
                                    Start Investing
                                    {plan.recommended && <Zap className="ml-2 h-4 w-4" />}
                                </Button>
                            </Link>

                            {/* Additional Info */}
                            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                                <div className="text-sm text-gray-600">
                                    <span className="font-medium text-gray-900">No management fees</span> for the first 3 months
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="mt-20 max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                        <div className="p-8 border-b border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 text-center">
                                Plan Comparison
                            </h3>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="p-4 text-left font-semibold text-gray-900">Feature</th>
                                        {plans.map((plan) => (
                                            <th key={plan.name} className="p-4 text-center">
                                                <div className={`font-bold ${plan.textColor}`}>{plan.name}</div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { feature: 'Minimum Investment', starter: '$100', growth: '$1,000', premium: '$10,000' },
                                        { feature: 'Annual Returns', starter: '6-8%', growth: '8-10%', premium: '10-12%' },
                                        { feature: 'Management Fee', starter: '0.25%', growth: '0.15%', premium: '0.10%' },
                                        { feature: 'Personal Advisor', starter: 'No', growth: 'Basic', premium: 'Dedicated' },
                                        { feature: 'Tax Optimization', starter: 'Basic', growth: 'Advanced', premium: 'Premium' },
                                        { feature: 'Alternative Investments', starter: 'No', growth: 'Limited', premium: 'Full Access' },
                                    ].map((row, index) => (
                                        <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                                            <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                                            <td className="p-4 text-center">
                                                <span className={`px-3 py-1 rounded-full text-sm ${plans[0].bgColor} ${plans[0].textColor}`}>
                                                    {row.starter}
                                                </span>
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className={`px-3 py-1 rounded-full text-sm ${plans[1].bgColor} ${plans[1].textColor}`}>
                                                    {row.growth}
                                                </span>
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className={`px-3 py-1 rounded-full text-sm ${plans[2].bgColor} ${plans[2].textColor}`}>
                                                    {row.premium}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-8">
                        Trusted by 50,000+ investors managing over $1.2 billion in assets
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 items-center">
                        {[
                            { text: 'FDIC Insured', icon: Shield },
                            { text: 'SEC Registered', icon: Star },
                            { text: 'FINRA Member', icon: TrendingUp },
                            { text: 'SIPC Protected', icon: Shield },
                        ].map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div key={index} className="flex items-center gap-2 text-gray-700">
                                    <Icon className="h-5 w-5 text-primary-600" />
                                    <span className="font-medium">{item.text}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}