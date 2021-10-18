import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Ofertas from './Ofertas';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titulo: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  subtitulo: {
    marginLeft: theme.spacing(2),
  },
  filtro: {
    marginRight: theme.spacing(2),
  },
}));

const ListadoDeOferta = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid item xs={8} sm={10}>
          <Typography variant="h6" className={classes.subtitulo}>
            Ofertas Laborales
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Ofertas />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ListadoDeOferta;
