import React, { useState } from 'react';
import { recuperarContraseniaService } from '../../services/auth/recuperarContrasenia';
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';
import { useHistory } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logoComunidadDeTrabajo from '../../assets/logoComunidadDeTrabajo.svg';
import { datosRecuperarContraseniaValidation } from './validation/validationByField';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: '10px',
  },
  container: {
    marginTop: theme.spacing(6),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      width: '100%',
      height: '100%',
    },
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  link: {
    marginTop: theme.spacing(2),
  },
}));

export const RecuperarContrasenia = () => {
  const history = useHistory();
  const classes = useStyles();
  const [inputValue, setInputValue] = useState({
    email: '',
  });
  const [validacion, setValidacion] = useState({
    email: '',
  });
  const [alerta, setAlerta] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = ({ target }) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value,
    });

    setValidacion({
      ...validacion,
      [target.name]: datosRecuperarContraseniaValidation[target.name](
        target.value
      ),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!(inputValue.email == '')) {
        if (
          !(
            validacion.email == 'Email invalido' ||
            validacion.email == 'Campo requerido'
          )
        ) {
          setAlerta(2);
          await recuperarContraseniaService({ email: inputValue.email });
          setOpenSnackbar(true);
          setTimeout(() => {
            history.push('/login');
          }, 3000);
        } else {
          setAlerta(1);
          setOpenSnackbar(true);
        }
      } else {
        setOpenSnackbar(true);
      }
    } catch (error) {
      setAlerta(3);
      console.log(error.response.data.message);
      setOpenSnackbar(true);
    }
  };

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <Container maxWidth="xs" className={classes.container}>
          <div className={classes.div}>
            <img
              src={logoComunidadDeTrabajo}
              alt="logoComunidadDeTrabajo"
              className={classes.logo}
            />
            <Typography
              className={classes.typography}
              component="h1"
              variant="h5"
            >
              Recuperar contraseña
            </Typography>
            <Grid container>
              <Grid items xs="12">
                <TextField
                  required
                  id="email"
                  label="email"
                  fullWidth
                  name="email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  error={validacion.email}
                  helperText={validacion.email}
                  value={inputValue.email}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.link}>
              <Grid item xs>
                <Button href="/login" color="primary">
                  Volver al inicio
                </Button>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  fullWidth
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                >
                  ENVIAR ENLACE
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>

        {alerta == 0 && (
          <AlertaOperacionTerminada
            tipo="warning"
            mensaje="Por favor llene los campos"
            open={openSnackbar}
            setOpen={setOpenSnackbar}
          />
        )}
        {alerta == 1 && (
          <AlertaOperacionTerminada
            tipo="warning"
            mensaje="cumpla con los requisitos pedidos"
            open={openSnackbar}
            setOpen={setOpenSnackbar}
          />
        )}
        {alerta == 2 && (
          <AlertaOperacionTerminada
            tipo="success"
            mensaje="El enlace se envió correctamente"
            open={openSnackbar}
            setOpen={setOpenSnackbar}
          />
        )}
        {alerta == 3 && (
          <AlertaOperacionTerminada
            tipo="error"
            mensaje="Error"
            open={openSnackbar}
            setOpen={setOpenSnackbar}
          />
        )}
      </Grid>
    </>
  );
};
