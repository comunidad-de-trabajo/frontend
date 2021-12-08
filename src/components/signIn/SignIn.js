import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import logoComunidadDeTrabajo from '../../assets/logoComunidadDeTrabajo.svg';
import { datosLoginValidation } from './validation/validationByField';
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';
import { loginService } from '../../services/auth/login';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../recoil/user';

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

export const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const [inputValues, setInputValues] = useState({
    email: '',
    contrasenia: '',
  });
  const [validacion, setValidacion] = useState({
    email: '',
    contrasenia: '',
  });
  const [alerta, setAlerta] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const setUser = useSetRecoilState(userState);
  const [mensajeAlerta, setMensajeAlerta] = useState('');

  const handleChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
    setValidacion({
      ...validacion,
      [target.name]: datosLoginValidation[target.name](target.value),
    });
  };

  const handleSignin = async () => {
    try {
      if (!(inputValues.email == '' || inputValues.contrasenia == '')) {
        if (
          !(
            validacion.email == 'Email invalido' ||
            validacion.contrasenia == 'Campo requerido'
          )
        ) {
          setAlerta(2);
          const { data } = await loginService({
            email: inputValues.email,
            contrasenia: inputValues.contrasenia,
          });
          setUser(data);
          localStorage.setItem('token', data.token);
          setOpenSnackbar(true);
          history.push('/home');
        } else {
          setAlerta(1);
          setOpenSnackbar(true);
        }
      } else {
        setOpenSnackbar(true);
      }
    } catch (e) {
      setAlerta(3);
      setMensajeAlerta(e.response.data.msg);
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
            Login
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
                value={inputValues.email}
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
                value={inputValues.contrasenia}
                onChange={handleChange}
                error={validacion.contrasenia}
                helperText={validacion.contrasenia}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={handleSignin}
            color="primary"
            className={classes.button}
            fullWidth
          >
            INICIAR SESIÓN
          </Button>
          <Grid container className={classes.link}>
            <Grid item xs>
              <Link href="/recuperar-contraseña" variant="body2">
                ¿Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/registro" variant="body2">
                {'Registrarme'}
              </Link>
            </Grid>
          </Grid>
        </div>
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
            mensaje="Iniciando sesión...."
            open={openSnackbar}
            setOpen={setOpenSnackbar}
          />
        )}
        {alerta == 3 && (
          <AlertaOperacionTerminada
            tipo="error"
            mensaje={mensajeAlerta}
            open={openSnackbar}
            setOpen={setOpenSnackbar}
          />
        )}
      </Container>
    </Grid>
  );
};
