import React from 'react';
import { AppRoutes } from './routes/AppRoutes';
import NavBar from './components/common/navBar/NavBar';
import { routes } from './routes/routes';
import SideBar from './components/common/sideBar/SideBar';
import Inscripcion from './components/inscripcion/inscripcion-page';

export default function App() {
  return (
    <>
      <Inscripcion />
    </>
  );
}

/* 
<NavBar />
      <SideBar />
      <AppRoutes routes={routes} />
*/
