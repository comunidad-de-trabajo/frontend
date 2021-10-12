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
          <Grid item xs={12} sm={12}>
            <Typography className={classes.titulo}>Datos de Oferta</Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography className={classes.datoEmpresa}>
              <b>Fecha Vigencia:</b>
              {empresa.fechaVigencia}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography className={classes.datoEmpresa}>
              <b>Descripcion empresa:</b> {empresa.descripcionEmpresa}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography className={classes.datoEmpresa}>
              <b>Mision:</b> {empresa.mision}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Responsabilidades:</b> {empresa.responsabilidades}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.titulo}>Requisitos</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Secundario Completo:</b> {empresa.secundarioCompleto}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Office:</b> {empresa.paqueteOffice}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Licencia Conducir:</b> {empresa.licenciaConducir}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Edad :</b> {empresa.edad}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Desde Edad:</b> {empresa.desdeEdad}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Hasta edad:</b> {empresa.hastaEdad}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Experiencia previa:</b> {empresa.experienciaPrevia}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Descripcion Exp:</b> {empresa.experienciaPreviaDescription}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Residencia:</b> {empresa.residencia}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography className={classes.datoEmpresa}>
            <b>Area de Estudio:</b> {empresa.areasEstudio}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography className={classes.datoEmpresa}>
            <b>competencias:</b> {empresa.competencias}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Otro detalle:</b> {empresa.otrosDetalles}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.titulo}>Condiciones</Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Jornada:</b> {empresa.jornada}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography className={classes.datoEmpresa}>
            <b>Contrato:</b> {empresa.contrato}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Lugar Trabajo:</b> {empresa.lugarTrabajo}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Ofrecen:</b> {empresa.ofrecen}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.titulo}>
            Datos Representante
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Nombre y Apellido:</b> {empresa.nombreCompletoRepresentante}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Email representante:</b> {empresa.emailRepresentante}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Detalle:</b> {empresa.detalles}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography className={classes.datoEmpresa}>
            <b>Otra aclaracion:</b> {empresa.otrasAclaraciones}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

DetallesEmpresa.propTypes = {
  empresa: propTypes.object,
};
