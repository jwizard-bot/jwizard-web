/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React, { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';

/* eslint-disable */
const HomePage = lazy(() => import('@/app/pages/HomePage'));
const CommandsRootPage = lazy(() => import('@/app/pages/commands/CommandsRootPage'));
const ContributeRootPage = lazy(() => import('@/app/pages/contribute/ContributeRootPage'));
const ErrorCodesRootPage = lazy(() => import('@/app/pages/error-codes/ErrorCodesRootPage'));
const ErrorCodePage = lazy(() => import('@/app/pages/error-codes/ErrorCodePage'));
const PrivacyPolicyPage = lazy(() => import('@/app/pages/privacy-policy/PrivacyPolicyRootPage'));
const TermsOfServicePage = lazy(() => import('@/app/pages/terms-of-service/TermsOfServiceRootPage'));
const NotFoundPage = lazy(() => import('@/app/pages/NotFoundPage'));
/* eslint-enable */

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
      { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
      { path: '/terms-of-service', element: <TermsOfServicePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

const RootRouterProvider: React.FC = (): JSX.Element => (
  <RouterProvider router={router} />
);

export default RootRouterProvider;
