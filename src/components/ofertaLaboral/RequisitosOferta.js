import React from 'react';
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useRecoilState } from 'recoil';
import { requisitosOfertaState } from '../../recoil/oferta-laboral';

const useStyles = makeStyles(() => ({
  mt15: {
    marginTop: '15px',
  },
  ml15: {
    marginLeft: '15px !important',
  },
  ml10: {
    marginLeft: '10px',
  },
  mr60: {
    marginRight: '63px',
  },
  mt10: {
    marginTop: '10px',
  },
  pl30: {
    paddingLeft: '30px',
  },
  labelSiNo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerItem: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export const RequisitosOferta = () => {
  const classes = useStyles();
  const [stateRequisitosOferta, setStateRequisitosOferta] = useRecoilState(
    requisitosOfertaState
  );

  const handleRecoilStateChange = ({ target }) => {
    setStateRequisitosOferta({
      ...stateRequisitosOferta,
      [target.name]: target.value,
    });
  };

  return (
    <Grid item xs={8}>
      <Grid item xs={6} sm={6} className={classes.mt10}>
        <Typography variant="subtitle2" gutterBottom>
          Requisitos:
        </Typography>
        <Typography variant="caption" gutterBottom>
          *Marque si/no segun corresponda.
        </Typography>
      </Grid>

      <div className={classes.labelSiNo}>
        <Grid item xs={12} sm={6} className={classes.pl30}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
              className={classes.ml10}
            >
              <Typography variant="caption" className={classes.mr60}>
                Si
              </Typography>
              <Typography variant="caption">no</Typography>
            </RadioGroup>
          </FormControl>
        </Grid>
      </div>

      <div className={classes.containerItem}>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption">
            Estudios secundarios completos:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="secundarioCompleto"
              defaultValue="top"
              className={classes.ml10}
              name="secundarioCompleto"
              value={stateRequisitosOferta.secundarioCompleto}
              onChange={handleRecoilStateChange}
            >
              <FormControlLabel
                value="si"
                control={<Radio color="primary" />}
                labelPlacement="top"
              />
              <FormControlLabel
                value="no"
                control={<Radio color="primary" />}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </div>

      <div className={classes.containerItem}>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption">
            Conociemientos de paquete office:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="paqueteOffice"
              defaultValue="top"
              className={classes.ml10}
              name="paqueteOffice"
              value={stateRequisitosOferta.paqueteOffice}
              onChange={handleRecoilStateChange}
            >
              <FormControlLabel
                value="si"
                control={<Radio color="primary" />}
                labelPlacement="top"
              />
              <FormControlLabel
                value="no"
                control={<Radio color="primary" />}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </div>

      <div className={classes.containerItem}>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption">Licencia de conducir:</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="licenciaConducir"
              defaultValue="top"
              className={classes.ml10}
              name="licenciaConducir"
              value={stateRequisitosOferta.licenciaConducir}
              onChange={handleRecoilStateChange}
            >
              <FormControlLabel
                value="si"
                control={<Radio color="primary" />}
                labelPlacement="top"
              />
              <FormControlLabel
                value="no"
                control={<Radio color="primary" />}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </div>

      <div className={classes.containerItem}>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption">Edad:</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="edad"
              defaultValue="top"
              className={classes.ml10}
              name="edad"
              value={stateRequisitosOferta.edad}
              onChange={handleRecoilStateChange}
            >
              <FormControlLabel
                value="si"
                control={<Radio color="primary" />}
                labelPlacement="top"
              />
              <FormControlLabel
                value="no"
                control={<Radio color="primary" />}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </div>

      <Grid item sm={6}>
        <div className={(classes.mt15, classes.containerItem)}>
          <div className={classes.containerItem}>
            <Typography variant="caption">Desde:</Typography>
            <TextField
              id="desdeEdad"
              variant="filled"
              size="small"
              className={classes.ml15}
              name="desdeEdad"
              value={stateRequisitosOferta.desdeEdad}
              onChange={handleRecoilStateChange}
            />
          </div>

          <div className={classes.containerItem} style={{ marginLeft: '15px' }}>
            <Typography variant="caption">Hasta:</Typography>
            <TextField
              id="hastaEdad"
              variant="filled"
              size="small"
              className={classes.ml15}
              name="hastaEdad"
              value={stateRequisitosOferta.hastaEdad}
              onChange={handleRecoilStateChange}
            />
          </div>
        </div>
      </Grid>

      <div className={classes.containerItem} style={{ marginTop: '15px' }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption">Experiencia previa:</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="experienciaPrevia"
              defaultValue="top"
              className={classes.ml10}
              name="experienciaPrevia"
              value={stateRequisitosOferta.experienciaPrevia}
              onChange={handleRecoilStateChange}
            >
              <FormControlLabel
                value="si"
                control={<Radio color="primary" />}
                labelPlacement="top"
              />
              <FormControlLabel
                value="no"
                control={<Radio color="primary" />}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </div>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            required
            id="experienciaPreviaDescription"
            variant="filled"
            placeholder="Complete los datos requeridos"
            multiline
            row={2}
            className={classes.mt10}
            name="experienciaPreviaDescription"
            value={stateRequisitosOferta.experienciaPreviaDescription}
            onChange={handleRecoilStateChange}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="caption" gutterBottom>
          Residencia:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="residencia"
            variant="filled"
            placeholder="Indicar zona"
            className={classes.mt10}
            name="residencia"
            value={stateRequisitosOferta.residencia}
            onChange={handleRecoilStateChange}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="caption" gutterBottom>
          Capacitación acreditada en áreas de estudio como:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="areasEstudio"
            variant="filled"
            placeholder="Complete"
            multiline
            row={2}
            className={classes.mt10}
            name="areasEstudio"
            value={stateRequisitosOferta.areasEstudio}
            onChange={handleRecoilStateChange}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="caption" gutterBottom>
          Competencias:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="competencias"
            variant="filled"
            placeholder="Complete"
            multiline
            row={2}
            className={classes.mt10}
            name="competencias"
            value={stateRequisitosOferta.competencias}
            onChange={handleRecoilStateChange}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="caption" gutterBottom>
          Otros detalles:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="otrosDetalles"
            variant="filled"
            placeholder="Complete"
            multiline
            row={3}
            className={classes.mt10}
            name="otrosDetalles"
            value={stateRequisitosOferta.otrosDetalles}
            onChange={handleRecoilStateChange}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
