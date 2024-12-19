/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DashboardLayout } from '@/app/page/dashboard/layout';
import { RootLayout } from '@/app/root-layout';

const Login = lazy(() => import('@/app/page/login'));
const Dashboard = lazy(() => import('@/app/page/dashboard'));
const NotFound = lazy(() => import('@/app/page/not-found'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/login', element: <Login /> },
      {
        path: '/',
        element: <DashboardLayout />,
        children: [{ path: '/', element: <Dashboard /> }],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const RootRouterProvider: React.FC = (): React.ReactElement => <RouterProvider router={router} />;

export { RootRouterProvider };