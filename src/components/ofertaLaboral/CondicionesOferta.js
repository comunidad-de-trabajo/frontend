import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';

export const CondicionesOferta = () => {
  return (
    <Grid xs={8}>
      <Grid item xs={12} style={{ marginTop: '15px' }}>
        <Typography variant="subtitle2" gutterBottom>
          Condiciones:
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} style={{ marginTop: '15px' }}>
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
              control={<Radio />}
              label={<Typography variant="caption">Por hora</Typography>}
            />
            <FormControlLabel
              value="medioTiempo"
              control={<Radio />}
              label={<Typography variant="caption">Medio tiempo</Typography>}
            />
            <FormControlLabel
              value="fullTime"
              control={<Radio />}
              label={<Typography variant="caption">Full time</Typography>}
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} spacing={6} style={{ marginTop: '15px' }}>
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
            style={{ marginTop: '10px' }}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} spacing={6} style={{ marginTop: '15px' }}>
        <Typography variant="caption" gutterBottom>
          Lugar de trabajo:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            variant="filled"
            placeholder="Indicar zona"
            style={{ marginTop: '10px' }}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} spacing={6} style={{ marginTop: '15px' }}>
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
            style={{ marginTop: '10px' }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
