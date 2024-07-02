/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { nextui } from '@nextui-org/react';

const tailwindConfig = {
  content: [
    './src/**/*.{ts,tsx}',
    './index.html',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'Geist',
      logo: 'Paytone',
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        fontSize: {
          tiny: '0.9rem',
        },
        borderWidth: {
          medium: '1px',
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#000000',
              foreground: '#ffffff',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#ffffff',
              foreground: '#000000',
            },
          },
        },
      },
    }),
  ],
};

export default tailwindConfig;
