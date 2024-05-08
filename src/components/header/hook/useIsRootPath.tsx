/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
import { useLocation } from 'react-router-dom';

const useIsRootPath = () => {
  const location = useLocation();
  return location.pathname === '/';
};

export default useIsRootPath;
