import api from '../envio-mails-mailjet/api';

export async function fetchListadoOfertas() {
  /*en realidad no se filtra nada es solo para que el if del backend me lo tome*/
  const response = await api.get('api/oferta/listar?usuario=hola', {
    token: localStorage.getItem('token'),
  });
  return response.data;
}

export const eliminarOferta = async (id) => {
  return await api.delete(`api/oferta/${id}`);
};
