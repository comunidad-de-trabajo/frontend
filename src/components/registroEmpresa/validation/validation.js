/*
    Aca lo que hago es una funcion de validacion para cada caso que tenemos en el form.
    Si es invalida retorna un mensaje y sino null.

    Todas las validaciones implican que el campo a validar no sea un string vacio,
    un campo de tipo undefined o que sea nulo.
*/

export const notEmptyOrNullValidation = (field) => {
  return field.trim() === '' || typeof field === 'undefined' || field === null;
};

export const onlyNotEmptyOrNullValidation = (field) => {
  if (field.trim() === '' || typeof field === 'undefined' || field === null) {
    return 'Campo requerido';
  }
  return null;
};

export const onlyValidCharactersValidation = (field) => {
  const regex = /^[\w\-\s]+$/;
  if (notEmptyOrNullValidation(field)) {
    return 'Campo requerido';
  } else if (!regex.test(field)) {
    return 'Caracteres no validos';
  }
  return null;
};

export const onlyLettersValidation = (field) => {
  if (notEmptyOrNullValidation(field)) {
    return 'Campo requerido';
  } else if (/[^a-zA-Z -]/.test(field)) {
    return 'Caracteres no validos';
  }
  return null;
};

export const emailValidation = (email) => {
  if (notEmptyOrNullValidation(email)) {
    return 'Campo requerido';
  } else if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  return 'Email invalido';
};

export const cuitValidation = (cuit) => {
  if (notEmptyOrNullValidation(cuit)) {
    return 'Campo requerido';
  }

  let CUIT = cuit;
  const base = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  const codigoVerificador = parseInt(CUIT[CUIT.length - 1]);
  const productoCUITConCadaElementoDeLaBase = [];
  let regex = /-/g;
  let sumatoriaProductos = 0;
  let primerDecimalDeLaSumatoria = 0;
  //Verificamos que tenga el formato correcto.
  if (CUIT[2] != '-' || CUIT[11] != '-' || CUIT.length != 13) {
    return 'Error de formato';
  }
  CUIT = CUIT.replace(regex, '');
  for (let i = 0; i < base.length; i++) {
    productoCUITConCadaElementoDeLaBase[i] = base[i] * CUIT[i];
  }
  for (let i of productoCUITConCadaElementoDeLaBase) sumatoriaProductos += i;
  sumatoriaProductos = sumatoriaProductos / 11;
  primerDecimalDeLaSumatoria =
    sumatoriaProductos - Math.trunc(sumatoriaProductos);
  //Redondeo el decimal
  primerDecimalDeLaSumatoria = primerDecimalDeLaSumatoria * Math.pow(10, 1);
  primerDecimalDeLaSumatoria = Math.round(primerDecimalDeLaSumatoria);
  let resultado = 11 - primerDecimalDeLaSumatoria;
  if (resultado === codigoVerificador) {
    return null;
  }
  return 'CUIT invalido';
};

export const onlyNumbersValidation = (field) => {
  if (notEmptyOrNullValidation(field)) {
    return 'Campo requerido';
  } else if (!isNaN(field)) {
    return null;
  }
  return 'Solo se permiten numeros.';
};

export const phoneValidation = (phone) => {
  if (notEmptyOrNullValidation(phone)) {
    return 'Campo requerido';
  }
  let num = phone.replace(/\D/g, '');
  let validLengths = [6, 7, 8, 10];
  if (!validLengths.includes((num + '').replace('.', '').length)) {
    return 'Numero invalido';
  }
  return null;
};
