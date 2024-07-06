/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

type Props = {
  children: React.ReactNode;
};

const TanstackQueryWrapper: React.FC<Props> = ({ children }): JSX.Element => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default TanstackQueryWrapper;
