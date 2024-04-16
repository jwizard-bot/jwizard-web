/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { createElement, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: createElement(lazy(() => import('@/domain/home'))),
      },
      {
        path: '/commands',
        element: createElement(lazy(() => import('@/domain/commands'))),
      },
      {
        path: '/contribute',
        element: createElement(lazy(() => import('@/domain/contribute'))),
      },
      {
        path: '*',
        element: createElement(lazy(() => import('@/domain/not-found'))),
      },
    ],
  },
]);

export default router;
