import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AlertDialogSlide from './modales/ModalTerminosYCondiciones/ModalTerminosYCondiciones';

export const DatosRepresentante = () => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = ({ target }) => {
    setIsActive(target.checked);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos del representante
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombre"
            name="nombre"
            label="Nombre/s"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="apellido"
            name="apellido"
            label="Apellido/s"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cargo"
            name="cargo"
            label="Cargo"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="codigoArea"
            name="codigoArea"
            label="Cod. Área"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="telefono"
            name="telefono"
            label="Teléfono"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveAddress"
                checked={isActive}
                onChange={handleChange}
              />
            }
            label="Acepto los términos y condiciones"
          />
        </Grid>
      </Grid>
      <AlertDialogSlide isActive={isActive} handleChange={handleChange} />
    </React.Fragment>
  );
};
