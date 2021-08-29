/*
    Aca dependiendo del campo, le asigno una funcion la cual lo va 
    validar segun su tipo.
*/

import {
  emailValidation,
  onlyLettersValidation,
  onlyNotEmptyOrNullValidation,
  onlyValidCharactersValidation,
  onlyValidCharactersValidationNotRequired,
} from '../../../helpers/validation';

export const datosOfertaValidations = {
  fechaVigencia: onlyNotEmptyOrNullValidation,
  tituloBusqueda: onlyValidCharactersValidation,
  descripcionEmpresa: onlyValidCharactersValidation,
  mision: onlyValidCharactersValidationNotRequired,
  responsabilidades: onlyValidCharactersValidation,
};

export const requisitosValidations = {
  secundarioCompleto: onlyNotEmptyOrNullValidation,
  paqueteOffice: onlyNotEmptyOrNullValidation,
  licenciaConducir: onlyNotEmptyOrNullValidation,
  edad: onlyNotEmptyOrNullValidation,
  desdeEdad: onlyNotEmptyOrNullValidation,
  hastaEdad: onlyNotEmptyOrNullValidation,
  experienciaPrevia: onlyNotEmptyOrNullValidation,
  experienciaPreviaDescription: onlyNotEmptyOrNullValidation,
  residencia: onlyValidCharactersValidation,
  areasEstudio: onlyValidCharactersValidation,
  competencias: onlyValidCharactersValidation,
  otrosDetalles: onlyValidCharactersValidation,
};

export const condicionesValidations = {
  jornada: onlyNotEmptyOrNullValidation,
  contrato: onlyValidCharactersValidation,
  lugarTrabajo: onlyValidCharactersValidation,
  ofrecen: onlyValidCharactersValidation,
};

export const responsableOfertaValidations = {
  nombreCompletoRepresentante: onlyLettersValidation,
  emailRepresentante: emailValidation,
  detalles: onlyValidCharactersValidation,
  otrasAclaraciones: onlyValidCharactersValidation,
};
