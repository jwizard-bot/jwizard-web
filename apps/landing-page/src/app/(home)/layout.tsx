import * as React from 'react';
import { MainLayout } from '@/layout';

type Props = {
  children: React.ReactNode;
};

const HomeLayout: React.FC<Props> = ({ children }): React.ReactElement => (
  <MainLayout>{children}</MainLayout>
);

export default HomeLayout;
