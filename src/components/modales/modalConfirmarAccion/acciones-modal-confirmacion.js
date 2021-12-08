import { envioMailsIndividual } from '../../../services/envio-mails-mailjet/envio-mails.services';
import { cambiarEstadoEmpresa } from '../../../services/listado-empresas/acciones-listado-empresas';

const aceptarEmpresa = async (
  setOpenAlert,
  setOpen,
  idEmpresa,
  nombreComercial,
  email,
  render
) => {
  try {
    await envioMailsIndividual({
      emailTo: email,
      aceptado: true,
      textPart: `For ${nombreComercial} this test email`,
    });

    await cambiarEstadoEmpresa('aceptada', idEmpresa);
    await setOpenAlert(true);

    await render();
  } catch (error) {
    console.log(error);
  } finally {
    setOpen(false);
  }
};

const rechazarEmpresa = async (
  setOpenAlert,
  setOpen,
  idEmpresa,
  nombreComercial,
  email,
  render
) => {
  try {
    await envioMailsIndividual({
      emailTo: email,
      aceptado: false,
      textPart: `For ${nombreComercial} this test email`,
    });

    await cambiarEstadoEmpresa('rechazada', idEmpresa);
    await setOpenAlert(true);

    await render();
  } catch (error) {
    console.log(error);
  } finally {
    setOpen(false);
  }
};

const acciones = {
  aceptar: aceptarEmpresa,
  rechazar: rechazarEmpresa,
};

export const getAccionesModalConfirmacion = () => {
  return acciones;
};
