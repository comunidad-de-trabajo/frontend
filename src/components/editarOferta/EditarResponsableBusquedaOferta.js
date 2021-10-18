import React from 'react';
import { FormControl, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRecoilState } from 'recoil';
import { editarResponsableOferta } from '../../recoil/editarOferta';
import { editarResponsableOfertaValidacionState } from '../../recoil/editarOfertaValidation';
import { responsableOfertaValidations } from './validation/validationByField';

const useStyles = makeStyles(() => ({
  mt15: {
    marginTop: '15px',
  },
  mt10: {
    marginTop: '10px',
  },
}));

export default function EditarResponsableBusquedaOferta() {
  const classes = useStyles();
  const [stateResponsableOferta, setStateResponsableOferta] = useRecoilState(
    editarResponsableOferta
  );
  const [validaciones, setValidaciones] = useRecoilState(
    editarResponsableOfertaValidacionState
  );

  const handleRecoilStateChange = ({ target }) => {
    setStateResponsableOferta({
      ...stateResponsableOferta,
      [target.name]: target.value,
    });
    setValidaciones({
      ...validaciones,
      [target.name]: responsableOfertaValidations[target.name](target.value),
    });
  };

  return (
    <Grid item xs={12}>
      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="subtitle2" gutterBottom>
          Responsable de la búsqueda:
        </Typography>
      </Grid>

      <Grid item xs={12} classes={classes.mt10}>
        <FormControl fullWidth>
          <TextField
            required
            id="nombreCompletoRepresentante"
            name="nombreCompletoRepresentante"
            label="Nombre y apellido"
            value={stateResponsableOferta.nombreCompletoRepresentante}
            onChange={handleRecoilStateChange}
            error={validaciones.nombreCompletoRepresentante}
            helperText={validaciones.nombreCompletoRepresentante}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <FormControl fullWidth>
          <TextField
            required
            id="emailRepresentante"
            type="email"
            name="emailRepresentante"
            label="Email representante"
            value={stateResponsableOferta.emailRepresentante}
            onChange={handleRecoilStateChange}
            error={validaciones.emailRepresentante}
            helperText={validaciones.emailRepresentante}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <FormControl fullWidth>
          <TextField
            required
            id="detalles"
            type="text"
            multiline
            row={2}
            name="detalles"
            label="Detalles"
            value={stateResponsableOferta.detalles}
            onChange={handleRecoilStateChange}
            error={validaciones.detalles}
            helperText={validaciones.detalles}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <FormControl fullWidth>
          <TextField
            required
            id="otrasAclaraciones"
            type="text"
            multiline
            name="otrasAclaraciones"
            label="Otras aclaraciones"
            value={stateResponsableOferta.otrasAclaraciones}
            onChange={handleRecoilStateChange}
            error={validaciones.otrasAclaraciones}
            helperText={validaciones.otrasAclaraciones}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
