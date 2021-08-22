import React from 'react';
import {
  Divider,
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
    <Grid item xs={8} sm={12}>
      <Grid item xs={6} sm={6} className={classes.mt10}>
        <Typography variant="h6" gutterBottom>
          Requisitos:
        </Typography>
        <Typography variant="subtitle" gutterBottom>
          * Marque si/no segun corresponda.
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
      <Divider />
      <div className={classes.containerItem}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle" color="textSecondary">
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
      <Divider />
      <div className={classes.containerItem}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle" color="textSecondary">
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
      <Divider />
      <div className={classes.containerItem}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle" color="textSecondary">
            Licencia de conducir:
          </Typography>
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
      <Divider />
      <div className={classes.containerItem}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle" color="textSecondary">
            Edad:
          </Typography>
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
      {stateRequisitosOferta.edad === 'si' ? (
        <Grid item sm={6}>
          <div
            className={(classes.mt15, classes.containerItem)}
            style={{ marginBottom: '8px' }}
          >
            <div className={classes.containerItem}>
              <Typography variant="caption" color="textSecondary">
                Desde:
              </Typography>
              <TextField
                id="desdeEdad"
                size="small"
                className={classes.ml15}
                name="desdeEdad"
                value={stateRequisitosOferta.desdeEdad}
                onChange={handleRecoilStateChange}
              />
            </div>

            <div
              className={classes.containerItem}
              style={{ marginLeft: '15px' }}
            >
              <Typography variant="caption" color="textSecondary">
                Hasta:
              </Typography>
              <TextField
                id="hastaEdad"
                size="small"
                className={classes.ml15}
                name="hastaEdad"
                value={stateRequisitosOferta.hastaEdad}
                onChange={handleRecoilStateChange}
              />
            </div>
          </div>
        </Grid>
      ) : null}

      <Divider mt={1} />
      <div className={classes.containerItem}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle" color="textSecondary">
            Experiencia previa:
          </Typography>
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
      <Divider />
      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="subtitle2">
          Complete los campos requeridos:{' '}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            required
            id="residencia"
            placeholder="Indicar zona"
            className={classes.mt10}
            name="residencia"
            label="Residencia"
            value={stateRequisitosOferta.residencia}
            onChange={handleRecoilStateChange}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <Typography variant="caption" gutterBottom></Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="areasEstudio"
            multiline
            row={2}
            className={classes.mt10}
            name="areasEstudio"
            label="Capacitación acreditada en áreas de estudio"
            placeholder="Ej: Informatica."
            value={stateRequisitosOferta.areasEstudio}
            onChange={handleRecoilStateChange}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <FormControl fullWidth>
          <TextField
            required
            id="competencias"
            multiline
            row={2}
            className={classes.mt10}
            name="competencias"
            label="Competencias"
            placeholder="Ej: Liderazgo."
            value={stateRequisitosOferta.competencias}
            onChange={handleRecoilStateChange}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} className={classes.mt15}>
        <FormControl fullWidth>
          <TextField
            required
            id="otrosDetalles"
            multiline
            row={3}
            className={classes.mt10}
            name="otrosDetalles"
            label="Otros detalles"
            placeholder="Otros detalles"
            value={stateRequisitosOferta.otrosDetalles}
            onChange={handleRecoilStateChange}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
