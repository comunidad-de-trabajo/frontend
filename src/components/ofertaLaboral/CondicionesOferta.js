import React from 'react';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  mt15: {
    marginTop: '15px',
  },
  mt10: {
    marginTop: '10px',
  },
}));

export const CondicionesOferta = () => {
  const classes = useStyles();

  return (
    <Grid item xs={8}>
      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="subtitle2" gutterBottom>
          Condiciones:
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} className={classes.mt15}>
        <Typography variant="caption">Jornada:</Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="gender"
            name="position"
            defaultValue="end"
          >
            <FormControlLabel
              value="porHora"
              control={<Radio color="primary" />}
              label={<Typography variant="caption">Por hora</Typography>}
            />
            <FormControlLabel
              value="medioTiempo"
              control={<Radio color="primary" />}
              label={<Typography variant="caption">Medio tiempo</Typography>}
            />
            <FormControlLabel
              value="fullTime"
              control={<Radio color="primary" />}
              label={<Typography variant="caption">Full time</Typography>}
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="caption" gutterBottom>
          Contrato:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            variant="filled"
            placeholder="Complete"
            multiline
            row={2}
            className={classes.mt10}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="caption" gutterBottom>
          Lugar de trabajo:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            variant="filled"
            placeholder="Indicar zona"
            className={classes.mt10}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="caption" gutterBottom>
          Ofrecen:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            variant="filled"
            rows={3}
            multiline
            placeholder="Ej: Buenas condiciones de contratación"
            className={classes.mt10}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
