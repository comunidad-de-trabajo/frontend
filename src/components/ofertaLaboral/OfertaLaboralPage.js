import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, withStyles, Button } from '@material-ui/core';
import { DatosOferta } from './DatosOferta';
import { RequisitosOferta } from './RequisitosOferta';
import { CondicionesOferta } from './CondicionesOferta';
import { ResponsableBusquedaOferta } from './ResponsableBusquedaOferta';
import { DefaultValue, useRecoilState, useRecoilValue } from 'recoil';
import {
  condicionesOfertaState,
  datosOfertaLaboralState,
  requisitosOfertaState,
  responsableOfertaState,
} from '../../recoil/oferta-laboral';
import { crearOfertaLaboral } from '../../services/oferta-laboral/registro-oferta-laboral';
import Loading from '../common/Loading';
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';
import { userState } from '../../recoil/user';

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
  const [user] = useRecoilState(userState);
  const [datosOfertaLaboral, setDatosOfertaLaboral] = useRecoilState(
    datosOfertaLaboralState
  );
  const [requisitosOfertaLaboral, setRequisitosOfertaLaboral] = useRecoilState(
    requisitosOfertaState
  );
  const [
    condicionesOfertaLaboral,
    setCondicionesOfertaLaboral,
  ] = useRecoilState(condicionesOfertaState);
  const [
    responsableOfertaLaboral,
    setResponsableOfertaLaboral,
  ] = useRecoilState(responsableOfertaState);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const userRecoilState = useRecoilValue(userState);

  const resetValues = () => {
    setDatosOfertaLaboral(new DefaultValue());
    setRequisitosOfertaLaboral(new DefaultValue());
    setCondicionesOfertaLaboral(new DefaultValue());
    setResponsableOfertaLaboral(new DefaultValue());
  };

  const handlePublicar = async () => {
    /* agregando al userEmail el email que se logeo de userState(recoil)*/
    setDatosOfertaLaboral({
      ...datosOfertaLaboral,
      userEmail: user.email,
    });

    let nuevaOferta = {
      ...datosOfertaLaboral,
      ...requisitosOfertaLaboral,
      ...condicionesOfertaLaboral,
      ...responsableOfertaLaboral,
    };
    try {
      setLoading(true);
      await crearOfertaLaboral(nuevaOferta);
      setOpenAlert(true);
      resetValues();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        {!loading && (
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
        )}
        {loading && <Loading />}
        <AlertaOperacionTerminada
          tipo="success"
          open={openAlert}
          setOpen={setOpenAlert}
          mensaje="La oferta laboral se publió con éxito"
        />
      </main>

      <GlobalCss />
    </>
  );
}
