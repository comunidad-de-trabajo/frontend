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
import { DatosOferta } from '../components/ofertaLaboral/DatosOferta';
import { RequisitosOferta } from '../components/ofertaLaboral/RequisitosOferta';
import { CondicionesOferta } from '../components/ofertaLaboral/CondicionesOferta';
import { ResponsableBusquedaOferta } from '../components/ofertaLaboral/ResponsableBusquedaOferta';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    protection: {
      isPublic: true,
    },
  },
  {
    path: '/home',
    component: Home,
    protection: {
      isPublic: true,
    },
  },
  {
    path: '/listadoEmpresas',
    component: ListadoDeEmpresasPage,
    protection: {
      isPublic: false,
      permittedRoles: ['admin'],
    },
    routes: [
      {
        path: '/listadoEmpresas/pendientes',
        component: ListaPendientes,
        protection: {
          isPublic: false,
          permittedRoles: ['admin'],
        },
      },
      {
        path: '/listadoEmpresas/rechazadas',
        component: ListaRechazadas,
        protection: {
          isPublic: false,
          permittedRoles: ['admin'],
        },
      },
      {
        path: '/listadoEmpresas/aceptadas',
        component: ListaAceptadas,
        protection: {
          isPublic: false,
          permittedRoles: ['admin'],
        },
      },
    ],
  },
  {
    path: '/registroDeEmpresa',
    component: RegistroEmpresa,
    protection: {
      isPublic: false,
      permittedRoles: ['empresa', 'admin'],
    },
    routes: [
      {
        path: '/registroDeEmpresa/0',
        component: DatosEmpresa,
        protection: {
          isPublic: false,
          permittedRoles: ['empresa', 'admin'],
        },
      },
      {
        path: '/registroDeEmpresa/1',
        component: TipoEmpresa,
        protection: {
          isPublic: false,
          permittedRoles: ['empresa', 'admin'],
        },
      },
      {
        path: '/registroDeEmpresa/2',
        component: DatosRepresentante,
        protection: {
          isPublic: false,
          permittedRoles: ['empresa', 'admin'],
        },
      },
    ],
  },
  {
    path: '/ofertaLaboral',
    component: Checkout,
    protection: {
      isPublic: false,
      permittedRoles: ['empresa', 'admin'],
    },
    routes: [
      {
        path: '/ofertaLaboral/0',
        component: DatosOferta,
        protection: {
          isPublic: false,
          permittedRoles: ['empresa', 'admin'],
        },
      },
      {
        path: '/ofertaLaboral/1',
        component: RequisitosOferta,
        protection: {
          isPublic: false,
          permittedRoles: ['empresa', 'admin'],
        },
      },
      {
        path: '/ofertaLaboral/2',
        component: CondicionesOferta,
        protection: {
          isPublic: false,
          permittedRoles: ['empresa', 'admin'],
        },
      },
      {
        path: '/ofertaLaboral/3',
        component: ResponsableBusquedaOferta,
        protection: {
          isPublic: false,
          permittedRoles: ['empresa', 'admin'],
        },
      },
    ],
  },
];
