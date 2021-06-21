import React from 'react';
import { Grid, FormControl, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  mt15: {
    marginTop: '15px',
  },
  mb5: {
    marginBottom: '5px',
  },
}));

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
    <Grid item xs={8}>
      <GlobalCss />
      <Grid item xs={6} className={classes.mt15}>
        <Typography variant="caption" gutterBottom>
          * Fecha de vigencia:
        </Typography>
        <form noValidate>
          <TextField
            id="date"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            variant="filled"
          />
        </form>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="caption" gutterBottom>
          * Titulo de la búsqueda:
        </Typography>
        <FormControl fullWidth>
          <TextField required id="filled-start-adornment" variant="filled" />
        </FormControl>
      </Grid>

      <div className={classes.mt15}>
        <Grid item xs={12}>
          <Typography variant="caption" gutterBottom className={classes.mb5}>
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

      <div className={classes.mt15}>
        <Grid item xs={12}>
          <Typography variant="caption" gutterBottom className={classes.mb5}>
            Misión:
          </Typography>
          <FormControl fullWidth>
            <TextField id="filled-start-adornment" variant="filled" fullwidth />
          </FormControl>
        </Grid>
      </div>

      <div className={classes.mt15}>
        <Grid item xs={12}>
          <Typography variant="caption" gutterBottom className={classes.mb5}>
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
