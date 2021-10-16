import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { DefaultValue, useRecoilState, useRecoilValue } from 'recoil';
import {
  condicionesOfertaState,
  datosOfertaLaboralState,
  requisitosOfertaState,
  responsableOfertaState,
} from '../../recoil/oferta-laboral';
import { AppRoutes } from '../../routes/AppRoutes';
import { useHistory } from 'react-router';
import { completeFormPublicarOfertaValidation } from '../../helpers/validation';
import {
  condicionesOfertaValidacionState,
  datosOfertaLaboralValidacionState,
  requisitosOfertaValidacionState,
  responsableOfertaValidacionState,
} from '../../recoil/oferta-laboral-validation-atoms';
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';
import { crearOfertaLaboral } from '../../services/oferta-laboral/registro-oferta-laboral';
import Loading from '../common/Loading';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
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
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = [
  'Datos de la oferta',
  'Requisitos',
  'Condiciones',
  'Responsable de la busqueda',
];

export default function OfertaLaboral({ routes }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  let history = useHistory();
  const datosOfertaValidacion = useRecoilValue(
    datosOfertaLaboralValidacionState
  );
  const requisitosOfertaValidacion = useRecoilValue(
    requisitosOfertaValidacionState
  );
  const condicionesOfertaValidacion = useRecoilValue(
    condicionesOfertaValidacionState
  );
  const responsableOfertaValidacion = useRecoilValue(
    responsableOfertaValidacionState
  );
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
  const [datosAlerta, setDatosAlerta] = useState({
    severity: '',
    mensaje: '',
  });

  useEffect(() => {
    history.push(`/ofertaLaboral/${activeStep}`);
  }, [history, activeStep]);

  const handleNext = () => {
    if (validarStep(activeStep)) {
      setActiveStep(activeStep + 1);
      return;
    }
    setDatosAlerta({
      severity: 'warning',
      mensaje: 'Algunos campos estan incorrectos, o faltantes!',
    });
    setOpenAlert(true);
    return;
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const validarStep = (step) => {
    let validaciones = {
      0: completeFormPublicarOfertaValidation(
        datosOfertaValidacion,
        datosOfertaLaboral,
        step
      ),
      1: completeFormPublicarOfertaValidation(
        requisitosOfertaValidacion,
        requisitosOfertaLaboral,
        step
      ),
      2: completeFormPublicarOfertaValidation(
        condicionesOfertaValidacion,
        condicionesOfertaLaboral,
        step
      ),
      3: completeFormPublicarOfertaValidation(
        responsableOfertaValidacion,
        responsableOfertaLaboral,
        step
      ),
    };
    return validaciones[step];
  };

  const resetValues = () => {
    setDatosOfertaLaboral(new DefaultValue());
    setRequisitosOfertaLaboral(new DefaultValue());
    setCondicionesOfertaLaboral(new DefaultValue());
    setResponsableOfertaLaboral(new DefaultValue());
  };

  const handlePublicar = async () => {
    if (!validarStep(activeStep)) {
      setDatosAlerta({
        severity: 'warning',
        mensaje: 'Algunos campos estan incorrectos, o faltantes!',
      });
      setOpenAlert(true);
      return;
    }
    let nuevaOferta = {
      ...datosOfertaLaboral,
      ...requisitosOfertaLaboral,
      ...condicionesOfertaLaboral,
      ...responsableOfertaLaboral,
    };
    try {
      setLoading(true);
      await crearOfertaLaboral(nuevaOferta);
      setDatosAlerta({
        severity: 'success',
        mensaje: 'La oferta laboral se publicó con éxito',
      });
      setOpenAlert(true);
      resetValues();
      setActiveStep(activeStep + 1);
      setTimeout(() => {
        history.push('/');
      }, 4000);
    } catch (e) {
      setDatosAlerta({
        severity: 'error',
        mensaje:
          'Lo sentimos, no pudimos registrar la oferta. Intentalo mas tarde.',
      });
      setOpenAlert(true);
      setTimeout(() => {
        history.push('/');
      }, 1000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Publicar oferta laboral
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por tu tiempo.
                </Typography>
                <Typography variant="subtitle1">
                  Tu oferta laboral ha sido publicada con exito, posteriormente
                  la misma sera enviada a los alumnos que tengan un perfil
                  compatible para que estos se postulen.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <AppRoutes routes={routes} />
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Atras
                    </Button>
                  )}
                  {activeStep < 3 && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Siguiente
                    </Button>
                  )}
                  {activeStep == 3 && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handlePublicar}
                      className={classes.button}
                    >
                      Enviar
                    </Button>
                  )}
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <AlertaOperacionTerminada
          tipo={datosAlerta.severity}
          mensaje={datosAlerta.mensaje}
          open={openAlert}
          setOpen={setOpenAlert}
        />
      </main>
      {loading && <Loading />}
    </React.Fragment>
  );
}

OfertaLaboral.propTypes = {
  step: PropTypes.number,
  routes: PropTypes.array,
};
