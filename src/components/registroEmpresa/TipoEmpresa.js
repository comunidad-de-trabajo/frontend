import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import ModalUpload from './ModalUpload';
import { getTiposDeEmpresa } from '../../services/registroDeEmpresas/tipos-de-empresas';
import { getAreasDeInteres } from '../../services/registroDeEmpresas/areas-de-interes';

export default function TipoEmpresa() {
  const [tiposDeEmpresa, setTiposDeEmpresa] = useState(null);
  const [areasDeInteres, setAreasDeInteres] = useState(null);

  async function fetchTiposDeEmpresa() {
    setTimeout(async () => {
      const tiposEmpresa = await getTiposDeEmpresa();
      setTiposDeEmpresa(tiposEmpresa);
    }, 1000);
  }

  async function fetchAreasDeInteres() {
    setTimeout(async () => {
      const areasInteres = await getAreasDeInteres();
      setAreasDeInteres(areasInteres);
    }, 1000);
  }

  useEffect(() => {
    fetchTiposDeEmpresa();
    fetchAreasDeInteres();
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tipo de Empresa
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Areas de interes
            </InputLabel>
            <Select
              required
              id="Areas de interes"
              labelId="Areas de interes"
              fullWidth
              defaultValue=""
            >
              {areasDeInteres &&
                areasDeInteres.map((area, index) => {
                  return (
                    <MenuItem key={String(index)} value={area}>
                      {area}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField required id="Sitio web" label="Sitio web" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="Email" label="Email" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Tipo de empresa
            </InputLabel>
            <Select required id="Tipo" labelId="Tipo" fullWidth defaultValue="">
              {tiposDeEmpresa &&
                tiposDeEmpresa.map((tipoEmpresa, index) => {
                  return (
                    <MenuItem key={String(index)} value={tipoEmpresa}>
                      {tipoEmpresa}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Descripcion"
            label="Descripcion"
            multiline
            fullWidth
            helperText="Descripción general de la empresa. Puedo incluir datos sobre su história, 
            Equipo directivo y / o de trabajo Misión, Visión y Valores.Productos o servicios 
            que brinda."
          />
        </Grid>
        <ModalUpload />
      </Grid>
    </React.Fragment>
  );
}
