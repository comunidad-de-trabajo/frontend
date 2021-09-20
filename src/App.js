import React, { useEffect } from 'react';
import { AppRoutes } from './routes/AppRoutes';
import NavBar from './components/common/navBar/NavBar';
import { routes } from './routes/routes';
import SideBar from './components/common/sideBar/SideBar';
import { useRecoilState } from 'recoil';
import { auth } from './services/autenticacionService';
import { rolState } from './recoil/usuario';

export default function App() {
  const [userRole, setUserRole] = useRecoilState(rolState);

  useEffect(() => {
    auth
      .getRol(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJlbXByZXNhIiwiaWF0IjoxNjMyMTc4MzY0LCJleHAiOjE2MzIxODU1NjR9.9VISAUq5ej3-lCvOzWDcwHGMlm-t_qKcKxLwHo7vYFs'
      )
      .then((res) => {
        setUserRole(res);
      });
  }, [setUserRole]);

  return (
    <>
      <NavBar />
      <SideBar />
      <AppRoutes routes={routes} />
    </>
  );
}
