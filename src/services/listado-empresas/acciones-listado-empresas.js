import api from '../envio-mails-mailjet/api';

export const cambiarEstadoEmpresa = async (estado, id) => {
  return api.patch(
    'api/registro/updateEstado',
    {
      estado: estado,
    },
    {
      params: {
        id: id,
      },
    }
  );
};
