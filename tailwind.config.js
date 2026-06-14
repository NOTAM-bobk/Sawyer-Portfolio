/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'brutal-sm': '4px 4px 0px 0px #000000',
        'brutal-hover': '2px 2px 0px 0px #000000',
      },
      keyframes: {
        blob: {
          '0%':   { transform: 'translate(0px, 0px) scale(1)' },
          '33%':  { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%':  { transform: 'translate(-20px, 20px) scale(0.95)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        liquidFlyIn: {
          '0%':   { transform: 'translateY(220px) scale(0.2) rotate(-20deg)', filter: 'blur(40px)', opacity: 0, letterSpacing: '-0.6em' },
          '50%':  { transform: 'translateY(-30px) scale(1.15) rotate(8deg)',  filter: 'blur(18px)', opacity: 0.95, letterSpacing: '0.08em' },
          '75%':  { transform: 'translateY(15px) scale(0.92) rotate(-4deg)',  filter: 'blur(10px)', opacity: 1, letterSpacing: '-0.04em' },
          '100%': { transform: 'translateY(0) scale(1) rotate(0deg)',         filter: 'blur(0px)', opacity: 1, letterSpacing: '-0.02em' },
        },
        wave: {
          '0%, 60%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-4px)' },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(8px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        rainbowSpin: {
          '0%':   { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        ringFadeOut: {
          '0%':   { opacity: 1 },
          '75%':  { opacity: 1 },
          '100%': { opacity: 0 },
        },
        underlineDraw: {
          '0%':   { width: '0%',   opacity: 1, left: '0' },
          '50%':  { width: '100%', opacity: 1, left: '0' },
          '51%':  { width: '100%', opacity: 1, left: '0' },
          '100%': { width: '0%',   opacity: 0, left: '100%' },
        },
        spinnerRotate: {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        blob:            'blob 7s infinite',
        'blob-delay':    'blob 7s infinite 2s',
        liquidEntrance:  'liquidFlyIn 2.4s cubic-bezier(0.19,1,0.22,1) forwards',
        wave:            'wave 1.3s linear infinite',
        fadeIn:          'fadeIn 0.3s ease-out',
        fadeInFast:      'fadeIn 0.2s ease-out',
        rainbowSpin:     'rainbowSpin 1s linear infinite',
        ringFadeOut:     'ringFadeOut 1.5s ease-out forwards',
        underlineDraw:   'underlineDraw 0.9s cubic-bezier(0.77,0,0.18,1) forwards',
        spinnerRotate:   'spinnerRotate 0.8s linear infinite',
      },
    },
  },
  plugins: [],
}
