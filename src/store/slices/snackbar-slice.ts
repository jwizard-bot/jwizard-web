/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useSelector } from 'react-redux';
import { RemoveSnackbarPayload, SnackbarMessage } from '@/types/snackbar';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../ReduxStoreWrapper';

type SnackbarSliceState = {
  snackbarStack: SnackbarMessage[];
};

const initialState: SnackbarSliceState = {
  snackbarStack: [],
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    addSnackbar: (
      state: SnackbarSliceState,
      action: PayloadAction<SnackbarMessage>
    ): void => {
      state.snackbarStack = [action.payload, ...state.snackbarStack];
    },
    removeSnackbar: (
      state: SnackbarSliceState,
      action: PayloadAction<RemoveSnackbarPayload>
    ): void => {
      state.snackbarStack.splice(
        state.snackbarStack.findIndex(({ id }) => id === action.payload.id),
        1
      );
    },
  },
});

export const { addSnackbar, removeSnackbar } = snackbarSlice.actions;

export const useSnackbarSelector = () =>
  useSelector((state: RootState) => state.snackbarSlice);

export default snackbarSlice.reducer;
