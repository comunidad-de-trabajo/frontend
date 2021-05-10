const areasDeInteres = [
  'Administración ',
  'Producción',
  'Finanzas y Contabilidad',
  'Marketing',
  'Informática',
  'Servicios',
  'Turismo',
  'Salud ',
  'Educación',
  'Rehabilitación',
  'Ambiente ',
  'Sustentabilidad ',
  'Inclusión social ',
  'Diseño ',
  'Arte',
  'Cultura ',
  'Actividad Fisica',
  'Deporte',
];

export async function getAreasDeInteres() {
  return Promise.resolve([...areasDeInteres]);
}
