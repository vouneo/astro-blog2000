/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        retro: ['Verdana', 'Geneva', 'sans-serif'],
      },
      animation: {
        'neon-glow': 'neon-glow 0.8s ease-in-out infinite alternate',
        'fade-in': 'fade-in 0.4s ease-out',
      },
      keyframes: {
        'neon-glow': {
          '0%, 100%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor' 
          },
          '50%': { 
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor' 
          }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}