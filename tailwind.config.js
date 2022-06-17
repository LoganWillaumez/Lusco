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
          to: { top: '15%' },
        },
        mooveDown: {
          from: { top: '15%' },
          '20%': { top: '10%' },
          to: { top: '50%' },
        },
      },
      animation: {
        mooveUp: 'mooveUp 1s ease-in-out forwards',
        mooveDown: 'mooveDown 1s ease-in-out forwards',
      },
    },
  },

  plugins: [],
};
