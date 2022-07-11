module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        // mooveUp: {
        //   from: { transform: 'translateY(0vh)' },
        //   '20%': { transform: 'translateY(6vh)' },
        //   to: { transform: 'translateY(-35vh)' },
        // },

        //--
        // absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        //--
        mooveUp: {
          from: { top: '50%' },
          '20%': { top: '60%' },
          to: { top: '12%' },
        },
        mooveDown: {
          from: { top: '12%' },
          '20%': { top: '8%' },
          to: { top: '50%' },
        },
        fadeOut: {
          from: { top: '0%' },
          to: { top: '100%' },
        },
        fadeIn: {
          from: { top: '100%' },
          to: { top: '0%' },
        },
      },
      animation: {
        mooveUp: 'mooveUp 1s ease-in-out forwards',
        mooveDown: 'mooveDown 1s ease-in-out forwards',
        fadeOutResult: 'fadeIn 1s ease-in-out forwards 0.3s',
        fadeInResult: 'fadeOut 1s ease-in-out forwards',
      },
    },
  },

  plugins: [require('tailwind-scrollbar-hide')],
};
