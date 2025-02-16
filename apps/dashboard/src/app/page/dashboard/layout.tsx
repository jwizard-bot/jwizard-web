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
