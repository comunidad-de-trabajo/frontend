export const listaEmpresas = [
  {
    id: 1,
    nombre: 'Empresa 1',
    estado: 'aceptada',
  },
  {
    id: 2,
    nombre: 'Empresa 2',
    estado: 'aceptada',
  },
  {
    id: 3,
    nombre: 'Empresa 3',
    estado: 'rechazada',
  },
  {
    id: 4,
    nombre: 'Empresa 4',
    estado: 'pendiente',
  },
  {
    id: 5,
    nombre: 'Empresa 5',
    estado: 'pendiente',
  },
  {
    id: 6,
    nombre: 'Empresa 6',
    estado: 'pendiente',
  },
  {
    id: 7,
    nombre: 'Empresa 7',
    estado: 'pendiente',
  },
  {
    id: 8,
    nombre: 'Empresa 8',
    estado: 'rechazada',
  },
  {
    id: 9,
    nombre: 'Empresa 9',
    estado: 'rechazada',
  },
  {
    id: 10,
    nombre: 'Empresa 10',
    estado: 'aceptada',
  },
  {
    id: 11,
    nombre: 'Empresa 11',
    estado: 'aceptada',
  },
  {
    id: 12,
    nombre: 'Empresa 12',
    estado: 'rechazada',
  },
];

export async function getListadoEmpresas() {
  return Promise.resolve([...listaEmpresas]);
}
