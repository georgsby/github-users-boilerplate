import React from 'react';
import { useAppStore } from '@/store/auth';
import { Navigate } from 'react-router-dom';

interface IProps {
  component: React.ElementType;
}

const PrivateRoute: React.FC<IProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAppStore();
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" replace />;
};
export default PrivateRoute;
