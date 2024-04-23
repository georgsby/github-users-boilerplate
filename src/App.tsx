import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home';
import Users from '@/pages/Users';
import Profile from '@/pages/Profile';
import AuthCallback from '@/pages/AuthCallback';
import PrivateRoute from '@/components/PrivateRoute';
import Loader from '@/components/ui/loader';
import { useAppStore } from '@/store/auth';
import { startApp } from '@/lib/tokenManagement';

function App() {
  const { isAppCanStart } = useAppStore();

  useEffect(() => {
    startApp();
  }, []);

  const pages = createBrowserRouter([
    {
      path: `/`,
      element: <Home />,
    },
    {
      path: `/callback`,
      element: <AuthCallback />,
    },
    {
      path: `/users`,
      element: <PrivateRoute component={Users} />,
    },
    {
      path: `/profile/:username`,
      element: <PrivateRoute component={Profile} />,
    },
  ]);

  if (!isAppCanStart) return <Loader overlay />;

  return <RouterProvider router={pages} />;
}

export default App;
