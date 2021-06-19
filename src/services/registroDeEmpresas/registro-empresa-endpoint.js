import api from '../envio-mails-mailjet/api';

export const crearNuevoRegistro = async (data) => {
  return await api.post('api/registro', data);
};
