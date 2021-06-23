import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import { useState } from 'react';
import { Grid, Avatar, Typography } from '@material-ui/core';
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';
import { useRecoilState } from 'recoil';
import { logoEmpresaState } from '../../recoil/registro-empresa-atoms';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  input: {
    display: 'none',
  },
  camera: {
    margin: '0px 0px 0px 10px',
  },
  image: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: '0 0 15px 70px',
  },
}));

export default function ModalUpload() {
  const classes = useStyles();
  const [imagen, setImagen] = useRecoilState(logoEmpresaState);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alerta, setAlerta] = useState(0);

  function handleUpload(event) {
    const imagenCargada = event.target.files[0];
    validacion(imagenCargada);
    setOpenSnackbar(true);
    console.log(imagenCargada);
  }

  function validacion(imagen) {
    const imagenURL = URL.createObjectURL(imagen);

    if (imagen.type != 'image/png' && imagen.type != 'image/jpeg') {
      setAlerta(1);
    } else if (imagen.size > 50000) {
      setAlerta(2);
    } else {
      setAlerta(0);
      setImagen(imagenURL);
    }
  }

  return (
    <>
      <Grid item xs={12} md={6}>
        <Avatar src={imagen} className={classes.image} />
        <input
          accept="image/png, image/jpg"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleUpload}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            <Typography align="center">Logo de Empresa</Typography>
            <CameraAltOutlinedIcon
              fontSize="normal"
              className={classes.camera}
            />
          </Button>
        </label>
        {alerta == 0 && (
          <AlertaOperacionTerminada
            tipo="success"
            mensaje="Imagen cargada con exito"
            open={openSnackbar}
            setOpen={setOpenSnackbar}
          />
        )}
        {alerta == 1 && (
          <AlertaOperacionTerminada
            tipo="error"
            mensaje="La imagen debe ser formato JPG o PNG"
            open={openSnackbar}
            setOpen={setOpenSnackbar}
          />
        )}
        {alerta == 2 && (
          <AlertaOperacionTerminada
            tipo="error"
            mensaje="Debe tener un peso maximo 500KB"
            open={openSnackbar}
            setOpen={setOpenSnackbar}
          />
        )}
      </Grid>
      <Grid item xs={6}>
        <Typography variant="inherit" display="block" color="textSecondary">
          *LOGO importante:
        </Typography>
        <Typography variant="caption" display="block" color="textSecondary">
          Debe ser de formato JPG o PNG
        </Typography>
        <Typography variant="caption" display="block" color="textSecondary">
          Debe tener un peso maximo 500KB
        </Typography>
        <Typography variant="caption" display="block" color="textSecondary">
          Tamaño entre 200px x 200px 500px x 500px
        </Typography>
      </Grid>
    </>
  );
}
