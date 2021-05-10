const tiposDeEmpresa = [
  'Emprendimiento',
  'Pyme',
  'Empresa',
  'Industria',
  'Agencia',
  'Consultora ',
  'Asociacion Civil ',
  'Institución Pública',
];

export async function getTiposDeEmpresa() {
  return Promise.resolve([...tiposDeEmpresa]);
}
