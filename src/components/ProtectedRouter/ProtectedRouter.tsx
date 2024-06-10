import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../../store/store';

const ProtectedRouter: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRouter;
