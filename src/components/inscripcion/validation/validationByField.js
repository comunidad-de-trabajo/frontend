/*
    Aca dependiendo del campo, le asigno una funcion la cual lo va 
    validar segun su tipo.
*/

import {
  emailValidation,
  passwordEqualsTo,
  passwordValidation,
} from '../../../helpers/validation';

export const datosSignUpValidation = {
  email: emailValidation,
  contrasenia: passwordValidation,
  repetirContrasenia: passwordEqualsTo,
};
