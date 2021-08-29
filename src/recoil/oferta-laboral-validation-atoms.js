import { atom } from 'recoil';

export const datosOfertaLaboralValidacionState = atom({
  key: 'datosOfertaLaboralValidacionState',
  default: {
    fechaVigencia: null,
    tituloBusqueda: null,
    descripcionEmpresa: null,
    mision: null,
    responsabilidades: null,
  },
});

export const requisitosOfertaValidacionState = atom({
  key: 'requisitosOfertaValidacionState',
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

export const condicionesOfertaValidacionState = atom({
  key: 'condicionesOfertaValidacionState',
  default: {
    jornada: null,
    contrato: null,
    lugarTrabajo: null,
    ofrecen: null,
  },
});

export const responsableOfertaValidacionState = atom({
  key: 'responsableOfertaValidacionState',
  default: {
    nombreCompletoRepresentante: null,
    emailRepresentante: null,
    detalles: null,
    otrasAclaraciones: null,
  },
});
