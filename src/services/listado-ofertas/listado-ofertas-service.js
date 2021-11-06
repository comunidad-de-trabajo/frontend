import axios from 'axios';

export const getAllOfertas = async (estado) => {
  let ofertas = await (
    await axios.get(
      `https://35.247.236.141:3000/api/oferta/listar?estado=${estado}`
    )
  ).data;
  return ofertas;
};

export const getOfertaId = async (id) => {
  let oferta = await (
    await axios.get(`https://35.247.236.141:3000/api/oferta/detalle?id=${id}`)
  ).data;
  return oferta;
};

export const getEmpresaByUsuarioId = async (id) => {
  let empresa = await (
    await axios.get(`https://35.247.236.141:3000/api/usuario/empresa/${id}`)
  ).data;
  return empresa;
};

export const cambiarEstadoOferta = async (id, estado) => {
  return axios.post(
    `https://35.247.236.141:3000/api/oferta/cambiarEstado?id=${id}`,
    {
      estado,
    }
  );
};
