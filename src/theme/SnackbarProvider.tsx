'use client';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { createContext, useContext } from 'react';
import { useTranslations } from 'next-intl';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addSnackbar, removeSnackbar } from '@/store/slices/snackbar-slice';
import { SnackbarPayload } from '@/types/snackbar';

type SnackbarContextType = {
  pushSnackbar: (snackbar: SnackbarPayload) => void;
};

const SnackbarContext = createContext({} as SnackbarContextType);

type Props = {
  revokeTime?: number;
  children: React.ReactNode;
};

export const SnackbarProvider: React.FC<Props> = ({
  revokeTime = 4000,
  children,
}): JSX.Element => {
  const dispatch = useDispatch();
  const t = useTranslations();

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
