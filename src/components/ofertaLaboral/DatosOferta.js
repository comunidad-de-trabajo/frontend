import React from 'react';
import { Grid, FormLabel, FormControl, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({}));

const GlobalCss = withStyles({
  '@global': {
    '.MuiFilledInput-input': {
      padding: '7px 16px',
    },
  },
})(() => null);

export const DatosOferta = () => {
  const classes = useStyles();
  return (
    <Grid xs={8}>
      <GlobalCss />
      <Grid item xs={12} spacing={6} style={{ marginTop: '15px' }}>
        <Typography variant="caption" gutterBottom>
          * Fecha de vigencia:
        </Typography>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            variant="filled"
          />
        </form>
      </Grid>
      <Grid item xs={12} spacing={6} style={{ marginTop: '15px' }}>
        <Typography variant="caption" gutterBottom>
          * Titulo de la búsqueda:
        </Typography>
        <FormControl fullWidth>
          <TextField required id="filled-start-adornment" variant="filled" />
        </FormControl>
      </Grid>
      <div style={{ marginTop: '15px' }}>
        <Grid item xs={12} spacing={6}>
          <Typography
            variant="caption"
            gutterBottom
            style={{ maginBottom: '5px' }}
          >
            * Descripción de la empresa:
          </Typography>
          <FormControl fullWidth>
            <TextField
              required
              id="filled-start-adornment"
              variant="filled"
              fullwidth
              row={2}
              multiline
            />
          </FormControl>
        </Grid>
      </div>

      <div style={{ marginTop: '15px' }}>
        <Grid item xs={12} spacing={6}>
          <Typography
            variant="caption"
            gutterBottom
            style={{ maginBottom: '5px' }}
          >
            Misión:
          </Typography>
          <FormControl fullWidth>
            <TextField id="filled-start-adornment" variant="filled" fullwidth />
          </FormControl>
        </Grid>
      </div>

      <div style={{ marginTop: '15px' }}>
        <Grid item xs={12} spacing={6}>
          <Typography
            variant="caption"
            gutterBottom
            style={{ maginBottom: '5px' }}
          >
            Responsabilidades principales:
          </Typography>
          <FormControl fullWidth>
            <TextField
              id="filled-start-adornment"
              variant="filled"
              fullwidth
              row={2}
              multiline
            />
          </FormControl>
        </Grid>
      </div>
    </Grid>
  );
};
