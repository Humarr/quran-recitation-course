import CTAButton from './CTAButton';

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-accent-dark to-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            You Have Two Choices Right Now:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-4">1. Close this page. Do nothing.</h3>
              <p className="text-primary-dark">
                Keep waiting. Keep wishing. Keep avoiding Quran recitation because it still feels &quot;too hard.&quot;
              </p>
            </div>

            <div className="bg-primary text-accent p-8 rounded-xl shadow-lg border-2 border-secondary relative overflow-hidden">
              <div className="absolute top-4 -right-3 bg-secondary text-primary-dark text-xs font-bold px-4 py-2 rounded-full transform rotate-18">
                Recommended
              </div>
              <h3 className="text-xl font-bold mb-4">2. Join the course now.</h3>
              <p>
                Start learning today. Start connecting today. Start changing your life, your salah, and your soul—today.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <CTAButton size="xl" className="mx-auto">
              Click Here to Start Your Journey
            </CTAButton>

            <p className="text-primary-dark font-display text-xl">
              Bismillah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}