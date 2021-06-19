import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { AppRoutes } from '../../routes/AppRoutes';
import { useHistory } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  tipoEmpresaFormState,
  datosRepresentanteFormState,
  datosEmpresaFormState,
} from '../../recoil/registro-empresa-atoms';
import { crearNuevoRegistro } from '../../services/registroDeEmpresas/registro-empresa-endpoint';

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
  'Datos de la empresa',
  'Tipo de empresa',
  'Datos del representante',
];

export default function RegistroEmpresa({ routes }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const history = useHistory();

  const datosEmpresa = useRecoilValue(datosEmpresaFormState);
  const tipoEmpresa = useRecoilValue(tipoEmpresaFormState);
  const datosRepresentante = useRecoilValue(datosRepresentanteFormState);

  const handleEnviar = async () => {
    let registroList = {
      ...datosEmpresa,
      ...tipoEmpresa,
      ...datosRepresentante,
    };
    try {
      await crearNuevoRegistro(registroList);
    } catch (e) {
      console.log(e);
    } finally {
      setActiveStep(activeStep + 1);
    }
  };

  useEffect(() => {
    history.push(`/registroDeEmpresa/${activeStep}`);
  }, [history, activeStep]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Registro
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por registrarte.
                </Typography>
                <Typography variant="subtitle1">
                  El registro se ha realizado corectamente. Pero tu empresa esta
                  pendiente de verificacion. Te enviaremos un mail para
                  comunicarte el resultado.
                  <br />
                  Cualquier duda o consulta puede ponerse en contacto a traves
                  de la siguiente casilla de correo electrónico:{' '}
                  <b>comunidad@unahur.edu.ar</b>
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
                  {activeStep < 2 && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Siguiente
                    </Button>
                  )}
                  {activeStep == 2 && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleEnviar}
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
      </main>
    </React.Fragment>
  );
}

RegistroEmpresa.propTypes = {
  step: PropTypes.number,
  routes: PropTypes.array,
};
