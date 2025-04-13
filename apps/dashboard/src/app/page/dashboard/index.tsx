import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeDropdown } from '@/component';
import { usePageTitle } from '@/hooks/use-page-title';
import { useLogoutMutation } from '@/redux/api/session/slice';
import { useMainSlice } from '@/redux/store/main-slice';
import { Button } from '@jwizard-web/ui/widget/button';

const Page: React.FC = (): React.ReactElement => {
  usePageTitle({ i18nNamespace: 'dashboard' });

  const navigate = useNavigate();
  const { loggedIn, initialized } = useMainSlice();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async (): Promise<void> => {
    await logout();
  };

  useEffect(() => {
    if (!loggedIn && initialized) {
      navigate('/login');
    }
  }, [loggedIn, initialized]);

  return (
    <div>
      <ThemeDropdown />
      DASHBOARD PAGE
      <Button spinner={isLoading} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Page;
