/*
    Aca dependiendo del campo, le asigno una funcion la cual lo va 
    validar segun su tipo.
*/

import {
  emailValidation,
  passwordValidation,
} from '../../../helpers/validation';

export const datosSignUpValidation = {
  email: emailValidation,
  contrasenia: passwordValidation,
};
