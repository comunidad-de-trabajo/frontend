import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { nuevoRegistro } from '../../services/inscripcion-backend/inscripcion-endpoint';
import { useHistory } from 'react-router';
import logoComunidadDeTrabajo from '../../assets/logoComunidadDeTrabajo.svg';
import { datosSignUpValidation } from './validation/validationByField';
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';

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
    marginLeft: theme.spacing(22),
    [theme.breakpoints.down(428 + theme.spacing(2) + 2)]: {
      marginLeft: 0,
    },
  },
}));

export default function Inscripcion() {
  const classes = useStyles();
  const [registro, setRegistro] = useState({
    email: '',
    contrasenia: '',
    rol: 'empresa',
  });
  const [validacion, setValidacion] = useState({
    email: '',
    contrasenia: '',
  });
  const [alerta, setAlerta] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [error, setError] = useState();
  let history = useHistory();

  const handleChange = ({ target }) => {
    setRegistro({
      ...registro,
      [target.name]: target.value,
    });
    setValidacion({
      ...validacion,
      [target.name]: datosSignUpValidation[target.name](target.value),
    });
  };

  const handleRegistrar = async () => {
    let data = {
      ...registro,
    };
    try {
      if (!(registro.email == '' || registro.contrasenia == '')) {
        if (
          !(
            validacion.email == 'Email invalido' ||
            validacion.contrasenia ==
              'Requiere minimo una mayuscula, una minuscula, un numero y 8 digitos'
          )
        ) {
          setAlerta(2);
          await nuevoRegistro(registro);
          setOpenSnackbar(true);
          history.push('/login');
        } else {
          setAlerta(1);
          setOpenSnackbar(true);
        }
      } else {
        setOpenSnackbar(true);
      }
    } catch (e) {
      setAlerta(3);
      console.log(e.JSON);
      setOpenSnackbar(true);
    }
  };

  return (
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
            Registro
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
                value={registro.email}
                onChange={handleChange}
                error={validacion.email}
                helperText={validacion.email}
              />
            </Grid>
            <Grid items xs="12">
              <TextField
                required
                id="contrasenia"
                label="contraseña"
                fullWidth
                name="contrasenia"
                variant="outlined"
                margin="normal"
                type="password"
                value={registro.contrasenia}
                onChange={handleChange}
                error={validacion.contrasenia}
                helperText={validacion.contrasenia}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={handleRegistrar}
            color="primary"
            className={classes.button}
            fullWidth
          >
            Registrarse
          </Button>
          <Link className={classes.link} href="/login">
            Ya tenes una cuenta?Iniciar sesión
          </Link>
        </div>
        {alerta == 0 && (
          <AlertaOperacionTerminada
            tipo="warning"
            mensaje="por favor llene los campos"
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
            mensaje="registrado correctamente"
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
      </Container>
    </Grid>
  );
}
