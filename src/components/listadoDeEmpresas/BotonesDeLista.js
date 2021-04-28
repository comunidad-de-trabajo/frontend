import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import ModalEmpresas from './ModalEmpresas';
import propTypes from 'prop-types';

const useStyles = makeStyles({
  boton: {
    margin: '0 2px 0 2px',
    borderRadius: '10%',
  },
  botonVer: {
    backgroundColor: '#FFD646',
    '&:hover': {
      backgroundColor: '#e8c23c',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
  botonAceptar: {
    backgroundColor: '#8ce075',
    '&:hover': {
      backgroundColor: '#69ab57',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
  botonRechazar: {
    backgroundColor: '#ff4747',
    '&:hover': {
      backgroundColor: '#bd3535',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
});

const BotonesDeLista = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { ver, aceptar, rechazar } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {ver && (
        <Button
          edge="end"
          aria-label="ver"
          className={`${classes.botonVer} ${classes.boton}`}
          size="small"
          onClick={handleClickOpen}
        >
          Ver
        </Button>
      )}
      {aceptar && (
        <Button
          edge="end"
          aria-label="ver"
          className={`${classes.botonAceptar} ${classes.boton}`}
          size="small"
        >
          Aceptar
        </Button>
      )}
      {rechazar && (
        <Button
          edge="end"
          aria-label="ver"
          className={`${classes.botonRechazar} ${classes.boton}`}
          size="small"
        >
          Rechazar
        </Button>
      )}
      <ModalEmpresas open={open} setOpen={setOpen} />
    </div>
  );
};

BotonesDeLista.propTypes = {
  ver: propTypes.bool,
  aceptar: propTypes.bool,
  rechazar: propTypes.bool,
};

export default BotonesDeLista;
