import {
  emailValidation,
  onlyNotEmptyOrNullValidation,
} from '../../../helpers/validation';

export const datosLoginValidation = {
  email: emailValidation,
  contrasenia: onlyNotEmptyOrNullValidation,
};
