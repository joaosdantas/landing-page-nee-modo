/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        foreground: '#FFFFFF',
        primary: {
          DEFAULT: '#FFC700',
          foreground: '#09090B',
        },
        secondary: {
          DEFAULT: '#111522',
          foreground: '#94A3B8',
        },
        muted: {
          DEFAULT: '#161E2E',
          foreground: '#94A3B8',
        },
        card: {
          DEFAULT: '#111522',
          foreground: '#FFFFFF',
        },
        border: '#232733',
        surface: {
          DEFAULT: '#111522',
          secondary: '#161E2E',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
