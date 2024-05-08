/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { createContext, useContext } from 'react';
import useIsRootPath from '../hook/useIsRootPath';

type IsRootContextProps = {
  isRoot: boolean;
};

const IsRootContext = createContext<IsRootContextProps>({ isRoot: false });

export const useIsRootContext = () => {
  return useContext(IsRootContext);
};

type Props = {
  children: React.ReactNode;
};

const IsRootContextProvider: React.FC<Props> = ({ children }) => {
  const isRoot = useIsRootPath();

  return (
    <IsRootContext.Provider value={{ isRoot }}>
      {children}
    </IsRootContext.Provider>
  );
};

export default IsRootContextProvider;
