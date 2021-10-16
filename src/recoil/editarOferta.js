import { atom } from 'recoil';

export const idOferta = atom({
  key: 'idOferta',
  default: {
    id: '',
  },
});

export const editarDatosOfertaLaboral = atom({
  key: 'editarDatosOfertaLaboral',
  default: {
    fechaVigencia: '',
    tituloBusqueda: '',
    descripcionEmpresa: '',
    mision: '',
    responsabilidades: '',
  },
});

export const editarRequisitosOferta = atom({
  key: 'editarRequisitosOferta',
  default: {
    secundarioCompleto: '',
    paqueteOffice: '',
    licenciaConducir: '',
    edad: '',
    desdeEdad: '',
    hastaEdad: '',
    experienciaPrevia: '',
    experienciaPreviaDescription: '',
    residencia: '',
    areasEstudio: '',
    competencias: '',
    otrosDetalles: '',
  },
});

export const editarCondicionesOferta = atom({
  key: 'editarCondicionesOferta',
  default: {
    jornada: '',
    contrato: '',
    lugarTrabajo: '',
    ofrecen: '',
  },
});

export const editarResponsableOferta = atom({
  key: 'editarResponsableOferta',
  default: {
    nombreCompletoRepresentante: '',
    emailRepresentante: '',
    detalles: '',
    otrasAclaraciones: '',
  },
});
