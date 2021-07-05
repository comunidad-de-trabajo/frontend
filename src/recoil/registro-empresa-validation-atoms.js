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
