import { atom } from 'recoil';

export const datosEmpresaFormState = atom({
  key: 'datosEmpresaFormState',
  default: {
    nombreComercial: '',
    provinciaActual: '',
    razonSocial: '',
    localidad: '',
    cuit: '',
    direccion: '',
    tipoEmpleador: '',
    piso: '',
    codigoPostal: '',
    departamento: '',
    telefono: '',
  },
});

export const tipoEmpresaFormState = atom({
  key: 'tipoEmpresaFormState',
  default: {
    areaDeInteres: '',
    sitioWeb: '',
    email: '',
    tipoEmpresa: '',
    descripcion: '',
  },
});

export const datosRepresentanteFormState = atom({
  key: 'datosRepresentanteFormState',
  default: {
    nombreRepresentante: '',
    apellidoRepresentante: '',
    rolRepresentante: '',
    emailRepresentante: '',
    tipoTelefono1: '',
    telefono1: '',
    tipoTelefono2: '',
    telefono2: '',
    terminosYCondiciones: false,
  },
});
