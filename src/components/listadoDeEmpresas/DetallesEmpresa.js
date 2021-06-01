import React from 'react';
import propTypes from 'prop-types';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    padding: '1em 2em',
  },
  logo: {
    height: '7em',
    width: '7em',
    objectFit: 'contain',
    margin: '0.2em 1em 1em 0',
  },
  datoEmpresa: {
    fontSize: '1.1em',
    margin: '0.3em 0',
  },
  titulo: {
    fontSize: '1.3em',
    margin: '0.3em 0',
    fontWeight: '600',
  },
}));

export default function DetallesEmpresa({ empresa }) {
  const classes = useStyles();

  return (
    <div>
      <Divider />
      <Grid container className={classes.container}>
        <Grid container sm={9}>
          <Grid item xs={12} sm={9}>
            <Typography className={classes.datoEmpresa}>
              <b>Razon social:</b>
              {empresa.razonSocial}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography className={classes.datoEmpresa}>
              <b>CUIT:</b> {empresa.cuit}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography className={classes.datoEmpresa}>
              <b>Localidad:</b> {empresa.localidad}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography className={classes.datoEmpresa}>
              <b>Provincia:</b> {empresa.provincia}
            </Typography>
          </Grid>
        </Grid>
        <Grid item sm={3}>
          <img
            src={empresa.logo}
            alt={`logo ${empresa.nombre}`}
            className={classes.logo}
          ></img>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Descripcion:</b> {empresa.descripcion}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Sitio web:</b> {empresa.sitioWeb}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Tipo de empresa:</b> {empresa.tipoEmpresa}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.titulo}>
            Datos del representante:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Nombre:</b> {empresa.datosRepr.nombre}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Apellido:</b> {empresa.datosRepr.apellido}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Cargo/Rol:</b> {empresa.datosRepr.cargo}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Email:</b> {empresa.datosRepr.email}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Telefono:</b> {empresa.datosRepr.telefono}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

DetallesEmpresa.propTypes = {
  empresa: propTypes.object,
};
