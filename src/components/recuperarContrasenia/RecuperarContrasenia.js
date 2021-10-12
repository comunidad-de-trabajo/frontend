import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { recuperarContraseniaService } from '../../services/auth/recuperarContrasenia';
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';
import { useHistory } from 'react-router';

export const RecuperarContrasenia = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState({
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [datosAlerta, setDatosAlerta] = useState({
    severity: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { data } = await recuperarContraseniaService({ email: inputValue });

      setDatosAlerta({
        severity: 'success',
        mensaje: data.message,
      });
      setOpenAlert(true);
      setTimeout(() => {
        history.push('/login');
      }, 5500);
    } catch (error) {
      setDatosAlerta({
        severity: 'error',
        mensaje: error.response.data.message,
      });
      setOpenAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const volverLogin = () => {
    history.push('/login');
  };

  return (
    <>
      <Box mt={5} display="flex" justifyContent="center">
        <Typography variant="h4" style={{ color: '#5E7D32' }}>
          Recuperar contraseña
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
        <Grid container spacing={4} align="center">
          <Grid item xs={12}>
            <Grid item xs={9} sm={7} md={4} style={{ marginTop: 10 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={inputValue.email}
                onChange={handleChange}
                sx={{ mt: 5 }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Grid>
            <Button color="success" type="submit" fullWidth>
              Enviar enlace
            </Button>
          </Grid>
          <Grid>
            <Button onClick={volverLogin}>Volver al inicio</Button>
          </Grid>
        </Grid>
      </Box>

      <AlertaOperacionTerminada
        tipo={datosAlerta.severity}
        mensaje={datosAlerta.mensaje}
        open={openAlert}
        setOpen={setOpenAlert}
      />
    </>
  );
};
