import { AuthRoute } from '@/components/AuthRoute';
import Login from '@/pages/Login';
import Layout from '@/pages/Layout';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/layout',
    element: <AuthRoute><Layout /></AuthRoute>
  }
]);

export default router;