import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useHistory, useParams } from 'react-router';
import { resetearContraseniaService } from '../../services/auth/resetearContrasenia';
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';

export const ResetearContrasenia = () => {
  const history = useHistory();
  const { token } = useParams();
  const [inputValue, setInputValue] = useState({
    contrasenia: '',
  });
  const [openAlert, setOpenAlert] = useState(false);
  const [datosAlerta, setDatosAlerta] = useState({
    severity: '',
    mensaje: '',
  });

  //$2b$10$qAB7IstaKyjzm6y3RKG/SONXhXsOXiUFc326JTDci4mWbK0P4pqua
  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  console.log(inputValue);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await resetearContraseniaService({
        password: inputValue,
        reset_password_link: token,
      });
      setDatosAlerta({
        severity: 'success',
        mensaje: data.message,
      });
      setOpenAlert(true);
      setTimeout(() => {
        history.push('/login');
      }, 5000);
    } catch (error) {
      setDatosAlerta({
        severity: 'error',
        mensaje: error.response.data.message,
      });
      setOpenAlert(true);
    }
  };

  const volverLogin = () => {
    history.push('/login');
  };

  return (
    <>
      <Box mt={5} display="flex" justifyContent="center">
        <Typography variant="h4" color="primary">
          Recuperar contraseña
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2} align="center">
          <Grid item xs={12}>
            <Grid item xs={12} sm={7} md={4} style={{ marginTop: 20 }}>
              <TextField
                id="contrasenia"
                label="Nueva contraseña"
                name="contrasenia"
                type="password"
                fullWidth
                onChange={handleChange}
                value={inputValue.contrasenia}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={1} style={{ marginTop: 20 }}>
          <Grid item xs={6} align="right">
            <Button onClick={volverLogin}>Cancelar</Button>
          </Grid>
          <Grid item xs={6}>
            <Button type="submit">Guardar</Button>
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
