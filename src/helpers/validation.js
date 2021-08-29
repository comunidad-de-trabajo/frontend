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
  const regex = /^[\w\-\s,.\u00f1\u00d1]+$/;
  if (notEmptyOrNullValidation(field)) {
    return 'Campo requerido';
  } else if (!regex.test(field)) {
    return 'Caracteres no validos';
  }
  return null;
};

export const onlyValidCharactersValidationNotRequired = (field) => {
  const regex = /^[\w\-\s,.\u00f1\u00d1]+$/;
  if (!regex.test(field)) {
    if (field === '') return null;
    else return 'Caracteres no validos';
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
  let CUIT = cuit;
  const base = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  const codigoVerificador = parseInt(CUIT[CUIT.length - 1]);
  const productoCUITConCadaElementoDeLaBase = [];
  let regex = /-/g;
  let sumatoriaProductos = 0;
  let modulo11DeLaSumatoriaDeProductos = 0;
  //Verificamos que tenga el formato correcto.
  if (CUIT[2] != '-' || CUIT[11] != '-' || CUIT.length != 13) {
    return 'Error de formato';
  }
  CUIT = CUIT.replace(regex, '');
  for (let i = 0; i < base.length; i++) {
    productoCUITConCadaElementoDeLaBase[i] = base[i] * CUIT[i];
  }
  for (let i of productoCUITConCadaElementoDeLaBase) sumatoriaProductos += i;
  modulo11DeLaSumatoriaDeProductos = sumatoriaProductos % 11;
  let resultado = 11 - modulo11DeLaSumatoriaDeProductos;
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
  } else if (isNaN(phone)) {
    return 'Solo se permiten numeros.';
  }
  let num = phone.replace(/\D/g, '');
  let validLengths = [6, 7, 8, 10];
  if (!validLengths.includes((num + '').replace('.', '').length)) {
    return 'Numero invalido';
  }
  return null;
};

export const completeFormRegistroEmpresaValidation = (
  objectValidacion,
  object,
  step
) => {
  /* Aca lo que hago es verificar que en cada property de el objeto de validacion
     no haya ningun mensaje de error. Y tambien verifico que en cada property
     del objeto de datos no sea un string vacio. Esta es una verificacion necesaria
     ya que cuando inicializo el objeto de validacion no hay ninguna property con
     mensaje de error.
  */

  //Particularidad del ultimo step
  if (step === 2) {
    let objectFiltrado = { ...object };
    let objectValidacionFiltrado = { ...objectValidacion };

    //ignoro el campo terminos y condiciones debido a que el mismo se da por hecho que se acepta
    delete objectFiltrado.terminosYCondiciones;
    delete objectValidacionFiltrado.terminosYCondiciones;

    //Si no se ingreso un segundo telefono, --que no es requerido-- filtro esos campos para no validarlos
    if (object.telefono2 === '' && object.tipoTelefono2 === '') {
      delete objectFiltrado.telefono2;
      delete objectFiltrado.tipoTelefono2;
      delete objectValidacionFiltrado.telefono2;
      delete objectValidacionFiltrado.tipoTelefono2;
    }

    return (
      Object.entries(objectValidacionFiltrado).every(
        (entrie) => entrie[1] === null
      ) &&
      Object.entries(objectFiltrado).every((entrie) => entrie[1].trim() != '')
    );
  }
  return (
    Object.entries(objectValidacion).every((entrie) => entrie[1] === null) &&
    Object.entries(object).every((entrie) => entrie[1].trim() != '')
  );
};

export const completeFormPublicarOfertaValidation = (
  objectValidacion,
  object,
  step
) => {
  /* Mismo que el anterior pero adaptado al form de publicar oferta
   */

  //particularidad step 1 , si la edad y la experiencia previa no son requisitos
  //entonces no valido estos campos.
  if (step === 1) {
    let objectFiltrado = { ...object };
    let objectValidacionFiltrado = { ...objectValidacion };

    if (objectFiltrado.edad === 'no') {
      delete objectFiltrado.desdeEdad;
      delete objectFiltrado.hastaEdad;
      delete objectValidacionFiltrado.desdeEdad;
      delete objectValidacionFiltrado.hastaEdad;
    }
    if (objectFiltrado.experienciaPrevia === 'no') {
      delete objectFiltrado.experienciaPreviaDescription;
      delete objectValidacionFiltrado.experienciaPreviaDescription;
    }

    return (
      Object.entries(objectValidacionFiltrado).every(
        (entrie) => entrie[1] === null
      ) &&
      Object.entries(objectFiltrado).every((entrie) => entrie[1].trim() != '')
    );
  }

  return (
    Object.entries(objectValidacion).every((entrie) => entrie[1] === null) &&
    Object.entries(object).every((entrie) => {
      if (entrie[0] === 'mision') return true;
      else return entrie[1].trim() != '';
    })
  );
};
