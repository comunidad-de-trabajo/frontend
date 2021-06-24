import api from '../envio-mails-mailjet/api';

export const crearNuevoRegistro = async (data, imagen) => {
  const body = new FormData();
  body.append('imagen', imagen);
  for (var key in data) {
    body.append(key, data[key]);
  }
  await api.post('api/registro', body);
};
