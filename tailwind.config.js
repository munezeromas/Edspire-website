/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060d1a',
          900: '#0d1b2e',
          800: '#112240',
          700: '#1a3358',
          600: '#1e3d6e',
        },
        blue: {
          400: '#64b5f6',
          500: '#3b8fe8',
          600: '#2f7fd4',
          700: '#1a6bbf',
        },
        edspire: {
          navy: '#0d1b2e',
          blue: '#2f7fd4',
          accent: '#64b5f6',
          light: '#f0f6ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'typing': 'typing 1.5s steps(40) forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #060d1a 0%, #0d1b2e 50%, #112240 100%)',
        'blue-gradient': 'linear-gradient(135deg, #1a3358 0%, #2f7fd4 100%)',
        'subtle-grid': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232f7fd4' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'card': '0 4px 24px rgba(13, 27, 46, 0.12)',
        'card-hover': '0 8px 40px rgba(13, 27, 46, 0.18)',
        'blue-glow': '0 0 30px rgba(47, 127, 212, 0.2)',
        'inner-light': 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}
