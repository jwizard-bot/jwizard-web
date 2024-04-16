/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import '@/i18n';
import router from './router/router';

const appMount = document.getElementById('app-mount')!;

ReactDOM.createRoot(appMount).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
