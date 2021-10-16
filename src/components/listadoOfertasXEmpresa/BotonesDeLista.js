import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ModalOFerta from './ModalOFerta';
import propTypes from 'prop-types';
import ModalConfirmarAccion from './modalConfirmarAccion/ModalConfirmarAccion';

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
  const { ver, aceptar, rechazar, empresa } = props;
  const [openModalEmpresa, setOpenModalEmpresa] = useState(false);
  const [openModalConfirmacion, setOpenModalConfirmacion] = useState(false);
  const [datosModalConfirmacion, setDatosModalConfirmacion] = useState({
    accion: '',
    tituloModalConfirmacion: '',
    mensajeModalConfirmacion: '',
  });
  const {
    accion,
    tituloModalConfirmacion,
    mensajeModalConfirmacion,
  } = datosModalConfirmacion;
  const { setOpenAlert } = props;
  const { render } = props;

  const handleClickOpen = () => {
    setOpenModalEmpresa(true);
  };

  const handleClickAceptar = () => {
    abrirModalConfirmacion(
      empresa,
      'aceptar',
      'Editar oferta',
      'Seguro que quiere editar esta oferta?'
    );
  };

  const handleClickRechazar = () => {
    abrirModalConfirmacion(
      empresa,
      'rechazar',
      'Dar Baja',
      'Una vez dado de baja la oferta se eliminara, esta seguro?'
    );
  };

  const abrirModalConfirmacion = (empresa, accion, titulo, mensaje) => {
    setDatosModalConfirmacion({
      accion: accion,
      tituloModalConfirmacion: titulo,
      mensajeModalConfirmacion: mensaje,
    });
    setOpenModalConfirmacion(true);
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
          onClick={handleClickAceptar}
        >
          Editar
        </Button>
      )}
      {rechazar && (
        <Button
          edge="end"
          aria-label="ver"
          className={`${classes.botonRechazar} ${classes.boton}`}
          size="small"
          onClick={handleClickRechazar}
        >
          Dar baja
        </Button>
      )}
      <ModalOFerta
        open={openModalEmpresa}
        setOpen={setOpenModalEmpresa}
        empresa={empresa}
      />
      <ModalConfirmarAccion
        empresa={empresa}
        accion={accion}
        titulo={tituloModalConfirmacion}
        mensaje={mensajeModalConfirmacion}
        open={openModalConfirmacion}
        setOpen={setOpenModalConfirmacion}
        setOpenAlert={setOpenAlert}
        render={render}
      />
    </div>
  );
};

BotonesDeLista.propTypes = {
  ver: propTypes.bool,
  aceptar: propTypes.bool,
  rechazar: propTypes.bool,
  empresa: propTypes.object,
  setOpenAlert: propTypes.func,
  render: propTypes.func,
};

export default BotonesDeLista;
