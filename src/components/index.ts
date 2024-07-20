/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import MainLayout from '@/components/layouts/MainLayout';
import BackgroundGradient from './BackgroundGradient';
import CookieConsent from './CookieConsent';
import MainHeader from './MainHeader';
import MeshBackgroundImage from './MeshBackgroundImage';
import PurifiedRenderer from './PurifierRenderer';
import SnackbarStack from './SnackbarStack';
import { MainFooter } from './footer';
import { ContentSuspenseSpinner, PageSuspenseSpinner } from './suspense';

const Layout = {
  MainLayout,
};

export {
  BackgroundGradient,
  ContentSuspenseSpinner,
  CookieConsent,
  Layout,
  MainFooter,
  MainHeader,
  MeshBackgroundImage,
  PageSuspenseSpinner,
  PurifiedRenderer,
  SnackbarStack,
};
