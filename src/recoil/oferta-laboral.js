import { atom } from 'recoil';

export const datosOfertaLaboralState = atom({
  key: 'datosOfertaLaboralState',
  default: {
    fechaVigencia: '',
    tituloBusqueda: '',
    descripcionEmpresa: '',
    mision: '',
    responsabilidades: '',
  },
});

export const requisitosOfertaState = atom({
  key: 'requisitosOferta',
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

export const condicionesOfertaState = atom({
  key: 'condicionesOfertaState',
  default: {
    jornada: '',
    contrato: '',
    lugarTrabajo: '',
    ofrecen: '',
  },
});

export const responsableOfertaState = atom({
  key: 'responsableOfertaState',
  default: {
    nombreCompletoRepresentante: '',
    emailRepresentante: '',
    detalles: '',
    otrasAclaraciones: '',
  },
});
