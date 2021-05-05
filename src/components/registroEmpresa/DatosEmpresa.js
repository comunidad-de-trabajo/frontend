import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';

export default function DatosEmpresa() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos de la empresa
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombreComercial"
            name="nombreComercial"
            label="Nombre comercial / Alias"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="provincia"
            name="provincia"
            label="Provincia"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="razonSocial"
            name="razonSocial"
            label="Razon social"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="localidad"
            name="localidad"
            label="Localidad"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="cuit" name="cuit" label="CUIT" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="direccion"
            name="direccion"
            label="Dirección"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Tipo de empresa
            </InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem>Agencia de reclutamiento / consultora de RRHH</MenuItem>
              <MenuItem>Empleador directo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="piso" name="piso" label="Piso" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="CP"
            name="CP"
            label="Codigo Postal"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="departamento"
            name="departamento"
            label="Departamento"
            fullWidth
          />
        </Grid>
        <Grid item xs={5} sm={2}>
          <TextField
            required
            id="codigoArea"
            name="codigoArea"
            label="C. área"
            fullWidth
          />
        </Grid>
        <Grid item xs={7} sm={4}>
          <TextField required id="tel" name="tel" label="Telefono" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
