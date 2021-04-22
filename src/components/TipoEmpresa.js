import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Select } from '@material-ui/core';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

export default function TipoEmpresa() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tipo de Empresa
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Select
            required
            id="Areas de interes"
            labelId="Areas de interes"
            fullWidth
            defaultValue=""
          >
            <MenuItem value="Administración">Administración</MenuItem>
            <MenuItem value="Producción">Producción</MenuItem>
            <MenuItem value="Finanzas y Contabilidad">
              Finanzas y Contabilidad
            </MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Informática">Informática</MenuItem>
            <MenuItem value="Servicios">Servicios</MenuItem>
            <MenuItem value="Turismo">Turismo</MenuItem>
            <MenuItem value="Salud">Salud</MenuItem>
            <MenuItem value="Educación">Educación</MenuItem>
            <MenuItem value="Rehabilitación">Rehabilitación</MenuItem>
            <MenuItem value="Ambiente">Ambiente</MenuItem>
            <MenuItem value="Sustentabilidad">Sustentabilidad</MenuItem>
            <MenuItem value="Inclusión social ">Inclusión social </MenuItem>
            <MenuItem value="Diseño">Diseño</MenuItem>
            <MenuItem value="Arte">Arte</MenuItem>
            <MenuItem value="Cultura">Cultura</MenuItem>
            <MenuItem value="Actividad Fisica">Actividad Fisica</MenuItem>
            <MenuItem value="Deporte">Deporte</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField required id="Sitio web" label="Sitio web" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="Email" label="Email" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <Select required id="Tipo" labelId="Tipo" fullWidth defaultValue="">
            <MenuItem value="Emprendimiento">Emprendimiento</MenuItem>
            <MenuItem value="PYME">PYME</MenuItem>
            <MenuItem value="Empresa">Empresa</MenuItem>
            <MenuItem value="Industria">Industria</MenuItem>
            <MenuItem value="Agencia">Agencia</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Descripcion"
            label="Descripcion"
            multiline
            fullWidth
            helperText="Descripción general de la empresa. Puedo incluir datos sobre su história, 
            Equipo directivo y / o de trabajo Misión, Visión y Valores.Productos o servicios 
            que brinda."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <button>
            <Typography align="center">Logo de Empresa</Typography>
            <CameraAltOutlinedIcon fontSize="large" />
          </button>
          <Typography variant="inherit" display="block" color="textSecondary">
            El logo debe ser formato JPG o PNG, con peso maximo de 500kb y un
            tamaño minimo de 200px por 200px y maximo de 500px por 500px.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
