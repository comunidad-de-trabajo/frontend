import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ModalEmpresas from './ModalEmpresas';
import propTypes from 'prop-types';
import ModalConfirmarAccion from '../modales/ModalConfirmarAccion';

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
    titulo: '',
    mensaje: '',
  });
  const { titulo, mensaje } = datosModalConfirmacion;

  const handleClickOpen = () => {
    setOpenModalEmpresa(true);
  };

  const handleClickAceptar = () => {
    setDatosModalConfirmacion({
      titulo: 'Aceptar empresa',
      mensaje:
        'Una vez aceptada la empresa, esta accion no podra ser revocada.',
    });
    setOpenModalConfirmacion(true);
  };

  const handleClickRechazar = () => {
    setDatosModalConfirmacion({
      titulo: 'Rechazar empresa',
      mensaje:
        'Una vez rechazada la empresa, esta quedara en la lista de empresas rechazadas para una posterior revision.',
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
        titulo={titulo}
        mensaje={mensaje}
        open={openModalConfirmacion}
        setOpen={setOpenModalConfirmacion}
      />
    </div>
  );
};

BotonesDeLista.propTypes = {
  ver: propTypes.bool,
  aceptar: propTypes.bool,
  rechazar: propTypes.bool,
  empresa: propTypes.object,
};

export default BotonesDeLista;
