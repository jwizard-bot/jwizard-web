/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';

const HomePage = React.lazy(() => import('@/app/pages/HomePage'));
const CommandsRootPage = React.lazy(
  () => import('@/app/pages/commands/CommandsRootPage')
);
const ContributeRootPage = React.lazy(
  () => import('@/app/pages/contribute/ContributeRootPage')
);
const ErrorCodesRootPage = React.lazy(
  () => import('@/app/pages/error-codes/ErrorCodesRootPage')
);
const ErrorCodePage = React.lazy(
  () => import('@/app/pages/error-codes/ErrorCodePage')
);
const NotFoundPage = React.lazy(() => import('@/app/pages/NotFoundPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/commands', element: <CommandsRootPage /> },
      { path: '/contribute', element: <ContributeRootPage /> },
      { path: '/error-codes', element: <ErrorCodesRootPage /> },
      { path: '/error-codes/:code', element: <ErrorCodePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

const RootRouterProvider: React.FC = (): JSX.Element => (
  <RouterProvider router={router} />
);

export default RootRouterProvider;
