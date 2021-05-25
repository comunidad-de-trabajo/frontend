import { atom } from 'recoil';

export const datosEmpresaFormState = atom({
  key: 'datosEmpresaFormState',
  default: {
    nombreComercial: '',
    provinciaActual: '',
    razonSocial: '',
    localidad: '',
    cuit: null,
    direccion: '',
    tipoEmpleador: '',
    piso: null,
    codigoPostal: null,
    departamento: '',
    telefono: null,
  },
});

const tipoEmpresa = atom({
  areasDeInteres: '',
  sitioWeb: '',
  email: '',
  tipoEmpresa: '',
  descripcion: '',
});

const datosRepresentante = atom({
  nombreRepr: '',
  apellidoRepr: '',
  cargoRepr: '',
  emailRepr: '',
  codigoAreaRepr: '',
  telefonoRepr: '',
  terminosYCondiciones: false,
});
