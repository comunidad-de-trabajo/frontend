import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import propTypes from 'prop-types';
import { envioMailsIndividual } from '../../services/envio-mails-mailjet/envio-mails.services';

const ModalConfirmarAccion = (props) => {
  const { titulo, mensaje } = props;
  const { open, setOpen } = props;
  const { setOpenAlert } = props;

  const handleClose = async () => {
    try {
      await envioMailsIndividual({
        emailTo: 'magaliantonella.gaiani@gmail.com',
        aceptado: true,
        textPart: 'For xxxx this test email',
      });
      setOpenAlert(true);
    } catch (error) {
      console.log(error);
    } finally {
      setOpen(false);
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
  titulo: propTypes.string,
  mensaje: propTypes.string,
  open: propTypes.bool,
  setOpen: propTypes.func,
  setOpenAlert: propTypes.func,
};

export default ModalConfirmarAccion;
