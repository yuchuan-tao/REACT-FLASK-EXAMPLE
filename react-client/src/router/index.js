import Layout from '../pages/Layout';
import Login from '../pages/Login';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/layout',
    element: <Layout />
  }
]);

export default router;