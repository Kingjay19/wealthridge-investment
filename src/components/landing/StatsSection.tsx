'use client'

import { useState, useEffect } from 'react'
import { Users, TrendingUp, Building2, Shield, Globe, Award } from 'lucide-react'
import Button from '../ui/Button'

const stats = [
    {
        id: 1,
        label: 'Total Investors',
        value: '50,000+',
        icon: Users,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
        description: 'Active investors worldwide',
        suffix: '+',
        isAnimated: true,
        targetValue: 50000,
    },
    {
        id: 2,
        label: 'Assets Managed',
        value: '$1.2B',
        icon: Building2,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        description: 'In total assets',
        prefix: '$',
        isAnimated: true,
        targetValue: 1.2,
    },
    {
        id: 3,
        label: 'Average Returns',
        value: '8.5%',
        icon: TrendingUp,
        color: 'text-purple-600',
        bgColor: 'bg-purple-100',
        description: 'Annual average return',
        suffix: '%',
        isAnimated: true,
        targetValue: 8.5,
    },
    {
        id: 4,
        label: 'Countries',
        value: '40+',
        icon: Globe,
        color: 'text-amber-600',
        bgColor: 'bg-amber-100',
        description: 'Global presence',
        suffix: '+',
        isAnimated: false,
    },
    {
        id: 5,
        label: 'Security Score',
        value: '99.9%',
        icon: Shield,
        color: 'text-red-600',
        bgColor: 'bg-red-100',
        description: 'Platform uptime',
        suffix: '%',
        isAnimated: false,
    },
    {
        id: 6,
        label: 'Awards Won',
        value: '12',
        icon: Award,
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-100',
        description: 'Industry recognition',
        isAnimated: false,
    },
]

const milestones = [
    { year: '2020', investors: '10,000', assets: '$50M' },
    { year: '2021', investors: '25,000', assets: '$250M' },
    { year: '2022', investors: '35,000', assets: '$850M' },
    { year: '2023', investors: '50,000', assets: '$1.2B' },
]

