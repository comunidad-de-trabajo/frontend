import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import propTypes from 'prop-types';
import { getAccionesModalConfirmacion } from './acciones-modal-confirmacion';

const ModalConfirmarAccion = (props) => {
  const {
    titulo,
    mensaje,
    accion,
    empresa: { id, nombreComercial, email },
  } = props;
  const { open, setOpen } = props;
  const { setOpenAlert } = props;
  const { render } = props;

  const handleClose = () => {
    let acciones = getAccionesModalConfirmacion();
    if (accion === 'aceptar') {
      acciones.aceptar(
        setOpenAlert,
        setOpen,
        id,
        nombreComercial,
        email,
        render
      );
    } else if (accion === 'rechazar') {
      acciones.rechazar(
        setOpenAlert,
        setOpen,
        id,
        nombreComercial,
        email,
        render
      );
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
  empresa: propTypes.shape({
    id: propTypes.number,
    nombreComercial: propTypes.string,
    email: propTypes.string,
  }),
  accion: propTypes.string,
  titulo: propTypes.string,
  mensaje: propTypes.string,
  open: propTypes.bool,
  setOpen: propTypes.func,
  setOpenAlert: propTypes.func,
  render: propTypes.func,
};

export default ModalConfirmarAccion;
