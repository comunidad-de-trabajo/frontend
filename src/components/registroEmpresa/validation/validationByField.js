/*
    Aca dependiendo del campo, le asigno una funcion la cual lo va 
    validar segun su tipo.
*/

import {
  cuitValidation,
  onlyLettersValidation,
  onlyNotEmptyOrNullValidation,
  onlyNumbersValidation,
  onlyValidCharactersValidation,
  phoneValidation,
} from './validation';

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
