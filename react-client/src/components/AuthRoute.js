import { getToken } from '@/utils/token';
import { Navigate } from 'react-router-dom';

// A component to protect routes that require authentication
export function AuthRoute({ children }) {
  // Get the authentication token
  const token = getToken();

  // If the token exists, render the children components (protected content)
  if (token) {
    return <>{children}</>;
  } 
  // If the token does not exist, navigate to the home page
  else {
    return <Navigate to="/" replace />;
  }
}
