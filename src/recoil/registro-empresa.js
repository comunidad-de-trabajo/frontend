import { atom } from 'recoil';

export const datosEmpresa = atom({
  key: 'datosEmpresa',
  nombreComercial: '',
  provincia: '',
  direccionEmpresa: '',
  tipoEmpleador: '',
  codigoPostal: '',
  departaMento: '',
  codigoArea: '',
  telefono: '',
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
