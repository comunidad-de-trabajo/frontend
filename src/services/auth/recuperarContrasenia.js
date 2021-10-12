import api from '../envio-mails-mailjet/api';

export const recuperarContraseniaService = async ({ email }) => {
  return await api.put('api/forgot-password', { email });
};
