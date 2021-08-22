import Home from '../components/Home';
import ListadoDeEmpresasPage from '../components/listadoDeEmpresas/ListadoDeEmpresasPage';
import ListaPendientes from '../components/listadoDeEmpresas/ListaPendientes';
import ListaRechazadas from '../components/listadoDeEmpresas/ListaRechazadas';
import ListaAceptadas from '../components/listadoDeEmpresas/ListaAceptadas';
import RegistroEmpresa from '../components/registroEmpresa/RegistroEmpresa';
import DatosEmpresa from '../components/registroEmpresa/DatosEmpresa';
import TipoEmpresa from '../components/registroEmpresa/TipoEmpresa';
import { DatosRepresentante } from '../components/registroEmpresa/DatosRepresentante';
import Checkout from '../components/ofertaLaboral/OfertaLaboral';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/listadoEmpresas',
    component: ListadoDeEmpresasPage,
    routes: [
      {
        path: '/listadoEmpresas/pendientes',
        component: ListaPendientes,
      },
      {
        path: '/listadoEmpresas/rechazadas',
        component: ListaRechazadas,
      },
      {
        path: '/listadoEmpresas/aceptadas',
        component: ListaAceptadas,
      },
    ],
  },
  {
    path: '/registroDeEmpresa',
    component: RegistroEmpresa,
    routes: [
      {
        path: '/registroDeEmpresa/0',
        component: DatosEmpresa,
      },
      {
        path: '/registroDeEmpresa/1',
        component: TipoEmpresa,
      },
      {
        path: '/registroDeEmpresa/2',
        component: DatosRepresentante,
      },
    ],
  },
  {
    path: '/ofertaLaboral',
    component: Checkout,
  },
];
