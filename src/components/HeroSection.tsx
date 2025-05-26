import CTAButton from './CTAButton';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary bg-opacity-90 overflow-hidden">
      {/* Arabic pattern background */}
      <div className="absolute inset-0 bg-arabic-pattern bg-repeat opacity-10 mix-blend-overlay" />
      
      <div className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 leading-tight">
            <span className="block">You Still Can&#39;t Read</span>
            <span className="block text-secondary">the Quran?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-accent-light mb-8 max-w-2xl mx-auto lg:mx-0">
            Even Though You&#39;ve Been Trying, Watching Videos, and Asking for Help?
          </p>
          
          <div className="space-y-6">
            <p className="text-accent-light text-lg">
              You&#39;re not alone. In fact, I&#39;ll say something bold:
            </p>
            
            <blockquote className="border-l-4 border-secondary pl-4 py-2 italic text-accent-light text-lg">
              If you feel embarrassed, frustrated, or even ashamed because you still can&#39;t read or recite the Quran...
              <br />
              <span className="font-semibold">It&#39;s not your fault.</span>
            </blockquote>
            
            <div className="pt-4">
              <CTAButton size="xl" className="w-full lg:w-auto">
                Start Learning Now
              </CTAButton>
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-30" />
            <Image 
              src="/images/course-preview.png" 
              width={800}
              height={600}
              alt="Course preview" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}