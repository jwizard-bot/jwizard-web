const sentryConfig = (dsn: string) => ({
  dsn,
  tracesSampleRate: 0.5,
  sendDefaultPii: true,
});

export { sentryConfig };
