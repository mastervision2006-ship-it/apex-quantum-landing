import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        base:    '#070E1A',
        card:    '#0C1B2E',
        section: '#0A1626',
        raised:  '#0F2038',
        gold: {
          DEFAULT: '#C49A38',
          bright:  '#E0B84A',
          dim:     '#7A5E20',
        },
        ink:   '#EDF0F5',
        soft:  '#8B9EAF',
        muted: '#4A5E70',
      },
      maxWidth: { content: '1200px' },
    },
  },
  plugins: [],
}

export default config
