import { envioMailsIndividual } from '../../../services/envio-mails-mailjet/envio-mails.services';
import { cambiarEstadoEmpresa } from '../../../services/listado-empresas/acciones-listado-empresas';

const aceptarEmpresa = async (setOpenAlert, setOpen, idEmpresa, render) => {
  try {
    await envioMailsIndividual({
      emailTo: 'magaliantonella.gaiani@gmail.com',
      aceptado: true,
      textPart: 'For xxxx this test email',
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

const rechazarEmpresa = async (setOpenAlert, setOpen, idEmpresa, render) => {
  try {
    await envioMailsIndividual({
      emailTo: 'magaliantonella.gaiani@gmail.com',
      aceptado: true,
      textPart: 'For xxxx this test email',
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
