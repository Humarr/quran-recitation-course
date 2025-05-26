export default function QuranVerseSection() {
  return (
    <section className="relative py-32 bg-quran-verse bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="absolute inset-0 bg-primary-dark bg-opacity-70" />
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-3xl md:text-4xl lg:text-5xl font-arabic mb-8 text-accent leading-relaxed">
            وَلَقَدْ يَسَّرْنَا ٱلْقُرْءَانَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍۢ
          </p>
          <p className="text-2xl md:text-3xl text-secondary font-display mb-6">
            &quot;And We have certainly made the Quran easy for remembrance, so is there any who will remember?&quot;
          </p>
          <p className="text-xl text-accent-light">
            — Surah Al-Qamar, 54:17
          </p>
        </div>
      </div>
    </section>
  );
}