/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { Layout } from '@/components';

type Props = {
  children: React.ReactNode;
};

const HomeLayout: React.FC<Props> = ({ children }): JSX.Element => (
  <Layout.MainLayout>{children}</Layout.MainLayout>
);

export default HomeLayout;
