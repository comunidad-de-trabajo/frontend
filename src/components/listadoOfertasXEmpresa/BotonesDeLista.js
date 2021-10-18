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
  botonEditar: {
    backgroundColor: '#7faddd',
    '&:hover': {
      backgroundColor: '#809fbf',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
  botonDarBaja: {
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
  const { ver, editar, darBaja, oferta } = props;
  const [openModalOferta, setOpenModalOferta] = useState(false);
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
    setOpenModalOferta(true);
  };

  const handleClickEditar = () => {
    abrirModalConfirmacion(
      oferta,
      'editar',
      'Editar oferta',
      'Seguro que quiere editar esta oferta?'
    );
  };

  const handleClickDarBaja = () => {
    abrirModalConfirmacion(
      oferta,
      'darBaja',
      'Dar Baja',
      'Una vez dado de baja la oferta se eliminara, esta seguro?'
    );
  };

  const abrirModalConfirmacion = (oferta, accion, titulo, mensaje) => {
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
      {editar && (
        <Button
          edge="end"
          aria-label="ver"
          className={`${classes.botonEditar} ${classes.boton}`}
          size="small"
          onClick={handleClickEditar}
        >
          Editar
        </Button>
      )}
      {darBaja && (
        <Button
          edge="end"
          aria-label="ver"
          className={`${classes.botonDarBaja} ${classes.boton}`}
          size="small"
          onClick={handleClickDarBaja}
        >
          Dar baja
        </Button>
      )}
      <ModalOFerta
        open={openModalOferta}
        setOpen={setOpenModalOferta}
        empresa={oferta}
      />
      <ModalConfirmarAccion
        oferta={oferta}
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
  editar: propTypes.bool,
  darBaja: propTypes.bool,
  oferta: propTypes.object,
  setOpenAlert: propTypes.func,
  render: propTypes.func,
};

export default BotonesDeLista;
