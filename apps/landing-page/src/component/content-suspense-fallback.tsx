import * as React from 'react';
import { Suspense } from 'react';
import { ContentSpinner } from '@jwizard-web/ui/component/content-spinner';

type Props = {
  children: React.ReactNode;
};

const ContentSuspenseFallback: React.FC<Props> = ({ children }): React.ReactElement => (
  <Suspense fallback={<ContentSpinner />}>{children}</Suspense>
);

export { ContentSuspenseFallback };
