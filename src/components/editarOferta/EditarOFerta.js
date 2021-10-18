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
import { useRecoilState } from 'recoil';
import {
  idOferta,
  editarCondicionesOferta,
  editarDatosOfertaLaboral,
  editarRequisitosOferta,
  editarResponsableOferta,
} from '../../recoil/editarOferta';
import { AppRoutes } from '../../routes/AppRoutes';
import { useHistory } from 'react-router';
/*
import { completeFormPublicarOfertaValidation } from '../../helpers/validation';
import {
  editarCondicionesOfertaValidacionState,
  editarDatosOfertaLaboralValidacionState,
  editarRequisitosOfertaValidacionState,
  editarResponsableOfertaValidacionState,
} from '../../recoil/editarOfertaValidation';
*/
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';
import { actualizarOferta } from '../../services/oferta-laboral/registro-oferta-laboral';
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

export default function EditarOferta({ routes }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [ofertaId] = useRecoilState(idOferta);
  let history = useHistory();
  /*
  const datosOfertaValidacion = useRecoilValue(
    editarDatosOfertaLaboralValidacionState
  );
  const requisitosOfertaValidacion = useRecoilValue(
    editarRequisitosOfertaValidacionState
  );
  const condicionesOfertaValidacion = useRecoilValue(
    editarCondicionesOfertaValidacionState
  );
  const responsableOfertaValidacion = useRecoilValue(
    editarResponsableOfertaValidacionState
  );
  */
  const [datosOfertaLaboral] = useRecoilState(editarDatosOfertaLaboral);
  const [requisitosOfertaLaboral] = useRecoilState(editarRequisitosOferta);
  const [condicionesOfertaLaboral] = useRecoilState(editarCondicionesOferta);
  const [responsableOfertaLaboral] = useRecoilState(editarResponsableOferta);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [datosAlerta, setDatosAlerta] = useState({
    severity: '',
    mensaje: '',
  });

  useEffect(() => {
    history.push(`/editarOferta/${activeStep}`);
  }, [history, activeStep]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    /*
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
    */
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  /*
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
  */
  const handleUpdate = async () => {
    let data = {
      ...datosOfertaLaboral,
      ...requisitosOfertaLaboral,
      ...condicionesOfertaLaboral,
      ...responsableOfertaLaboral,
    };
    try {
      setLoading(true);
      await actualizarOferta(ofertaId.id, data);
      setDatosAlerta({
        severity: 'success',
        mensaje: 'la oferta laboral se actualizo con éxito',
      });
      setOpenAlert(true);
      /*resetValues();*/
      setTimeout(() => {
        history.push('/listadoOfertasUsuario');
      }, 2000);
    } catch (e) {
      setDatosAlerta({
        severity: 'error',
        mensaje:
          'Lo sentimos, no pudimos actualizar la oferta. Intentalo mas tarde.',
      });
      setOpenAlert(true);
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
            Editar oferta laboral
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
              <React.Fragment></React.Fragment>
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
                      onClick={handleUpdate}
                      className={classes.button}
                    >
                      Guardar
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

EditarOferta.propTypes = {
  step: PropTypes.number,
  routes: PropTypes.array,
};
