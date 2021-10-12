import React, { useState } from 'react';
import { Button, Grid, InputAdornment, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
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

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const { data } = await resetearContraseniaService({
        password: inputValue.contrasenia,
        reset_password_link: token,
      });
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
              <TextValidator
                id="contraseniaUsuario"
                label="Nueva contraseña"
                name="contrasenia"
                type="contrasenia"
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
