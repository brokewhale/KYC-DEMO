import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '~/client/contexts/UserContext';
import Main from '~/client/root/Main';
import { AppProvider } from '../contexts/AppContext';

export const App = () => {
  return (
    <HelmetProvider>
      <AppProvider>
        <Main />
      </AppProvider>
    </HelmetProvider>
  );
};
