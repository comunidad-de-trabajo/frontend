import { atom } from 'recoil';

export const datosEmpresaValidacionState = atom({
  key: 'datosEmpresaValidacionState',
  default: {
    nombreComercial: null,
    provinciaActual: null,
    razonSocial: null,
    localidad: null,
    cuit: null,
    direccion: null,
    tipoEmpleador: null,
    piso: null,
    codigoPostal: null,
    departamento: null,
    telefono: null,
  },
});

export const tipoEmpresaValidacionState = atom({
  key: 'tipoEmpresaValidacionState',
  default: {
    areaDeInteres: null,
    sitioWeb: null,
    email: null,
    tipoEmpresa: null,
    descripcion: null,
    logoEmpresa: null,
  },
});

export const datosRepresentanteValidacionState = atom({
  key: 'datosRepresentanteValidacionState',
  default: {
    nombreRepresentante: null,
    apellidoRepresentante: null,
    rolRepresentante: null,
    emailRepresentante: null,
    tipoTelefono1: null,
    telefono1: null,
    tipoTelefono2: null,
    telefono2: null,
    terminosYCondiciones: null,
  },
});
