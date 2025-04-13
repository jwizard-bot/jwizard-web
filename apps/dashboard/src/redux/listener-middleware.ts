import { tRoot } from '@/i18n';
import { showToast } from '@jwizard-web/ui/widget/toast-notification';
import { createListenerMiddleware, isRejectedWithValue } from '@reduxjs/toolkit';

const listenerMiddleware = createListenerMiddleware();

const errorI18nMessages: Record<string, string> = {
  // typical
  BAD_REQUEST: 'error.badRequestError',
  UNAUTHORIZED: 'error.noSessionError',
  FORBIDDEN: 'error.badPermissionError',
  NOT_FOUND: 'error.notFoundError',
  INTERNAL_SERVER_ERROR: 'error.unknownServerError',
};

// global error handler
listenerMiddleware.startListening({
  matcher: isRejectedWithValue,
  effect: async action => {
    const error = action.payload as {
      data: {
        key: string;
      };
    };
    if (!error) {
      return; // skip if no error
    }
    let i18nKeyMessage = 'INTERNAL_SERVER_ERROR';
    if ('data' in error && 'key' in error.data) {
      // if error is defined by backend
      if (Object.keys(errorI18nMessages).includes(error.data.key)) {
        i18nKeyMessage = error.data.key;
      }
    }
    showToast({ title: tRoot(errorI18nMessages[i18nKeyMessage]), severity: 'danger' });
  },
});

export { listenerMiddleware };
