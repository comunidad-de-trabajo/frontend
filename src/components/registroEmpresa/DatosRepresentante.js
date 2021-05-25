import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AlertDialogSlide from '../modales/ModalTerminosYCondiciones/ModalTerminosYCondiciones';
import { useRecoilState } from 'recoil';
import { datosRepresentanteFormState } from '../../recoil/registro-empresa-atoms';
import { InputTipoTelefono } from '../common/InputTipoTelefono';
import { Button } from '@material-ui/core';

export const DatosRepresentante = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [datosRepresentante, setDatosRepresentante] = useRecoilState(
    datosRepresentanteFormState
  );

  const handleModal = () => {
    setOpenModal(!isOpenModal);
  };

  const handleRecoilStateChange = ({ target }) => {
    setDatosRepresentante({
      ...datosRepresentante,
      [target.name]: target.value,
    });
  };

  console.log(datosRepresentante);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos del representante
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombre"
            name="nombreRepresentante"
            label="Nombre/s"
            autoComplete="given-name"
            fullWidth
            value={datosRepresentante.nombreRepresentante}
            onChange={handleRecoilStateChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="apellido"
            name="apellidoRepresentante"
            label="Apellido/s"
            fullWidth
            autoComplete="family-name"
            value={datosRepresentante.apellidoRepresentante}
            onChange={handleRecoilStateChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cargo"
            name="rolRepresentante"
            label="Cargo / Rol"
            fullWidth
            autoComplete="shipping address-line1"
            value={datosRepresentante.rolRepresentante}
            onChange={handleRecoilStateChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="emailRepresentante"
            label="Email"
            fullWidth
            autoComplete="shipping address-line2"
            value={datosRepresentante.emailRepresentante}
            onChange={handleRecoilStateChange}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="codigoArea"
            name="codigoArea"
            label="Cod. Área"
            fullWidth
            autoComplete="shipping address-level2"
            value={datosRepresentante.emailRepresentante}
            onChange={handleRecoilStateChange}
          />
        </Grid> */}

        <InputTipoTelefono
          required={true}
          nameSelect="tipoTelefono1"
          nameTextField="telefono1"
          tipoTelefono={datosRepresentante.tipoTelefono1}
          handleRecoilStateChange={handleRecoilStateChange}
          telefono={datosRepresentante.telefono1}
        />

        <InputTipoTelefono
          required={false}
          nameSelect="tipoTelefono2"
          nameTextField="telefono2"
          tipoTelefono={datosRepresentante.tipoTelefono2}
          handleRecoilStateChange={handleRecoilStateChange}
          telefono={datosRepresentante.telefono2}
        />

        <Grid item xs={12}>
          <Button color="primary" onClick={handleModal}>
            Acepto términos y condiciones
          </Button>
        </Grid>
      </Grid>
      <AlertDialogSlide isActive={isOpenModal} handleChange={handleModal} />
    </React.Fragment>
  );
};
