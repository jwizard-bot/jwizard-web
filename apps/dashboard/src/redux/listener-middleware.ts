import { tRoot } from '@/i18n';
import { showToast } from '@jwizard-web/ui/widget/toast-notification';
import { createListenerMiddleware, isRejectedWithValue } from '@reduxjs/toolkit';

const listenerMiddleware = createListenerMiddleware();

const errorI18nMessages: Record<number, string> = {
  400: 'error.badRequestError',
  401: 'error.noSessionError',
  403: 'error.badPermissionError',
  404: 'error.notFoundError',
  500: 'error.unknownServerError',
};

// global error handler
listenerMiddleware.startListening({
  matcher: isRejectedWithValue,
  effect: async action => {
    const error = action.payload as {
      status: number;
    };
    if (!error || !('status' in error)) {
      return; // skip if no error
    }
    let i18nKey = errorI18nMessages[500];
    if (error.status in errorI18nMessages) {
      i18nKey = errorI18nMessages[error.status];
    }
    showToast({ title: tRoot(i18nKey), severity: 'danger' });
  },
});

export { listenerMiddleware };
