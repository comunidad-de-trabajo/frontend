import api from '../envio-mails-mailjet/api';

export const registroOfertaLaboral = async (nuevaoferta) => {
  return await api.post('api//oferta/crear', {
    nuevaoferta,
  });
};
