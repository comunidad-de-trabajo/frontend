import { FormControl, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';

export const ResponsableBusquedaOferta = () => {
  return (
    <Grid xs={8}>
      <Grid item xs={12} style={{ marginTop: '15px' }}>
        <Typography variant="subtitle2" gutterBottom>
          *Responsable de la búsqueda:
        </Typography>
      </Grid>

      <Grid item xs={12} spacing={6} style={{ marginTop: '15px' }}>
        <Typography variant="caption" gutterBottom>
          * Nombre y Apellido:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            variant="filled"
            style={{ marginTop: '10px' }}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} spacing={6} style={{ marginTop: '15px' }}>
        <Typography variant="caption" gutterBottom>
          * Email:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            variant="filled"
            type="email"
            style={{ marginTop: '10px' }}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} spacing={6} style={{ marginTop: '15px' }}>
        <Typography variant="caption" gutterBottom>
          *Otro:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            variant="filled"
            type="text"
            multiline
            row={2}
            style={{ marginTop: '10px' }}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} spacing={6} style={{ marginTop: '15px' }}>
        <Typography variant="caption" gutterBottom>
          * Otras acaraciones:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            variant="filled"
            type="text"
            multiline
            row={3}
            style={{ marginTop: '10px' }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
