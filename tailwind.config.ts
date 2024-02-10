/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    colors: {
      'jw-tint': {
        100: '#4338ca',
      },
      'jw-light': {
        100: '#ffffff',
      },
      'jw-dark': {
        950: '#1e2124',
        900: '#282b30',
        800: '#36393e',
        700: '#424549',
      },
    },
    extend: {
      fontFamily: {
        logo: ['Paytone One', 'Arial', 'sans-serif'],
        sans: ['Ubuntu', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
