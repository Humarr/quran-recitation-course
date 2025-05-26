'use client'
import { useEffect, useState } from 'react';

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <a
        href="https://wa.me/2348090935863?text=I%20have%20a%20question%20about%20the%20Quran%20course"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-white p-3 rounded-full shadow-xl flex items-center justify-center hover:bg-primary-dark transition-colors"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29 3.617c-.545.244-1.106.396-1.683.452-.543.052-1.066.028-1.569-.084a5.417 5.417 0 01-.923-.27c.131-.381.345-.722.629-1.001a8.008 8.008 0 01-.204-.743 9.34 9.34 0 01-.043-.831c0-1.335.526-2.574 1.42-3.52.896-.944 2.166-1.518 3.512-1.518 1.347 0 2.617.574 3.513 1.518.895.946 1.42 2.185 1.42 3.52 0 .284-.02.567-.06.846a5.06 5.06 0 01-.15.734 5.7 5.7 0 01.643.267 8.19 8.19 0 01-.9.27 5.49 5.49 0 01-1.57.083 6.59 6.59 0 01-1.68-.45M12 2a10 10 0 00-9.95 9h2.013a8 8 0 118.837 8.837V21a10 10 0 000-19z" />
        </svg>
      </a>
    </div>
  );
}