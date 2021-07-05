import { atom } from 'recoil';

export const datosEmpresaValidacion = atom({
  key: 'datosEmpresaValidacion',
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

export const tipoEmpresaValidacion = atom({
  key: 'tipoEmpresaValidacion',
  default: {
    areaDeInteres: null,
    sitioWeb: null,
    email: null,
    tipoEmpresa: null,
    descripcion: null,
    logoEmpresa: null,
  },
});

export const datosRepresentanteValidacion = atom({
  key: 'datosRepresentanteValidacion',
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
