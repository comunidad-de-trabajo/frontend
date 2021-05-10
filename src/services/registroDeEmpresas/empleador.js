const tipoEmpleador = [
  'Agencia de reclutamiento / consultora de RRHH',
  'Empleador directo',
];

export async function getTipoEmpleador() {
  return Promise.resolve([...tipoEmpleador]);
}
