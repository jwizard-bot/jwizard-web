/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addSnackbar, removeSnackbar } from '@/store/ui-store/actions';
import { SnackbarPayload } from '@/types/snackbar';

type SnackbarContextType = {
  pushSnackbar: (snackbar: SnackbarPayload) => void;
};

const SnackbarContext = React.createContext({} as SnackbarContextType);

type Props = {
  revokeTime?: number;
  children: React.ReactNode;
};

export const SnackbarProvider: React.FC<Props> = ({
  revokeTime = 4000,
  children,
}): JSX.Element => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const pushSnackbar = ({
    textOrI18nLabel,
    isI18nContent = false,
    severity = 'success',
  }: SnackbarPayload): void => {
    const id = uuidv4();
    dispatch(
      addSnackbar({
        id: uuidv4(),
        text: isI18nContent ? t(textOrI18nLabel) : textOrI18nLabel,
        severity,
      })
    );
    setTimeout(() => dispatch(removeSnackbar({ id })), revokeTime);
  };

  return (
    <SnackbarContext.Provider value={{ pushSnackbar }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);

export default SnackbarProvider;
