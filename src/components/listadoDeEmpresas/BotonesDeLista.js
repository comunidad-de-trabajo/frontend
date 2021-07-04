import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ModalEmpresas from './ModalEmpresas';
import propTypes from 'prop-types';
import ModalConfirmarAccion from '../modales/modalConfirmarAccion/ModalConfirmarAccion';

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
      'Aceptar empresa',
      'Una vez aceptada la empresa, esta accion no podra ser revocada.'
    );
  };

  const handleClickRechazar = () => {
    abrirModalConfirmacion(
      empresa,
      'rechazar',
      'Rechazar empresa',
      'Una vez rechazada la empresa, esta quedara en la lista de empresas rechazadas para una posterior revision.'
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
          Aceptar
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
          Rechazar
        </Button>
      )}
      <ModalEmpresas
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
