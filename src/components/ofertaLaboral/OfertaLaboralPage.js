import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, withStyles, Button } from '@material-ui/core';
import { DatosOferta } from './DatosOferta';
import { RequisitosOferta } from './RequisitosOferta';
import { CondicionesOferta } from './CondicionesOferta';
import { ResponsableBusquedaOferta } from './ResponsableBusquedaOferta';
import { useRecoilValue } from 'recoil';
import {
  condicionesOfertaState,
  datosOfertaLaboralState,
  requisitosOfertaState,
  responsableOfertaState,
} from '../../recoil/oferta-laboral';
import { crearOfertaLaboral } from '../../services/oferta-laboral/registro-oferta-laboral';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  button: {
    marginTop: '15px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mt15: {
    marginTop: '15px',
  },
}));

const GlobalCss = withStyles({
  '@global': {
    '.MuiFilledInput-underline:before': {
      borderBottom: 'none',
      content: 'none',
    },
    '.MuiInputBase-root': {
      fontSize: '0.8rem',
    },
  },
})(() => null);

export function OfertaLaboralPage() {
  const classes = useStyles();

  const datosOfertaLaboral = useRecoilValue(datosOfertaLaboralState);
  const requisitosOfertaLaboral = useRecoilValue(requisitosOfertaState);
  const condicionesOfertaLaboral = useRecoilValue(condicionesOfertaState);
  const responsableOfertaLaboral = useRecoilValue(responsableOfertaState);

  console.log(datosOfertaLaboral);

  const handlePublicar = async () => {
    let objectNuevaOferta = {
      ...datosOfertaLaboral,
      ...requisitosOfertaLaboral,
      ...condicionesOfertaLaboral,
      ...responsableOfertaLaboral,
    };
    console.log(objectNuevaOferta);
    try {
      await crearOfertaLaboral(objectNuevaOferta);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5" align="center">
            Publicar oferta laboral
          </Typography>
          <Grid
            container
            spacing={3}
            justify="center"
            alignItems="center"
            className={classes.mt15}
          >
            <DatosOferta />

            <RequisitosOferta />

            <CondicionesOferta />

            <ResponsableBusquedaOferta />

            <Grid item xs={12} align="center" className={classes.mt15}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handlePublicar}
              >
                Publicar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </main>
      <GlobalCss />
    </>
  );
}
