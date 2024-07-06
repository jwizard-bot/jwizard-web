/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { RemoveSnackbarPayload, SnackbarMessage } from '@/types/snackbar';
import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { addSnackbar, removeSnackbar } from './actions';
import { UiStoreState, uiStoreState } from './state';

const uiStoreReducer = createReducer(uiStoreState, builder =>
  builder
    .addCase(
      addSnackbar,
      (state: UiStoreState, action: PayloadAction<SnackbarMessage>): void => {
        state.snackbarStack = [action.payload, ...state.snackbarStack];
      }
    )
    .addCase(
      removeSnackbar,
      (
        state: UiStoreState,
        action: PayloadAction<RemoveSnackbarPayload>
      ): void => {
        state.snackbarStack.splice(
          state.snackbarStack.findIndex(({ id }) => id === action.payload.id),
          1
        );
      }
    )
);

export default uiStoreReducer;
