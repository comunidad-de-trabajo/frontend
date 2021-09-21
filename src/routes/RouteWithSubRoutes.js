import React from 'react';
import { Redirect, Route } from 'react-router';
import { useRecoilValue } from 'recoil';
import { rolState } from '../recoil/usuario';

/**
 * Componente RouteWithSubRoutes, crea un componente de rutas con sus subrutas y
 * tambien valida si el usuario esta autenticado o no.
 * @param {*} route la ruta en cuestion
 * @returns componente RouteWithSubRoutes que en su interior contiene una ruta protegida o protegida segun las props
 */
export const RouteWithSubRoutes = (route) => {
  const { protection } = route;
  let isAuthenticated = true;
  const userRole = useRecoilValue(rolState);

  const AutenticacionYRolesValidos = () => {
    console.log(userRole);
    return isAuthenticated && protection.permittedRoles.includes(userRole);
  };

  return protection.isPublic ? (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
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
