import React from 'react';
import { Redirect, Route } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userSessionState } from '../recoil/usuario';

/**
 * Componente RouteWithSubRoutes, crea un componente de rutas con sus subrutas y
 * tambien valida si el usuario esta autenticado o no.
 * @param {*} route la ruta en cuestion
 * @returns componente RouteWithSubRoutes que en su interior contiene una ruta protegida o protegida segun las props
 */
export const RouteWithSubRoutes = (route) => {
  const { protection } = route;
  const { rol, isAuthenticated } = useRecoilValue(userSessionState);

  const AutenticacionYRolesValidos = () => {
    return isAuthenticated && protection.permittedRoles.includes(rol);
  };

  const esLoginORegistro = (path) => {
    path === '/login' || path === 'registro';
  };

  return protection.isPublic ? (
    <Route
      path={route.path}
      render={(props) =>
        esLoginORegistro && isAuthenticated ? (
          <Redirect to="/home" />
        ) : (
          <route.component {...props} routes={route.routes} />
        )
      }
    />
  ) : (
    <Route
      path={route.path}
      render={(props) =>
        AutenticacionYRolesValidos() ? (
          <route.component {...props} routes={route.routes} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
