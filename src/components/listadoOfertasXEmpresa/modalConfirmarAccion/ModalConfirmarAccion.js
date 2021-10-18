import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import propTypes from 'prop-types';
import { getAccionesModalConfirmacion } from './acciones-modal-confirmacion';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import {
  idOferta,
  editarCondicionesOferta,
  editarDatosOfertaLaboral,
  editarRequisitosOferta,
  editarResponsableOferta,
} from '../../../recoil/editarOferta';

const ModalConfirmarAccion = (props) => {
  const { titulo, mensaje, accion, oferta } = props;
  const { open, setOpen } = props;
  const { setOpenAlert } = props;
  const { render } = props;
  let history = useHistory();
  const [ofertaId, setOfertaId] = useRecoilState(idOferta);
  const [datosOfertaLaboral, setDatosOfertaLaboral] = useRecoilState(
    editarDatosOfertaLaboral
  );
  const [requisitosOfertaLaboral, setRequisitosOfertaLaboral] = useRecoilState(
    editarRequisitosOferta
  );
  const [
    condicionesOfertaLaboral,
    setCondicionesOfertaLaboral,
  ] = useRecoilState(editarCondicionesOferta);
  const [
    responsableOfertaLaboral,
    setResponsableOfertaLaboral,
  ] = useRecoilState(editarResponsableOferta);

  const handleClose = () => {
    let acciones = getAccionesModalConfirmacion();
    if (accion === 'editar') {
      acciones.aceptar(setOpenAlert, setOpen, render);
      setOfertaId({
        ...ofertaId,
        id: oferta.id,
      });
      setDatosOfertaLaboral({
        ...datosOfertaLaboral,
        fechaVigencia: oferta.fechaVigencia,
        tituloBusqueda: oferta.tituloBusqueda,
        descripcionEmpresa: oferta.descripcionEmpresa,
        mision: oferta.mision,
        responsabilidades: oferta.responsabilidades,
      });
      setRequisitosOfertaLaboral({
        ...requisitosOfertaLaboral,
        secundarioCompleto: oferta.secundarioCompleto,
        paqueteOffice: oferta.paqueteOffice,
        licenciaConducir: oferta.licenciaConducir,
        edad: oferta.edad,
        desdeEdad: oferta.desdeEdad,
        hastaEdad: oferta.hastaEdad,
        experienciaPrevia: oferta.experienciaPrevia,
        experienciaPreviaDescription: oferta.experienciaPreviaDescription,
        residencia: oferta.residencia,
        areasEstudio: oferta.areasEstudio,
        competencias: oferta.competencias,
        otrosDetalles: oferta.otrosDetalles,
      });
      setCondicionesOfertaLaboral({
        ...condicionesOfertaLaboral,
        jornada: oferta.jornada,
        contrato: oferta.contrato,
        lugarTrabajo: oferta.lugarTrabajo,
        ofrecen: oferta.ofrecen,
      });
      setResponsableOfertaLaboral({
        ...responsableOfertaLaboral,
        nombreCompletoRepresentante: oferta.nombreCompletoRepresentante,
        emailRepresentante: oferta.emailRepresentante,
        detalles: oferta.detalles,
        otrasAclaraciones: oferta.otrasAclaraciones,
      });
      history.push('/editarOferta');
    } else if (accion === 'darBaja') {
      acciones.rechazar(setOpenAlert, setOpen, oferta.id, render);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{titulo}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {mensaje}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false);
            }}
            color="primary"
          >
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ModalConfirmarAccion.propTypes = {
  oferta: propTypes.object,
  accion: propTypes.string,
  titulo: propTypes.string,
  mensaje: propTypes.string,
  open: propTypes.bool,
  setOpen: propTypes.func,
  setOpenAlert: propTypes.func,
  render: propTypes.func,
};

export default ModalConfirmarAccion;
