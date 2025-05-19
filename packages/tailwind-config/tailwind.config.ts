import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import plugin from 'tailwindcss/plugin';
import { colors } from './styles/colors';
import { twFontDeclarations, twFontFamily } from './styles/fonts';
import { cssVariables, darkCssVariables, mapToCssProperties } from './styles/variables';

const baseContent = ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'];

const baseConfig: Omit<Config, 'content'> = {
  darkMode: ['class'],
  safelist: ['dark'],
  theme: {
    extend: {
      fontFamily: twFontFamily,
      colors,
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'card-sm': 'var(--shadow-small)',
        'card-md': 'var(--shadow-medium)',
        'card-lg': 'var(--shadow-large)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      twFontDeclarations.forEach(addBase);
      addBase({
        ':root': mapToCssProperties(cssVariables),
        '.dark': mapToCssProperties(darkCssVariables),
        '*': {
          borderColor: 'hsl(var(--border))',
        },
        html: {
          scrollBehavior: 'smooth',
        },
        'body[data-scroll-locked]': {
          '--removed-body-scroll-bar-size': '0 !important',
          marginRight: '0 !important',
        },
        body: {
          overscrollBehavior: 'none',
          backgroundColor: 'hsl(var(--background))',
          color: 'hsl(var(--foreground))',
        },
      });
    }),
    tailwindcssAnimate,
  ],
};

export { baseContent, baseConfig, colors };
