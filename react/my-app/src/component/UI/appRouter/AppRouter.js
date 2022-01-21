import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from '../../../context';
import { privateRoutes, publickRoutes } from '../../../routes';
import Loader from '../loader/Loader';

export default function AppRouter() {
  const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
          exact={route.exact}
        />
      ))}{' '}
    </Routes>
  ) : (
    <Routes>
      {publickRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
}
