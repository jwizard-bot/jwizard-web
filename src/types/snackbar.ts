/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */

export type SnackbarSeverity = 'success' | 'warning' | 'danger';

export type SnackbarPayload = {
  textOrI18nLabel: string;
  isI18nContent?: boolean;
  severity?: SnackbarSeverity;
};

export type SnackbarMessage = {
  id: string;
  text: string;
  severity: SnackbarSeverity;
};

export type RemoveSnackbarPayload = {
  id: string;
};
