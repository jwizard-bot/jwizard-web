import * as React from 'react';
import { Suspense } from 'react';
import { PageSpinner } from '@jwizard-web/ui/component/page-spinner';

type Props = {
  children: React.ReactNode;
};

const SuspenseWrapper: React.FC<Props> = ({ children }): React.ReactElement => (
  <Suspense fallback={<PageSpinner />}>{children}</Suspense>
);

export { SuspenseWrapper };
