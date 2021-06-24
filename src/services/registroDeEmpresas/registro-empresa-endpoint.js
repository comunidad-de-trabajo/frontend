import api from '../envio-mails-mailjet/api';

export const crearNuevoRegistro = async (data, imagen) => {
  console.log(imagen);
  const body = new FormData();
  body.append('image', imagen);
  for (var key in data) {
    body.append(key, data[key]);
  }
  await api.post('api/registro', body);
};
