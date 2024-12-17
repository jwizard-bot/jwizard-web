/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export const baseContent = ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'];

export const baseConfig: Omit<Config, 'content'> = {
  darkMode: ['class'],
  safelist: ['dark'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)'],
        logo: ['var(--font-logo)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        snackbar: {
          success: 'hsl(var(--snackbar-success))',
          warning: 'hsl(var(--snackbar-warning))',
          danger: 'hsl(var(--snackbar-danger))',
        },
      },
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
    },
  },
  plugins: [tailwindcssAnimate],
};
