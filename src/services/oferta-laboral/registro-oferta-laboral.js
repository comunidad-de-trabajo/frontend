import api from '../envio-mails-mailjet/api';

export const crearOfertaLaboral = async (nuevaOferta) => {
  console.log(nuevaOferta);
  return await api.post('api/oferta/crear', {
    nuevaOferta,
  });
};
