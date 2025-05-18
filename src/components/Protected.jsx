import { Navigate } from 'react-router-dom';

 export const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('usuario');
  return user ? children : <Navigate to="/login" />;
};
