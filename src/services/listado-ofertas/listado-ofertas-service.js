import axios from 'axios';
import api from '../envio-mails-mailjet/api';

export const getAllOfertas = async (estado) => {
  let ofertas = await (
    await api.get(`/api/oferta/listar?estado=${estado}`)
  ).data;
  return ofertas;
};

export const getOfertaId = async (id) => {
  let oferta = await (
    await api.get(`/api/oferta/detalle?id=${id}`)
  ).data;
  return oferta;
};

export const getEmpresaByUsuarioId = async (id) => {
  let empresa = await (
    await api.get(`/api/usuario/empresa/${id}`)
  ).data;
  return empresa;
};

export const cambiarEstadoOferta = async (id, estado) => {
  return api.post(`/api/oferta/cambiarEstado?id=${id}`, {
    estado,
  });
};
