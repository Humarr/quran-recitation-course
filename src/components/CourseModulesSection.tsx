import CourseModuleCard from './CourseModuleCard';

export default function CourseModulesSection() {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Introducing: <span className="text-secondary">Quran Recitation for Absolute Beginners</span>
          </h2>
          <p className="text-xl text-primary-dark">
            A Gentle, Step-by-Step Program to Help You Read the Quran—Even If You&#39;ve Never Read Arabic Before
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <CourseModuleCard 
            number={1}
            title="Arabic Alphabet"
            description="From Alif to Yaa - learn each letter's shape and sound"
          />
          <CourseModuleCard 
            number={2}
            title="Harakaat"
            description="Master Fatha, Kasra, Damma - the short vowel system"
          />
          <CourseModuleCard 
            number={3}
            title="Joining Letters"
            description="Build simple words from 2-3 letters"
          />
          <CourseModuleCard 
            number={4}
            title="Reading Practice"
            description="Real verses, real progress with simple surahs"
          />
          <CourseModuleCard 
            number={5}
            title="Tajweed Made Easy"
            description="Light introduction to pronunciation rules"
          />
        </div>
      </div>
    </section>
  );
}