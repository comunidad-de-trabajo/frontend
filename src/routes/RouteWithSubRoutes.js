import React from 'react';
import { Redirect, Route } from 'react-router';

/**
 * Componente RouteWithSubRoutes, crea un componente de rutas con sus subrutas y
 * tambien valida si el usuario esta autenticado o no.
 * @param {*} route la ruta en cuestion
 * @returns componente RouteWithSubRoutes que en su interior contiene una ruta protegida o protegida segun las props
 */
export const RouteWithSubRoutes = (route) => {
  const { protection } = route;
  let isAuthenticated = true;
  let role = 'empresa';

  const AutenticacionYRolesValidos = () => {
    return isAuthenticated && protection.permittedRoles.includes(role);
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
