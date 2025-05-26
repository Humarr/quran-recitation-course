export default function GuaranteeSection() {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="inline-flex items-center justify-center bg-secondary bg-opacity-20 rounded-full p-4 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            100% Risk-Free Guarantee
          </h3>

          <p className="text-lg text-primary-dark mb-6">
            If within 7 days, you feel this course isn&#39;t helping you—even a little bit—just email us and we&#39;ll refund you. No questions. No pressure. No guilt.
          </p>

          <p className="text-primary font-medium">
            We only want students who are serious... and supported.
          </p>
        </div>
      </div>
    </section>
  );
}