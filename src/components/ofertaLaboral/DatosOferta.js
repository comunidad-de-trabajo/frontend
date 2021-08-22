import React from 'react';
import { Grid, FormControl, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useRecoilState } from 'recoil';
import { datosOfertaLaboralState } from '../../recoil/oferta-laboral';

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
  const [stateDatosOferta, setStateDatosOferta] = useRecoilState(
    datosOfertaLaboralState
  );

  const handleRecoilStateChange = ({ target }) => {
    setStateDatosOferta({
      ...stateDatosOferta,
      [target.name]: target.value,
    });
  };

  return (
    <Grid item>
      <GlobalCss />
      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="h6" gutterBottom>
          {' '}
          Datos de la oferta{' '}
        </Typography>
        <Typography variant="caption" color="textSecondary" gutterBottom>
          * Fecha de vigencia:
        </Typography>
        <TextField
          required
          id="date"
          type="date"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          name="fechaVigencia"
          value={stateDatosOferta.fechaVigencia}
          onChange={handleRecoilStateChange}
        />
      </Grid>
      <Grid item xs={12} className={classes.mt15}>
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            name="tituloBusqueda"
            label="Titulo de la busqueda"
            value={stateDatosOferta.tituloBusqueda}
            onChange={handleRecoilStateChange}
          />
        </FormControl>
      </Grid>

      <div className={classes.mt15}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              required
              id="descripcionEmpresa"
              fullwidth
              multiline
              name="descripcionEmpresa"
              label="Descripcion de la empresa"
              value={stateDatosOferta.descripcionEmpresa}
              onChange={handleRecoilStateChange}
            />
          </FormControl>
        </Grid>
      </div>

      <div className={classes.mt15}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              id="mision"
              fullwidth
              multiline
              name="mision"
              label="Misión"
              value={stateDatosOferta.mision}
              onChange={handleRecoilStateChange}
            />
          </FormControl>
        </Grid>
      </div>

      <div className={classes.mt15}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              required
              id="responsabilidades"
              fullwidth
              multiline
              name="responsabilidades"
              label="Responsabilidades principales"
              value={stateDatosOferta.responsabilidades}
              onChange={handleRecoilStateChange}
            />
          </FormControl>
        </Grid>
      </div>
    </Grid>
  );
};
