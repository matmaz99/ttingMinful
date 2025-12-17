import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: 'hsl(200 29% 41%)',
        secondary: 'hsl(35 25% 93%)',
        accent: 'hsl(171 37% 84%)',
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(200 29% 15%)',
        muted: 'hsl(200 15% 96%)',
        'muted-foreground': 'hsl(200 10% 45%)',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config