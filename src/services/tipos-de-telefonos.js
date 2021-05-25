const tiposTelefonos = ['Celular ', 'Fijo', 'Oficina'];

export async function getTiposTelefonos() {
  return Promise.resolve([...tiposTelefonos]);
}
