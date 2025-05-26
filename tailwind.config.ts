import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2A5B45', // Deep emerald green
          light: '#3D7B5F',
          dark: '#1E4532',
        },
        secondary: {
          DEFAULT: '#D4AF37', // Gold
          light: '#E8C766',
          dark: '#B8931C',
        },
        accent: {
          DEFAULT: '#F5F5DC', // Cream
          light: '#FFFEF2',
          dark: '#E0E0C8',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)'],
        arabic: ['var(--font-noto-sans-arabic)'],
        display: ['var(--font-poppins)'],
        // display: ['var(--font-scheherazade-new)'],
      },
      backgroundImage: {
        'arabic-pattern': "url('/images/arabic-pattern-bg.png')",
        'quran-verse': "url('/images/quran-verse-bg.jpg')",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;