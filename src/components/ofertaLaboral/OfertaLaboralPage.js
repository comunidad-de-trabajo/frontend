import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  createMuiTheme,
  withStyles,
  Box,
  Button,
} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { DatosOferta } from './DatosOferta';
import { RequisitosOferta } from './RequisitosOferta';
import { CondicionesOferta } from './CondicionesOferta';
import { ResponsableBusquedaOferta } from './ResponsableBusquedaOferta';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const GlobalCss = withStyles({
  '@global': {
    '.MuiFilledInput-underline:before': {
      borderBottom: 'none',
      content: 'none',
    },
    '.MuiInputBase-root': {
      fontSize: '0.8rem',
    },
  },
})(() => null);

export function OfertaLaboralPage() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5" align="center">
            Publicar oferta laboral
          </Typography>
          <Grid
            container
            spacing={3}
            justify="center"
            alignItems="center"
            style={{ marginTop: '15px' }}
          >
            <DatosOferta />

            <RequisitosOferta />

            <CondicionesOferta />

            <ResponsableBusquedaOferta />
          </Grid>

          <Button
            variant="contained"
            color="primary"
            style={{
              marginTop: '15px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Publicar
          </Button>
        </Paper>
      </main>
      <GlobalCss />
    </>
  );
}
