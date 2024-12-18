/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import * as React from 'react';
import { Outlet } from 'react-router';

const DashboardLayout: React.FC = (): React.ReactElement => (
  <div>
    <header>DASHBOARD HEADER</header>
    <Outlet />
    <header>DASHBOARD FOOTER</header>
  </div>
);

export { DashboardLayout };
