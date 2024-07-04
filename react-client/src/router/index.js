// Import necessary components and modules
import { AuthRoute } from '@/components/AuthRoute';
import Login from '@/pages/Login';
import Layout from '@/pages/Layout';
import { createBrowserRouter } from 'react-router-dom';

// Define routes for the application
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />, // Route for the login page
  },
  {
    path: '/layout',
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ), // Protected route for the layout page, wrapped with AuthRoute
  },
]);

// Export the configured router
export default router;
