import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { Grid, FormControl, InputLabel, Select } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
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
  textArea: {
    borderBottom: 'none !important',
  },
}));

export function OfertaLaboralPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Publicar oferta laboral
          </Typography>
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="fechaVigencia"
                  name="fechaVigencia"
                  label="Fecha de vigencia"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="tituloBusqueda"
                  name="tituloBusqueda"
                  label="Titulo de la busqueda"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="descripcionEmpresa"
                  name="descripcionEmpresa"
                  label="Descripción de la empresa"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField id="mision" name="mision" label="Mision" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="respoPrincipales"
                  name="respoPrincipales"
                  label="Responsabilidades principales"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Requisitos:
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Marque si/no segun corresponda.
                </Typography>
              </Grid>
              <Grid item xs={24} sm={12}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="caption">
                      Estudios secundarios completos:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="top"
                        style={{ marginLeft: '10px' }}
                      >
                        <FormControlLabel
                          value="top"
                          control={<Radio color="primary" />}
                          label={<Typography variant="caption">Si</Typography>}
                          labelPlacement="top"
                        />
                        <FormControlLabel
                          value="top"
                          control={<Radio color="primary" />}
                          label={<Typography variant="caption">No</Typography>}
                          labelPlacement="top"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={24} sm={12}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="caption">
                      Conociemientos de paquete office:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="top"
                        style={{ marginLeft: '10px' }}
                      >
                        <FormControlLabel
                          value="top"
                          control={<Radio color="primary" />}
                          labelPlacement="top"
                        />
                        <FormControlLabel
                          value="top"
                          control={<Radio color="primary" />}
                          labelPlacement="top"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={24} sm={12}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="caption">
                      Licencia de conducir:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="top"
                        style={{ marginLeft: '10px' }}
                      >
                        <FormControlLabel
                          value="top"
                          control={<Radio color="primary" />}
                          labelPlacement="top"
                        />
                        <FormControlLabel
                          value="top"
                          control={<Radio color="primary" />}
                          labelPlacement="top"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={24} sm={12}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="caption">Edad:</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="top"
                        style={{ marginLeft: '10px' }}
                      >
                        <FormControlLabel
                          value="top"
                          control={<Radio color="primary" />}
                          labelPlacement="top"
                        />
                        <FormControlLabel
                          value="top"
                          control={<Radio color="primary" />}
                          labelPlacement="top"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </div>
              </Grid>

              <Grid item xs={3} sm={3}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="caption">Desde:</Typography>
                  <TextField
                    id="filled-basic"
                    variant="filled"
                    size="small"
                    style={{
                      marginLeft: '10px',
                      paddingTop: 'none !important',
                      paddingBottom: 'none !important',
                      padding: 'none !important',
                    }}
                  />
                </div>
              </Grid>
              <Grid item xs={3} sm={3}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="caption">Hasta:</Typography>
                  <TextField
                    id="filled-basic"
                    variant="filled"
                    size="small"
                    style={{ marginLeft: '10px' }}
                  />
                </div>
              </Grid>
              <Grid item xs={24} sm={12}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="caption">
                      Experiencia previa:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      component="fieldset"
                      className={classes.textArea}
                    >
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="top"
                        style={{ marginLeft: '10px' }}
                      >
                        <FormControlLabel
                          value="top"
                          control={<Radio color="primary" />}
                          labelPlacement="top"
                        />
                        <FormControlLabel
                          value="top"
                          control={<Radio color="primary" />}
                          labelPlacement="top"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </div>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="filled-multiline-static"
                  placeholder="Espacio para completar más detalles"
                  multiline
                  fullWidth
                  rows={2}
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="caption" gutterBottom>
                  Complete los campos requeridos.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="caption" gutterBottom>
                  Residencia:
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="filled-multiline-static"
                  placeholder="Indicar zona"
                  multiline
                  fullWidth
                  rows={1}
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="caption" gutterBottom>
                  Capacitación acreditada en áreas de estudio como:
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="filled-multiline-static"
                  placeholder="Complete"
                  multiline
                  fullWidth
                  rows={1}
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="caption" gutterBottom>
                  Competencias:
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="filled-multiline-static"
                  placeholder="Complete"
                  multiline
                  fullWidth
                  rows={1}
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="caption" gutterBottom>
                  Otros detalles:
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="filled-multiline-static"
                  placeholder="Detalles"
                  multiline
                  fullWidth
                  rows={2}
                  variant="filled"
                />
              </Grid>
            </Grid>
          </>
        </Paper>
      </main>
    </React.Fragment>
  );
}
