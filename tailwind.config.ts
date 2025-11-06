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
        arabic: ['var(--font-cairo)', 'var(--font-noto-sans-arabic)', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        // Theme specific colors - Premium Design System
        neon: {
          green: '#BDFF2A',
        },
        dark: {
          base: '#000000', // Pure black
          lighter: '#0A0A0A', // Elevated cards
          border: '#2A2A2A', // Subtle borders
        },
      },
      keyframes: {
        loaderCircle: {
          '0%': {
            transform: 'rotate(90deg)',
          },
          '50%': {
            transform: 'rotate(270deg)',
          },
          '100%': {
            transform: 'rotate(450deg)',
          },
        },
        loaderLetter: {
          '0%, 100%': {
            opacity: '0.4',
            transform: 'translateY(0)',
          },
          '20%': {
            opacity: '1',
            transform: 'scale(1.15)',
          },
          '40%': {
            opacity: '0.7',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        loaderCircle: 'loaderCircle 5s linear infinite',
        loaderLetter: 'loaderLetter 3s infinite',
      },
    },
  },
  plugins: [],
}
export default config

