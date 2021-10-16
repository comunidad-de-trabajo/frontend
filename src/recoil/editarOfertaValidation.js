import { atom } from 'recoil';

export const editarDatosOfertaLaboralValidacionState = atom({
  key: 'editarDatosOfertaLaboralValidacionState',
  default: {
    fechaVigencia: null,
    tituloBusqueda: null,
    descripcionEmpresa: null,
    mision: null,
    responsabilidades: null,
  },
});

export const editarRequisitosOfertaValidacionState = atom({
  key: 'editarRequisitosOfertaValidacionState',
  default: {
    secundarioCompleto: null,
    paqueteOffice: null,
    licenciaConducir: null,
    edad: null,
    desdeEdad: null,
    hastaEdad: null,
    experienciaPrevia: null,
    residencia: null,
    areasEstudio: null,
    competencias: null,
    otrosDetalles: null,
  },
});

export const editarCondicionesOfertaValidacionState = atom({
  key: 'editarCondicionesOfertaValidacionState',
  default: {
    jornada: null,
    contrato: null,
    lugarTrabajo: null,
    ofrecen: null,
  },
});

export const editarResponsableOfertaValidacionState = atom({
  key: 'editarResponsableOfertaValidacionState',
  default: {
    nombreCompletoRepresentante: null,
    emailRepresentante: null,
    detalles: null,
    otrasAclaraciones: null,
  },
});
