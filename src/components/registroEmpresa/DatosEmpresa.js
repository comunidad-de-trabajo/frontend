import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import {
  getAllLocalidades,
  getAllProvincias,
} from '../../services/DatoGeograficoArg';
import { getTipoEmpleador } from '../../services/registroDeEmpresas/empleador';
import { useRecoilState } from 'recoil';
import { datosEmpresaFormState } from '../../recoil/registro-empresa';
import { sortedStrings } from '../../helpers/sortStrings';

export default function DatosEmpresa() {
  const [provincias, setProvincias] = useState([]);
  const [localidades, setLocalidades] = useState([]);
  // const [provinciaActual, setProvinciaActual] = useState([]);
  const [tiposEmpleador, setTiposEmpleador] = useState(null);
  const [datosEmpresa, setDatosEmpresa] = useRecoilState(datosEmpresaFormState);

  // const handleChange = (event) => {
  //   setProvinciaActual(event.target.value);
  // };

  const handleRecoilStateChange = (event) => {
    setDatosEmpresa({
      ...datosEmpresa,
      [event.target.name]: event.target.value,
    });
  };

  console.log(datosEmpresa);

  async function fetchProvincias() {
    const jsonProvincias = await getAllProvincias();
    const provinciasOrdenadas = sortedStrings(jsonProvincias.provincias);
    setProvincias(provinciasOrdenadas);
  }

  async function fetchLocalidades(nombreProvincia) {
    if (datosEmpresa.provinciaActual.length > 0) {
      const jsonLocalidades = await getAllLocalidades(nombreProvincia);
      const localidadesOrdenadas = sortedStrings(jsonLocalidades.departamentos);
      setLocalidades(localidadesOrdenadas);
    }
  }

  async function fetchTiposEmpleador() {
    setTimeout(async () => {
      const tipoEmpleador = await getTipoEmpleador();
      setTiposEmpleador(tipoEmpleador);
    }, 1000);
  }

  useEffect(() => {
    fetchLocalidades(datosEmpresa.provinciaActual);
    // eslint-disable-next-line
  }, [datosEmpresa.provinciaActual]);

  useEffect(() => {
    fetchProvincias();
    fetchTiposEmpleador();
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos de la empresa
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombreComercial"
            name="nombreComercial"
            label="Nombre comercial / Alias"
            fullWidth
            value={datosEmpresa.nombreComercial}
            onChange={handleRecoilStateChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Provincia</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="provinciaActual"
              value={datosEmpresa.provinciaActual}
              onChange={handleRecoilStateChange}
            >
              {provincias.map((p) => (
                <MenuItem key={p.id} value={p.nombre}>
                  {p.nombre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="razonSocial"
            name="razonSocial"
            label="Razon social"
            value={datosEmpresa.razonSocial}
            onChange={handleRecoilStateChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl
            fullWidth
            disabled={!datosEmpresa.provinciaActual.length > 0}
          >
            <InputLabel id="demo-simple-select-label">Localidad</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="localidad"
              value={datosEmpresa.localidad}
              onChange={handleRecoilStateChange}
            >
              {localidades.map((l) => (
                <MenuItem key={l.id} value={l.nombre}>
                  {l.nombre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cuit"
            name="cuit"
            label="CUIT"
            type="number"
            fullWidth
            value={datosEmpresa.cuit}
            onChange={handleRecoilStateChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="direccion"
            name="direccion"
            label="Dirección"
            fullWidth
            value={datosEmpresa.direccion}
            onChange={handleRecoilStateChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Tipo de empleador
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="tipoEmpleador"
              value={datosEmpresa.tipoEmpleador}
              onChange={handleRecoilStateChange}
            >
              {tiposEmpleador &&
                tiposEmpleador.map((tipo, index) => {
                  return (
                    <MenuItem value={tipo} key={String(index)}>
                      {tipo}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="piso"
            name="piso"
            label="Piso"
            fullWidth
            value={datosEmpresa.piso}
            onChange={handleRecoilStateChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="CP"
            name="codigoPostal"
            label="Codigo Postal"
            type="number"
            fullWidth
            autoComplete="shipping postal-code"
            value={datosEmpresa.codigoPostal}
            onChange={handleRecoilStateChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="departamento"
            name="departamento"
            label="Departamento"
            fullWidth
            value={datosEmpresa.departamento}
            onChange={handleRecoilStateChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tel"
            name="tel"
            label="Telefono"
            type="number"
            fullWidth
            value={datosEmpresa.telefono}
            onChange={handleRecoilStateChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
