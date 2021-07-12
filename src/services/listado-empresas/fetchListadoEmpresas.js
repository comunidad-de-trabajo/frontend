/*import { getListadoEmpresas } from './lista-empresas';*/
import api from '../envio-mails-mailjet/api';

export async function fetchListadoEmpresas(filtro) {
  /*
  const listadoEmpresas = await getListadoEmpresas();
  const filtroAceptadas = listadoEmpresas.filter(
    (empresa) => empresa.estado === filtro
  );
  return filtroAceptadas;
  */
  const response = await api.get(`api/registro/?estado=${filtro}`);
  return response.data;
}

export async function detalleEmpresa(id) {
  /*
  const listadoEmpresas = await getListadoEmpresas();
  const datosEmpresa = listadoEmpresas.find((empresa) => empresa.id === id);
  return datosEmpresa;
  */
  const response = await api.get(`api/registro/${id}`);
  return response.data;
}
