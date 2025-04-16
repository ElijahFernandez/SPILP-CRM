// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF', // Background color (White)
        deepBlue: '#003366', // Deep Blue (Trust, Professionalism)
        gold: '#FFD700', // Gold (Quality, Excellence)
        white: '#FFFFFF', // White (Purity, Peace)
        gray: '#808080', // Gray (Neutrality, Sophistication)
        greenSP: {
          DEFAULT: '#2E7D32',
          50: 'rgba(46, 125, 50, 0.5)',
          60: 'rgba(46, 125, 50, 0.6)',
          70: 'rgba(46, 125, 50, 0.7)',
          73: 'rgba(46, 125, 50, 0.73)', // 🎯 Custom opacity
          80: 'rgba(46, 125, 50, 0.8)',
        },
      },
    },
  },
  plugins: [],
} 

export default config
