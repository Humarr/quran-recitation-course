export default function WhyDifferentSection() {
  return (
    <section className="py-20 bg-primary text-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Most People Stay Stuck <span className="text-secondary">(And Why It&#39;s Not Your Fault)</span>
            </h2>
            
            <p className="text-lg mb-8">
              Here&#39;s what no one tells you: Most Quran learning is built for people who already have a head start. They already know some Arabic. They had a teacher growing up. Or they went to madrasah consistently.
            </p>
            
            <p className="text-lg font-medium">
              But you? You&#39;re starting from scratch. You don&#39;t need &quot;tajweed rules&quot; or advanced breakdowns. You just want to know:
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-secondary mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Courses move too fast</h3>
                <p className="text-accent-light">They assume you already know the basics</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-secondary mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">No clear starting point</h3>
                <p className="text-accent-light">You&#39;re left guessing where to begin</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-secondary mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Too much tajweed too soon</h3>
                <p className="text-accent-light">Before you can even read properly</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-secondary mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">No place to practice safely</h3>
                <p className="text-accent-light">Where you won&#39;t feel embarrassed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}