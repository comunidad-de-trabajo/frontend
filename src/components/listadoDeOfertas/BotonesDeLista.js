import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ModalEmpresas from './ModalEmpresas';
import propTypes from 'prop-types';
import ModalConfirmarAccion from '../modales/modalConfirmarAccion/ModalConfirmarAccion';
import { useHistory } from 'react-router';

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
  const { ver, darDeBaja, id } = props;
  const { setOpenAlert } = props;
  const { render } = props;
  let history = useHistory();

  const handleClickBaja = () => {
    console.log('baja');
  };

  return (
    <div>
      {ver && (
        <Button
          edge="end"
          aria-label="ver"
          className={`${classes.botonVer} ${classes.boton}`}
          size="small"
          onClick={() => {
            history.push(`/detalleOferta/${id}`);
          }}
        >
          Ver
        </Button>
      )}
      {darDeBaja && (
        <Button
          edge="end"
          aria-label="ver"
          className={`${classes.botonRechazar} ${classes.boton}`}
          size="small"
          onClick={handleClickBaja}
        >
          Dar de baja
        </Button>
      )}
    </div>
  );
};

BotonesDeLista.propTypes = {
  ver: propTypes.bool,
  darDeBaja: propTypes.bool,
  id: propTypes.number,
  setOpenAlert: propTypes.func,
  render: propTypes.func,
};

export default BotonesDeLista;
