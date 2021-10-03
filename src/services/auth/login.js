import api from '../envio-mails-mailjet/api';

export const loginService = async ({ email, contrasenia }) => {
  return await api.post('api/login', { email, contrasenia });
};
