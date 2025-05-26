'use client'
import { useState } from 'react';

const testimonials = [
    {
        name: 'Amina',
        location: 'Kaduna',
        before: '/audio/amina-before.mp3',
        after: '/audio/amina-after.mp3',
        duration: '3 weeks',
        text: 'I could barely recognize letters before. Now I can read short surahs confidently!'
    },
    {
        name: 'Zaynab',
        location: 'Abuja',
        before: '/audio/amina-before.mp3',
        after: '/audio/amina-after.mp3',
        duration: '3 weeks',
        text: 'I cried when I completed Surah Fatiha. For the first time, I felt connected. It was beautiful!'
    },
    {
        name: 'Musa',
        location: 'Lagos',
        before: '/audio/amina-before.mp3',
        after: '/audio/amina-after.mp3',
        duration: '3 weeks',
        text: 'I tried so many YouTube videos but always got lost. This was the first time someone explained it in a way that made sense. I can finally read Quran without feeling lost or confused!'
    },
    // Add more testimonials...
];

export default function ProgressShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState<'before' | 'after' | null>(null);

    return (
        <div className="bg-primary-light p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-accent mb-6 text-center">
                Hear Our Students&#39; Progress
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                    <h4 className="font-bold text-accent mb-3">Before</h4>
                    <audio
                        controls
                        src={testimonials[activeIndex].before}
                        onPlay={() => setIsPlaying('before')}
                        onPause={() => setIsPlaying(null)}
                        className="w-full"
                    />
                </div>

                <div className="text-center">
                    <h4 className="font-bold text-accent mb-3">After {testimonials[activeIndex].duration}</h4>
                    <audio
                        controls
                        src={testimonials[activeIndex].after}
                        onPlay={() => setIsPlaying('after')}
                        onPause={() => setIsPlaying(null)}
                        className="w-full"
                    />
                </div>
            </div>

            <div className="text-center">
                <p className="text-accent italic mb-6">&quot;{testimonials[activeIndex].text}&quot;</p>
                <p className="font-medium text-accent">
                    — {testimonials[activeIndex].name}, {testimonials[activeIndex].location}
                </p>
            </div>

            <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors
              ${activeIndex === index ? 'bg-secondary' : 'bg-accent-light'}`}
                    />
                ))}
            </div>
        </div>
    );
}