import CTAButton from './CTAButton';

export default function OfferSection() {
  return (
    <section className="py-20 bg-primary-dark text-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Here&#39;s What You Get When You Join:
          </h2>
          
          <div className="bg-primary rounded-xl p-8 mb-12 shadow-lg">
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="text-secondary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">5 Full Modules</h3>
                  <p className="text-accent-light">Video lessons + Audio guides + PDF Practice Sheets</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="text-secondary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Lifetime Access</h3>
                  <p className="text-accent-light">Learn at your own pace, revisit anytime</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="text-secondary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Certificate of Completion</h3>
                  <p className="text-accent-light">Celebrate your achievement</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="text-secondary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Private Student Support Group</h3>
                  <p className="text-accent-light">Ask questions and get help from instructors</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 bg-primary-light bg-opacity-20 p-4 rounded-lg -mx-4">
                <div className="text-secondary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">BONUS: Duas & Tips for Staying Consistent</h3>
                  <p className="text-accent-light">Overcome challenges and maintain your learning habit</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-secondary text-primary-dark text-3xl font-bold px-8 py-4 rounded-lg mb-8 shadow-lg">
              ₦15,000 <span className="text-xl font-normal">(one-time payment)</span>
            </div>
            
            <div className="mb-8">
              <CTAButton size="xl" className="mx-auto">
                Join Quran Recitation for Beginners Now
              </CTAButton>
            </div>
            
            <p className="text-accent-light">
              Instant access to all materials upon enrollment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}