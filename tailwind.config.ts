import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        cream: '#F5F0E8',
        gold: '#C9A84C',
        'gold-lt': '#E8D5A3',
        'gold-dk': '#9C7A2A',
        muted: '#6B7280',
        rule: '#E0D8CC',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        dm: ['var(--font-dm-sans)'],
      },
    },
  },
  plugins: [],
}
export default config
