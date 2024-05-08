/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { createGlobalStyle } from 'styled-components';
import { AgnosticStyles, CssTheme, CssThemedStyles } from './types';

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
    
    --button-radius: 10px;
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

    --gray-color-800: hsl(215, 16%, 10%);
    --gray-color-750: hsl(215, 16%, 15%);
    --gray-color-700: hsl(215, 16%, 20%);
    --gray-color-600: hsl(215, 16%, 30%);
    --gray-color-500: hsl(215, 16%, 40%);
    --gray-color-400: hsl(215, 16%, 50%);
    --gray-color-300: hsl(215, 16%, 60%);
    --gray-color-200: hsl(215, 16%, 70%);
    --gray-color-100: hsl(215, 16%, 80%);
    --gray-color-50:  hsl(215, 16%, 90%);
    --gray-color-0:   hsl(215, 16%, 100%);
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
      bg: 'var(--gray-color-0)',
      fg: 'var(--gray-color-800)',
    },
    header: {
      bg: 'hsla(215, 16%, 100%, 0.7)',
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
      bg: 'var(--gray-color-750)',
      fg: 'var(--gray-color-0)',
    },
    header: {
      bg: 'hsla(215, 16%, 15%, 0.7)',
    },
    p: {
      fg: 'var(--gray-color-400)',
    },
    control: {
      light: {
        hover: 'var(--gray-color-50)',
      },
    },
  },
};

export const agnosticTheme: AgnosticStyles = {
  fg: 'var(--gray-color-800)',
  bg: 'var(--gray-color-0)',
};
