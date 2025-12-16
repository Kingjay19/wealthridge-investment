import HeroSection from '@/components/landing/HeroSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import InvestmentPlans from '@/components/landing/InvestmentPlans'
import StatsSection from '@/components/landing/StatsSection'
import Testimonials from '@/components/landing/Testimonials'
import CTASection from '@/components/landing/CTASection'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <InvestmentPlans />
      <StatsSection />
      <Testimonials />
      <CTASection />
    </div>
  )
}