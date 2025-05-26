import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-primary-light text-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What Our Students Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Hafsah"
            location="Lagos"
            quote="I used to avoid reading in public. Now I lead surahs when I pray with my kids. I never thought I'd get here."
          />
          <TestimonialCard 
            name="Musa"
            location="Abuja"
            quote="I tried so many YouTube videos but always got lost. This was the first time someone explained it in a way that made sense."
          />
          <TestimonialCard 
            name="Zaynab"
            location="Kano"
            quote="I cried when I completed Surah Fatiha. For the first time, I felt connected."
          />
        </div>
      </div>
    </section>
  );
}