// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],  // Ensure it tracks .vue files in src
  theme: {
    extend: {
      colors: {
        passion: '#B7ABCD',
        pino: '#F1ED9E',
        peach: '#EBC6AC',
        gin: '#A8CED9',
        berry: '#D0B8CE',
        pink: '#FF69B4',
      },
      keyframes: {
        fadeUpOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
        fadeUpIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        textOutLeft: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-100px)' },
        },
        textInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUpOutSmall: {
          '0%': { opacity: '0.5', transform: 'scale(0.9) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(0.9) translateY(-50px)' }, // Keep smaller and fade out
        },
        fadeUpInSmall: {
          '0%': { opacity: '0', transform: 'scale(0.9) translateY(50px)' }, // Keep smaller and fade in
          '100%': { opacity: '0.5', transform: 'scale(0.9) translateY(0)' },
        },
      },
      animation: {
        'fade-up-out': 'fadeUpOut 1s ease forwards',
        'fade-up-in': 'fadeUpIn 1s ease forwards',
        'fade-up-out-small': 'fadeUpOutSmall 1s ease forwards',
        'fade-up-in-small': 'fadeUpInSmall 1s ease forwards',
        'text-out-left': 'textOutLeft 0.5s ease forwards',
        'text-in-right': 'textInRight 1s ease forwards',
      },
    },
  },
  plugins: [],
};
