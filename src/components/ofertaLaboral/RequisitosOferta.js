import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';

export const RequisitosOferta = () => {
  return (
    <Grid xs={8}>
      <Grid item xs={12} style={{ marginTop: '15px' }}>
        <Typography variant="subtitle2" gutterBottom>
          Requisitos:
        </Typography>
        <Typography variant="caption" gutterBottom>
          *Marque si/no segun corresponda.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        align="center"
        style={{ marginTop: '15px', backgroundColor: 'red' }}
      >
        <Typography variant="caption">Si</Typography>
        <Typography variant="caption">no</Typography>
      </Grid>

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
                // label={<Typography variant="caption">Si</Typography>}
                labelPlacement="top"
              />
              <FormControlLabel
                value="top"
                control={<Radio color="primary" />}
                // label={<Typography variant="caption">No</Typography>}
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </div>

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

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption">Licencia de conducir:</Typography>
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
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
        <Grid item xs={8} sm={4}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="caption">Desde:</Typography>
            <TextField
              id="filled-basic"
              variant="filled"
              size="small"
              style={{ marginLeft: '10px' }}
            />
          </div>
        </Grid>

        <Grid item xs={8} sm={4}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '15px',
            }}
          >
            <Typography variant="caption">Hasta:</Typography>
            <TextField
              id="filled-basic"
              variant="filled"
              size="small"
              style={{ marginLeft: '10px' }}
            />
          </div>
        </Grid>
      </div>

      <Grid item xs={24} sm={12}>
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="caption">Experiencia previa:</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              component="fieldset"
              // className={classes.textArea}
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
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            variant="filled"
            placeholder="Complete los datos requeridos"
            multiline
            row={2}
            style={{ marginTop: '10px' }}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} spacing={6} style={{ marginTop: '15px' }}>
        <Typography variant="caption" gutterBottom>
          Residencia:
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
          Capacitación acreditada en áreas de estudio como:
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
          Competencias:
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
          Otros detalles:
        </Typography>
        <FormControl fullWidth>
          <TextField
            required
            id="filled-start-adornment"
            variant="filled"
            placeholder="Complete"
            multiline
            row={3}
            style={{ marginTop: '10px' }}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};
