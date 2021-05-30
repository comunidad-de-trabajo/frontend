import api from './api';

export const envioMailsIndividual = async ({ emailTo, aceptado, textPart }) => {
  return await api.post('api/envio_mails/individual', {
    to: { email: emailTo },
    aceptado,
    textPart,
  });
};
