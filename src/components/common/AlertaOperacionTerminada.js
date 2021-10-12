import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import propTypes from 'prop-types';

const AlertaOperacionTerminada = (props) => {
  const { tipo, mensaje, open, setOpen } = props;

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert onClose={handleCloseSnackbar} severity={tipo}>
        {mensaje}
      </Alert>
    </Snackbar>
  );
};

AlertaOperacionTerminada.propTypes = {
  tipo: propTypes.string,
  mensaje: propTypes.string,
  open: propTypes.bool,
  setOpen: propTypes.func,
};

AlertaOperacionTerminada.defaultProps = {
  mensaje: 'Operacion terminada con exito.',
};

export default AlertaOperacionTerminada;
