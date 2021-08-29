/*
    Aca dependiendo del campo, le asigno una funcion la cual lo va 
    validar segun su tipo.
*/

import {
  cuitValidation,
  emailValidation,
  onlyLettersValidation,
  onlyNotEmptyOrNullValidation,
  onlyNumbersValidation,
  onlyValidCharactersValidation,
  phoneValidation,
} from '../../../helpers/validation';

export const datosEmpresaValidations = {
  nombreComercial: onlyValidCharactersValidation,
  provinciaActual: onlyNotEmptyOrNullValidation,
  razonSocial: onlyValidCharactersValidation,
  localidad: onlyNotEmptyOrNullValidation,
  cuit: cuitValidation,
  direccion: onlyValidCharactersValidation,
  tipoEmpleador: onlyNotEmptyOrNullValidation,
  piso: onlyNumbersValidation,
  codigoPostal: onlyValidCharactersValidation,
  departamento: onlyValidCharactersValidation,
  telefono: phoneValidation,
};

export const tipoEmpresaValidations = {
  areaDeInteres: onlyNotEmptyOrNullValidation,
  sitioWeb: onlyNotEmptyOrNullValidation,
  email: emailValidation,
  tipoEmpresa: onlyNotEmptyOrNullValidation,
  descripcion: onlyNotEmptyOrNullValidation,
};

export const datosRepresentanteValidations = {
  nombreRepresentante: onlyLettersValidation,
  apellidoRepresentante: onlyLettersValidation,
  rolRepresentante: onlyLettersValidation,
  emailRepresentante: emailValidation,
  tipoTelefono1: onlyNotEmptyOrNullValidation,
  telefono1: phoneValidation,
  tipoTelefono2: onlyNotEmptyOrNullValidation,
  telefono2: phoneValidation,
};
