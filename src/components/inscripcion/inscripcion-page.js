import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { nuevoRegistro } from '../../services/inscripcion-backend/inscripcion-endpoint';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
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

  const handleChange = ({ target }) => {
    console.log(target.value),
      setRegistro({
        ...registro,
        [target.name]: target.value,
      });
  };

  const handleRegistrar = async () => {
    let data = {
      ...registro,
    };
    try {
      console.log(data);
      await nuevoRegistro(registro);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Container maxWidth="xs" className={classes.container}>
        <div className={classes.div}>
          <img
            src="https://www.nodal.am/wp-content/uploads/2017/11/UNAHUR-300x125.png"
            alt="UNAHUR"
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
          <Link className={classes.link} href="x">
            Ya tenes una cuenta?Inicia sesion
          </Link>
        </div>
      </Container>
    </Grid>
  );
}
