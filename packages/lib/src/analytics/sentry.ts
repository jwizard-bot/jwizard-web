const sentryConfig = (dsn: string) => ({
  dsn,
  tracesSampleRate: 1,
  sendDefaultPii: true,
});

export { sentryConfig };
