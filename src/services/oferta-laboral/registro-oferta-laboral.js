import api from '../envio-mails-mailjet/api';

export const crearOfertaLaboral = async (nuevaOferta) => {
  return await api.post('api/oferta/crear', {
    nuevaOferta,
    token: localStorage.getItem('token'),
  });
};

export const actualizarOferta = async (id, data) => {
  console.log(data);
  return await api.patch(`api/oferta/${id}`, {
    data,
  });
};

/*
---------------------------
al terminar una tarea
---------------------------
Me paro arriba de dev
- git checkout dev
- git pull
- git checkout <mi-tarea>
- git rebase dev
- git push -f

Integro mi trabajo a dev
- git checkout dev
- git merge <mi-tarea>
- git push
  OJO
  este push no puede ser 
  jamás de los jamases
  -f
 */
