import HeroSection from '@/components/HeroSection';
import PainPointSection from '@/components/PainPointSection';
import WhyDifferentSection from '@/components/WhyDifferentSection';
import CourseModulesSection from '@/components/CourseModulesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import QuranVerseSection from '@/components/QuranVerseSection';
import OfferSection from '@/components/OfferSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import FinalCTASection from '@/components/FinalCTASection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PainPointSection />
      <WhyDifferentSection />
      <CourseModulesSection />
      <TestimonialsSection />
      <QuranVerseSection />
      <OfferSection />
      <GuaranteeSection />
      <FinalCTASection />
    </main>
  );
}