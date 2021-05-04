import React from 'react';
import { AppRoutes } from './routes/AppRoutes';
import NavBar from './components/common/navBar/NavBar';
import { routes } from './routes/routes';
import SideBar from './components/common/sideBar/SideBar';

export default function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <AppRoutes routes={routes} />
    </>
  );
}
