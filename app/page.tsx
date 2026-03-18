import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import MediaProofSection from '@/components/MediaProofSection'
import PromiseSection from '@/components/PromiseSection'
import ExclusivitySection from '@/components/ExclusivitySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PerformanceChartSection from '@/components/PerformanceChartSection'
import TechnologySection from '@/components/TechnologySection'
import BinaryChoiceSection from '@/components/BinaryChoiceSection'
import LeadFormSection from '@/components/LeadFormSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <MediaProofSection />
        <PromiseSection />
        <ExclusivitySection />
        <TestimonialsSection />
        <PerformanceChartSection />
        <TechnologySection />
        <BinaryChoiceSection />
        <LeadFormSection />
      </main>
      <Footer />
    </>
  )
}