export default function StatsSection() {
    const [animatedValues, setAnimatedValues] = useState<{ [key: number]: number }>({})

    useEffect(() => {
        const animateStats = () => {
            stats.forEach((stat) => {
                if (stat.isAnimated && stat.targetValue) {
                    const duration = 2000 // 2 seconds
                    const steps = 60
                    const increment = stat.targetValue / steps
                    let current = 0

                    const timer = setInterval(() => {
                        current += increment
                        if (current >= stat.targetValue) {
                            current = stat.targetValue
                            clearInterval(timer)
                        }
                        setAnimatedValues(prev => ({
                            ...prev,
                            [stat.id]: current
                        }))
                    }, duration / steps)
                }
            })
        }

        // Start animation when component mounts
        const timer = setTimeout(animateStats, 500)
        return () => clearTimeout(timer)
    }, [])

    const formatValue = (stat: typeof stats[0]) => {
        if (stat.isAnimated && animatedValues[stat.id]) {
            const value = animatedValues[stat.id]
            if (stat.id === 1) return Math.floor(value).toLocaleString() + stat.suffix
            if (stat.id === 2) return stat.prefix + value.toFixed(1) + 'B'
            if (stat.id === 3) return value.toFixed(1) + stat.suffix
            return stat.value
        }
        return stat.value
    }

    return (
        <section className="py-20 bg-linear-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Trusted by Investors Worldwide
                    </h2>
                    <p className="text-xl text-gray-600">
                        Join thousands of investors who have already grown their wealth with our platform.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {stats.map((stat) => {
                        const Icon = stat.icon
                        return (
                            <div
                                key={stat.id}
                                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                                        <Icon className={`h-6 w-6 ${stat.color}`} />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <div className="text-3xl font-bold text-gray-900">
                                        {formatValue(stat)}
                                    </div>
                                </div>

                                <div className="text-sm text-gray-600">
                                    {stat.description}
                                </div>

                                {/* Growth indicator for animated stats */}
                                {stat.isAnimated && (
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <div className="flex items-center text-sm">
                                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${stat.bgColor} rounded-full transition-all duration-1000`}
                                                    style={{
                                                        width: animatedValues[stat.id]
                                                            ? `${(animatedValues[stat.id] / stat.targetValue!) * 100}%`
                                                            : '0%'
                                                    }}
                                                />
                                            </div>
                                            <span className="ml-3 font-medium text-gray-700">
                                                {stat.isAnimated && animatedValues[stat.id]
                                                    ? `${Math.round((animatedValues[stat.id] / stat.targetValue!) * 100)}%`
                                                    : '0%'}
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Growth Timeline */}
                <div className="bg-linear-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mb-20">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Our Growth Journey</h3>
                            <p className="text-gray-600">Steady growth since our founding</p>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-primary-700">+400%</div>
                            <div className="text-sm text-gray-600">Growth in 3 years</div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-linear-to-r from-primary-200 to-blue-200 -translate-y-1/2" />

                        <div className="relative grid grid-cols-4 gap-4">
                            {milestones.map((milestone, index) => (
                                <div key={milestone.year} className="relative">
                                    {/* Timeline dot */}
                                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className={`w-4 h-4 rounded-full border-4 border-white ${index === milestones.length - 1
                                                ? 'bg-primary-600 shadow-lg'
                                                : 'bg-blue-400'
                                            }`} />
                                    </div>

                                    {/* Content */}
                                    <div className="pt-8 text-center">
                                        <div className="text-2xl font-bold text-gray-900 mb-2">
                                            {milestone.year}
                                        </div>
                                        <div className="space-y-2">
                                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                                <div className="text-sm text-gray-600">Investors</div>
                                                <div className="text-lg font-semibold text-gray-900">{milestone.investors}</div>
                                            </div>
                                            <div className="bg-white rounded-lg p-3 shadow-sm">
                                                <div className="text-sm text-gray-600">Assets</div>
                                                <div className="text-lg font-semibold text-gray-900">{milestone.assets}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-linear-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-green-100 rounded-xl">
                                <Shield className="h-8 w-8 text-green-600" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Security First</h4>
                                <p className="text-green-600 font-medium">Bank-level protection</p>
                            </div>
                        </div>
                        <ul className="space-y-3">
                            {[
                                '256-bit SSL encryption',
                                'Two-factor authentication',
                                'SOC 2 Type II certified',
                                'FDIC insurance on cash'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-100 rounded-xl">
                                <Award className="h-8 w-8 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Award Winning</h4>
                                <p className="text-blue-600 font-medium">Industry recognition</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {[
                                { award: 'Best Investment Platform 2023', org: 'Finance Today' },
                                { award: 'Top Fintech Innovation', org: 'Tech Awards' },
                                { award: 'Customer Excellence Award', org: 'Investor Choice' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-blue-50">
                                    <div>
                                        <div className="font-medium text-gray-900">{item.award}</div>
                                        <div className="text-sm text-gray-600">{item.org}</div>
                                    </div>
                                    <div className="text-2xl font-bold text-blue-600">{index + 1}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-linear-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-100 rounded-xl">
                                <Globe className="h-8 w-8 text-purple-600" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Global Reach</h4>
                                <p className="text-purple-600 font-medium">Worldwide access</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { region: 'North America', investors: '25K+' },
                                { region: 'Europe', investors: '15K+' },
                                { region: 'Asia Pacific', investors: '8K+' },
                                { region: 'Other Regions', investors: '2K+' },
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 border border-purple-50">
                                    <div className="text-lg font-bold text-gray-900">{item.investors}</div>
                                    <div className="text-sm text-gray-600">{item.region}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-green-100 to-emerald-100 rounded-full mb-6">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="font-medium text-green-800">Live data updated daily</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Ready to Start Your Investment Journey?
                    </h3>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join 50,000+ investors who trust us with their financial future.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" size="md">
                            Open Your Account
                        </Button>
                        <Button variant="outline" size="md">
                            Schedule a Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}