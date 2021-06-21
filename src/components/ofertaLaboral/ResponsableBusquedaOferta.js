import React from 'react';
import { FormControl, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  mt15: {
    marginTop: '15px',
  },
  mt10: {
    marginTop: '10px',
  },
}));

export const ResponsableBusquedaOferta = () => {
  const classes = useStyles();

  return (
    <Grid item xs={8}>
      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="subtitle2" gutterBottom>
          *Responsable de la búsqueda:
        </Typography>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="caption" gutterBottom>
          * Nombre y Apellido:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            variant="filled"
            className={classes.mt10}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="caption" gutterBottom>
          * Email:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            variant="filled"
            type="email"
            className={classes.mt10}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
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
            className={classes.mt10}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="caption" gutterBottom>
          * Otras aclaraciones:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            variant="filled"
            type="text"
            multiline
            row={3}
            className={classes.mt10}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
