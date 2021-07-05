import React, { useEffect, useState } from 'react';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import { getTiposTelefonos } from '../../services/tipos-de-telefonos';
import PropTypes from 'prop-types';

export const InputTipoTelefono = (props) => {
  const [tiposDeTelefono, setTiposDeTelefono] = useState([]);
  const {
    tipoTelefono,
    handleRecoilStateChange,
    telefono,
    required,
    nameSelect,
    nameTextField,
    validacionTipoTelefono,
    validacionTelefono,
  } = props;

  useEffect(() => {
    fetchTiposDeTelefono();
  }, []);

  async function fetchTiposDeTelefono() {
    const tiposTelefono = await getTiposTelefonos();
    setTiposDeTelefono(tiposTelefono);
  }

  return (
    <>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Seleccioná un telefono
          </InputLabel>
          <Select
            required={required}
            id="TipoTelefono"
            labelId="TipoTelefono"
            fullWidth
            name={nameSelect}
            value={tipoTelefono}
            onChange={handleRecoilStateChange}
            error={validacionTipoTelefono}
          >
            {tiposDeTelefono &&
              tiposDeTelefono.map((tipoTelefono, index) => {
                return (
                  <MenuItem key={String(index)} value={tipoTelefono}>
                    {tipoTelefono}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          required={required}
          id="telefono"
          label="Teléfono"
          fullWidth
          type="number"
          name={nameTextField}
          value={telefono}
          onChange={handleRecoilStateChange}
          error={validacionTelefono}
          helperText={validacionTelefono}
        />
      </Grid>
    </>
  );
};

InputTipoTelefono.propTypes = {
  tipoTelefono: PropTypes.string,
  handleRecoilStateChange: PropTypes.func,
  telefono: PropTypes.number,
  required: PropTypes.bool,
  nameSelect: PropTypes.string,
  nameTextField: PropTypes.string,
  validacionTipoTelefono: PropTypes.string,
  validacionTelefono: PropTypes.string,
};
