import React, { useEffect } from 'react';
import { AppRoutes } from './routes/AppRoutes';
import NavBar from './components/common/navBar/NavBar';
import { routes } from './routes/routes';
import SideBar from './components/common/sideBar/SideBar';
import { useRecoilState } from 'recoil';
import AutenticacionService from './services/autenticacionService';
import { rolState } from './recoil/usuario';

export default function App() {
  const [userRole, setUserRole] = useRecoilState(rolState);

  //TODO: Sacar el hardcode del token, lo tengo que agarrar del localstorage
  useEffect(() => {
    AutenticacionService.getRol(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhZG1pbiIsImlhdCI6MTYzMjI2MjgxMCwiZXhwIjoxNjMyMjcwMDEwfQ.CVSBjcfIg7go7Z-Vs5j9sQO-Jk7NNtZ8WncwsYGgKXU'
    ).then((res) => {
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
