import { getListadoEmpresas } from './lista-empresas';

export async function fetchListadoEmpresas(filtro) {
  const listadoEmpresas = await getListadoEmpresas();
  const filtroAceptadas = listadoEmpresas.filter(
    (empresa) => empresa.estado === filtro
  );
  return filtroAceptadas;
}
