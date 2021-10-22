import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logoComunidadDeTrabajo from '../../assets/logoComunidadDeTrabajo.svg';
import { resetearContraseniaService } from '../../services/auth/resetearContrasenia';
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';
import { datosResetearContraseniaValidation } from './validation/validationByField';

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

export const ResetearContrasenia = () => {
  const history = useHistory();
  const { token } = useParams();
  const classes = useStyles();
  const [inputValue, setInputValue] = useState({
    contrasenia: '',
  });
  const [validacion, setValidacion] = useState({
    contrasenia: '',
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
      [target.name]: datosResetearContraseniaValidation[target.name](
        target.value
      ),
    });
  };

  console.log(inputValue);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!(inputValue.contrasenia == '')) {
        if (
          !(
            validacion.contrasenia ==
              'Requiere minimo una mayuscula, una minuscula, un numero y 8 digitos' ||
            validacion.contrasenia == 'Campo requerido'
          )
        ) {
          setAlerta(2);
          await resetearContraseniaService({
            password: inputValue.contrasenia,
            reset_password_link: token,
          });
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

  const volverLogin = () => {
    history.push('/login');
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
              Resetear contraseña
            </Typography>
            <Grid container>
              <Grid items xs="12">
                <TextField
                  required
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={validacion.contrasenia}
                  helperText={validacion.contrasenia}
                  id="contrasenia"
                  label="Nueva contraseña"
                  name="contrasenia"
                  type="password"
                  onChange={handleChange}
                  value={inputValue.contrasenia}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.link}>
              <Grid item xs>
                <Button onClick={volverLogin} color="primary">
                  Cancelar
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
                  Guardar
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
            mensaje="La contraseña se cambió correctamente"
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
