import React from 'react';
import {
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRecoilState } from 'recoil';
import { editarCondicionesOferta } from '../../recoil/editarOferta';
import { editarCondicionesOfertaValidacionState } from '../../recoil/editarOfertaValidation';
import { condicionesValidations } from './validation/validationByField';

const useStyles = makeStyles(() => ({
  mt15: {
    marginTop: '15px',
  },
  mt10: {
    marginTop: '10px',
  },
}));

export default function EditarCondicionesOferta() {
  const classes = useStyles();
  const [stateCondicionesOferta, setStateCondicionesOferta] = useRecoilState(
    editarCondicionesOferta
  );
  const [validaciones, setValidaciones] = useRecoilState(
    editarCondicionesOfertaValidacionState
  );

  const handleRecoilStateChange = ({ target }) => {
    setStateCondicionesOferta({
      ...stateCondicionesOferta,
      [target.name]: target.value,
    });
    setValidaciones({
      ...validaciones,
      [target.name]: condicionesValidations[target.name](target.value),
    });
  };

  return (
    <Grid item xs={12}>
      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="subtitle2" gutterBottom>
          Condiciones:
        </Typography>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.mt15}>
        <Typography variant="body1" color="textSecondary">
          Jornada
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="jornada"
            defaultValue="end"
            name="jornada"
            value={stateCondicionesOferta.jornada}
            onChange={handleRecoilStateChange}
            error={validaciones.jornada}
            helperText={validaciones.jornada}
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
      <Divider style={{ margin: '16px 0 8px 0' }} />
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            required
            id="contrato"
            placeholder="Complete"
            multiline
            name="contrato"
            label="Contrato"
            value={stateCondicionesOferta.contrato}
            onChange={handleRecoilStateChange}
            error={validaciones.contrato}
            helperText={validaciones.contrato}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <FormControl fullWidth>
          <TextField
            required
            id="lugarTrabajo"
            placeholder="Indicar zona"
            className={classes.mt10}
            name="lugarTrabajo"
            label="Lugar de trabajo"
            value={stateCondicionesOferta.lugarTrabajo}
            onChange={handleRecoilStateChange}
            error={validaciones.lugarTrabajo}
            helperText={validaciones.lugarTrabajo}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <FormControl fullWidth>
          <TextField
            required
            id="ofrecen"
            multiline
            placeholder="Ej: Buenas condiciones de contratación"
            className={classes.mt10}
            name="ofrecen"
            label="Ofrecen"
            value={stateCondicionesOferta.ofrecen}
            onChange={handleRecoilStateChange}
            error={validaciones.ofrecen}
            helperText={validaciones.ofrecen}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}