/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { RemoveSnackbarPayload, SnackbarMessage } from '@/types/snackbar';
import { createAction } from '@reduxjs/toolkit';

enum Actions {
  ADD_SNACKBAR = '[UI STORE] ADD SNACKBAR',
  REMOVE_SNACKBAR = '[UI STORE] REMOVE SNACKBAR',
}

export const addSnackbar = createAction<SnackbarMessage, Actions>(
  Actions.ADD_SNACKBAR
);

export const removeSnackbar = createAction<RemoveSnackbarPayload, Actions>(
  Actions.REMOVE_SNACKBAR
);
