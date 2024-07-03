import Layout from '@/pages/Layout'; // 'src/pages/Layout'
import Login from '@/pages/Login';   // 'src/pages/Login'

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