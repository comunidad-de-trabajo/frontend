import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logoComunidadDeTrabajo from '../../assets/logoComunidadDeTrabajo.svg';
import { makeStyles } from '@material-ui/core';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../recoil/user';
import { loginService } from '../../services/auth/login';
import Loading from '../common/Loading';

const theme = createTheme();

const useStyles = makeStyles(() => ({
  logo: {
    width: 300,
    height: 100,
    marginBottom: '10px',
  },
}));

export const SignIn = () => {
  const classes = useStyles();
  const setUser = useSetRecoilState(userState);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      setLoading(true);
      const { data } = await loginService({
        email: data.get('email'),
        password: data.get('password'),
      });
      setUser(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            src={logoComunidadDeTrabajo}
            alt="logoComunidadDeTrabajo"
            className={classes.logo}
          />

          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              INICIAR SESIÓN
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {'Registrarme'}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {loading && <Loading />}
    </ThemeProvider>
  );
};
