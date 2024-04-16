/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { createGlobalStyle } from 'styled-components';

const breakpoints: Record<string, string> = {
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
    --transparent-color: transparent;
    --base-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;;

    --space: 0.125rem;
    --space-1: calc(var(--space) * 2);
    --space-2: calc(var(--space) * 4);
    --space-3: calc(var(--space) * 6);
    --space-4: calc(var(--space) * 8);
    --space-5: calc(var(--space) * 10);
    --space-6: calc(var(--space) * 12);
    --space-8: calc(var(--space) * 16);
    --space-10: calc(var(--space) * 20);
    --space-20: calc(var(--space) * 40);
    --space-24: calc(var(--space) * 48);
    --space-28: calc(var(--space) * 56);

    --line-height-sm: 1.25rem;
    --line-height-2xl: 2rem;

    --font-sm: 0.875rem;
    --font-2xl: 1.5rem;
    --font-3xl: 2rem;
    --font-4xl: 2.5rem;
    --font-5xl: 3rem;
    --font-8xl: 6rem;

    --br-sm: 640px;
    --br-md: 768px;
    --br-lg: 1024px;
    --br-xl: 1280px;

    --theme-color-950: #1e1b4b;
    --theme-color-900: #312e81;
    --theme-color-800: #3730a3;
    --theme-color-700: #4338ca;
    --theme-color-600: #4f46e5;
    --theme-color-500: #6366f1;
    --theme-color-400: #818cf8;
    --theme-color-300: #a5b4fc;
    --theme-color-200: #c7d2fe;
    --theme-color-100: #e0e7ff;
    --theme-color-50: #eef2ff;

    --tint-color-50: #f8fafc;
    --tint-color-100: #f1f5f9;
    --tint-color-200: #e2e8f0;
    --tint-color-300: #cbd5e1;
    --tint-color-400: #94a3b8;
    --tint-color-500: #64748b;
    --tint-color-600: #475569;
    --tint-color-700: #334155;
    --tint-color-800: #1e293b;
    --tint-color-800-a40: rgba(30, 41, 59, 0.4);
    --tint-color-900: #0f172a;
    --tint-color-950: #020617;

    --light-color-100: #ffffff;
    --light-color-100-a40: rgba(255, 255, 255, 0.4);
  }
  html.light-mode:root {
    --main-bg: var(--light-color-100);
    --main-fg: var(--tint-color-950);
    --paragraph-fg: var(--tint-color-500);
    --header-border: var(--tint-color-300);
    --header-bg: var(--light-color-100-a40);
    --header-p-fg: var(--tint-color-800);
    --header-p-root-fg: var(--light-color-100);
    --header-link-fg: var(--tint-color-700);
    --header-link-root-fg: var(--light-color-100);
    --header-link-hover-fg: var(--theme-color-600);
    --header-link-hover-root-fg: var(--tint-color-300);
    --hamburger-bars-fg: var(--tint-color-950);
    --hamburger-menu-bg: var(--light-color-100);
    --hamburger-menu-close-btn-hover-fg: var(--tint-color-800);
    --hamburger-menu-close-btn-hover-bg: var(--tint-color-200);
    --hamburger-menu-link-fg: var(--tint-color-700);
    --hamburger-menu-link-hover-fg: var(--theme-color-600);
    --light-control-fg: var(--light-color-100);
    --light-control-bg: var(--tint-color-950);
    --light-control-hover-bg: var(--tint-color-800);
    --tooltip-bg: var(--tint-color-950);
    --tooltip-fg: var(--light-color-100);
  }
  html.dark-mode:root {
    --main-bg: var(--tint-color-800);
    --main-fg: var(--light-color-100);
    --paragraph-fg: var(--tint-color-400);
    --header-border: var(--tint-color-700);
    --header-bg: var(--tint-color-800-a40);
    --header-p-fg: var(--light-color-100);
    --header-p-root-fg: var(--light-color-100);
    --header-link-fg: var(--tint-color-200);
    --header-link-root-fg: var(--light-color-100);
    --header-link-hover-fg: var(--theme-color-500);
    --header-link-hover-root-fg: var(--tint-color-300);
    --hamburger-bars-fg: var(--light-color-100);
    --hamburger-menu-bg: var(--tint-color-800);
    --hamburger-menu-close-btn-hover-fg: var(--light-color-100);
    --hamburger-menu-close-btn-hover-bg: var(--tint-color-600);
    --hamburger-menu-link-fg: var(--tint-color-200);
    --hamburger-menu-link-hover-fg: var(--theme-color-500);
    --light-control-fg: var(--tint-color-950);
    --light-control-bg: var(--light-color-100);
    --light-control-hover-bg: var(--tint-color-200);
    --tooltip-bg: var(--light-color-100);
    --tooltip-fg: var(--tint-color-950);
  }
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: var(--main-fg);
    background-color: var(--main-bg);
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
