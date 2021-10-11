import axios from 'axios';

export const getAllOfertas = async (estado) => {
  let ofertas = await (
    await axios.get(`http://localhost:3001/api/oferta/listar?estado=${estado}`)
  ).data;
  return ofertas;
};

export const getOfertaId = async (id) => {
  let oferta = await (
    await axios.get(`http://localhost:3001/api/oferta/detalle?id=${id}`)
  ).data;
  return oferta;
};

export const getEmpresaByUsuarioId = async (id) => {
  let empresa = await (
    await axios.get(`http://localhost:3001/api/usuario/empresa/${id}`)
  ).data;
  return empresa;
};
