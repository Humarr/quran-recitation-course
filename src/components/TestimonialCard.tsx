interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
}

export default function TestimonialCard({ name, location, quote }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-primary-dark">
      <div className="flex items-center mb-4">
        <div className="bg-primary-light text-accent font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-primary-light">{location}</p>
        </div>
      </div>
      <blockquote className="italic border-l-4 border-secondary pl-4 py-2">
        &quot;{quote}&quot;
      </blockquote>
      <div className="flex mt-4 text-secondary">
        {[...Array(5)].map((_, i) => (
          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
}