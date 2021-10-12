import api from '../envio-mails-mailjet/api';

export const resetearContraseniaService = async ({
  reset_password_link,
  password,
}) => {
  return await api.put('api/reset-password', { reset_password_link, password });
};
