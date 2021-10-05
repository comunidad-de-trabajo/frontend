import React, { useEffect } from 'react';
import { AppRoutes } from './routes/AppRoutes';
import NavBar from './components/common/navBar/NavBar';
import { routes } from './routes/routes';
import SideBar from './components/common/sideBar/SideBar';
import { useRecoilState, useRecoilValue } from 'recoil';
import AutenticacionService from './services/autenticacionService';
import { userSessionState } from './recoil/usuario';
import { userState } from './recoil/user';

export default function App() {
  const [userSession, setUserSession] = useRecoilState(userSessionState);
  const user = useRecoilValue(userState);

  //TODO: Sacar el hardcode del token, lo tengo que agarrar del localstorage
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token != undefined) {
      AutenticacionService.getAuthenticationAndRole(token).then((res) => {
        setUserSession(res);
      });
    }
    console.log('En el use effect, datossesion: ');
    console.log(userSession);
  }, [user]);

  return (
    <>
      <NavBar />
      <SideBar />
      <AppRoutes routes={routes} />
    </>
  );
}
