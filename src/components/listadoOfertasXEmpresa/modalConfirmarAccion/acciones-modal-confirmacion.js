import { eliminarOferta } from '../../../services/listadoDeOfertas/endpointListadoOfertaXEmpresa';

const editarOferta = async (setOpenAlert, setOpen, render) => {
  try {
    await setOpenAlert(true);
    await render();
  } catch (error) {
    console.log(error);
  } finally {
    setOpen(false);
  }
};

const darBajaOferta = async (setOpenAlert, setOpen, idEmpresa, render) => {
  try {
    await eliminarOferta(idEmpresa);
    await setOpenAlert(true);

    await render();
  } catch (error) {
    console.log(error);
  } finally {
    setOpen(false);
  }
};

const acciones = {
  aceptar: editarOferta,
  rechazar: darBajaOferta,
};

export const getAccionesModalConfirmacion = () => {
  return acciones;
};
