/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { createGlobalStyle } from 'styled-components';
import { CssTheme, CssThemedStyles } from './types';

export const breakpoints: Record<string, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export const devices = Object.fromEntries(
  Object.entries(breakpoints).map(([k, v]) => [
    k,
    `screen and (min-width: ${v})`,
  ])
);

export const space = (factor: number) => `calc(var(--space) * ${factor * 2})`;

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-standard);
  }
  :root {
    --font-standard: Inter, Arial, sans-serif;
    --font-logo: Paytone One, Arial, sans-serif;
    
    --button-radius: 50px;
    --duration: .3s;
    --base-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;;
    --space: 0.125rem;

    --line-height-sm: 1.25rem;
    --line-height-2xl: 2rem;

    --font-sm: 0.875rem;
    --font-2xl: 1.5rem;
    --font-3xl: 2rem;
    --font-4xl: 2.5rem;
    --font-5xl: 3rem;
    --font-8xl: 6rem;

    --theme-color-950: hsl(347, 60%, 20%);
    --theme-color-900: hsl(347, 60%, 25%);
    --theme-color-850: hsl(347, 60%, 30%);
    --theme-color-800: hsl(347, 60%, 35%);
    --theme-color-750: hsl(347, 60%, 40%);
    --theme-color-700: hsl(347, 60%, 45%);
    --theme-color-650: hsl(347, 60%, 50%);
    --theme-color-600: hsl(347, 60%, 55%);
    --theme-color-550: hsl(347, 60%, 60%);
    --theme-color-500: hsl(347, 60%, 65%);
    --theme-color-450: hsl(347, 60%, 70%);
    --theme-color-400: hsl(347, 60%, 75%);
    --theme-color-350: hsl(347, 60%, 80%);
    --theme-color-300: hsl(347, 60%, 85%);
    --theme-color-200: hsl(347, 60%, 90%);
    --theme-color-100: hsl(347, 60%, 95%);
    --theme-color-50: hsl(347, 60%, 100%);

    --gray-color-800: hsl(215, 16%, 10%);
    --gray-color-700: hsl(215, 16%, 20%);
    --gray-color-600: hsl(215, 16%, 30%);
    --gray-color-500: hsl(215, 16%, 40%);
    --gray-color-400: hsl(215, 16%, 50%);
    --gray-color-300: hsl(215, 16%, 60%);
    --gray-color-200: hsl(215, 16%, 70%);
    --gray-color-100: hsl(215, 16%, 80%);
  }
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: ${({ theme }) => theme.main.fg};
    background-color: ${({ theme }) => theme.main.bg};
    overflow-x: hidden;
  }
  a {
    font-size: 16px;
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
  #app-mount {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  button,
  select {
    color: inherit;
    background-color: inherit;
    border: none;
    cursor: pointer;
  }
`;

export const themedStyles: Record<CssTheme, CssThemedStyles> = {
  light: {
    main: {
      bg: 'var(--theme-color-50)',
      fg: 'var(--gray-color-800)',
    },
    header: {
      bg: 'rgba(255, 255, 255, 0.7)',
      link: {
        root: {
          hover: 'var(--theme-color-200)',
        },
      },
    },
    p: {
      fg: 'var(--gray-color-500)',
    },
    control: {
      light: {
        hover: 'var(--gray-color-700)',
      },
    },
  },
  dark: {
    main: {
      bg: 'var(--gray-color-800)',
      fg: 'var(--theme-color-50)',
    },
    header: {
      bg: 'rgba(21, 25, 30, 0.7)',
      link: {
        root: {
          hover: 'var(--theme-color-300)',
        },
      },
    },
    p: {
      fg: 'var(--gray-color-400)',
    },
    control: {
      light: {
        hover: 'var(--theme-color-100)',
      },
    },
  },
};
