import api from '../envio-mails-mailjet/api';

export const nuevoRegistro = async (data) => {
  return await api.post('api/usuario', data);
};
