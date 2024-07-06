/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { SnackbarMessage } from '@/types/snackbar';

export type UiStoreState = {
  snackbarStack: SnackbarMessage[];
};

export const uiStoreState: UiStoreState = {
  snackbarStack: [],
};
