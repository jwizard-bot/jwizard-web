const createStatusBadgeI18nMessage = (globalUp: boolean | null) => {
  let i18nMessage: string;
  if (globalUp == null) {
    i18nMessage = 'globalUnknown';
  } else {
    i18nMessage = globalUp ? 'globalOperational' : 'globalDown';
  }
  return i18nMessage;
};

export { createStatusBadgeI18nMessage };
