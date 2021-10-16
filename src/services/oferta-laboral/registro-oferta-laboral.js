import api from '../envio-mails-mailjet/api';

export const crearOfertaLaboral = async (nuevaOferta) => {
  return await api.post('api/oferta/crear', {
    nuevaOferta,
    token: localStorage.getItem('token'),
  });
};

export const actualizarOferta = async (id, data) => {
  return await api.patch(`api/oferta/${id}`, {
    data,
  });
};
