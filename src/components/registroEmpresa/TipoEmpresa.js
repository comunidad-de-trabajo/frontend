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
import { useRecoilState } from 'recoil';
import { tipoEmpresaFormState } from '../../recoil/registro-empresa-atoms';
import { tipoEmpresaValidacionState } from '../../recoil/registro-empresa-validation-atoms';
import { tipoEmpresaValidations } from './validation/validationByField';

export default function TipoEmpresa() {
  const [tiposDeEmpresa, setTiposDeEmpresa] = useState(null);
  const [areasDeInteres, setAreasDeInteres] = useState(null);
  const [tipoEmpresaValues, setTipoEmpresaValues] = useRecoilState(
    tipoEmpresaFormState
  );
  const [validacion, setValidacion] = useRecoilState(
    tipoEmpresaValidacionState
  );

  const handleRecoilStateChange = ({ target }) => {
    setTipoEmpresaValues({
      ...tipoEmpresaValues,
      [target.name]: target.value,
    });
    setValidacion({
      ...validacion,
      [target.name]: tipoEmpresaValidations[target.name](target.value),
    });
  };

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
              name="areaDeInteres"
              value={tipoEmpresaValues.areaDeInteres}
              onChange={handleRecoilStateChange}
              error={validacion.areaDeInteres}
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
          <TextField
            required
            id="Sitio web"
            label="Sitio web"
            fullWidth
            name="sitioWeb"
            value={tipoEmpresaValues.sitioWeb}
            onChange={handleRecoilStateChange}
            error={validacion.sitioWeb}
            helperText={validacion.sitioWeb}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="Email"
            label="Email"
            fullWidth
            name="email"
            value={tipoEmpresaValues.email}
            onChange={handleRecoilStateChange}
            error={validacion.email}
            helperText={validacion.email}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Tipo de empresa
            </InputLabel>
            <Select
              required
              id="Tipo"
              labelId="Tipo"
              fullWidth
              name="tipoEmpresa"
              value={tipoEmpresaValues.tipoEmpresa}
              onChange={handleRecoilStateChange}
              error={validacion.tipoEmpresa}
              helperText={validacion.tipoEmpresa}
            >
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
            name="descripcion"
            value={tipoEmpresaValues.descripcion}
            onChange={handleRecoilStateChange}
            error={validacion.descripcion}
          />
        </Grid>
        <ModalUpload />
      </Grid>
    </React.Fragment>
  );
}
