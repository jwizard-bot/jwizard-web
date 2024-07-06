/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useSelector } from 'react-redux';
import { RootState } from '../ReduxStoreWrapper';

export const useUiStoreReducer = () =>
  useSelector((state: RootState) => state.uiStoreReducer);
