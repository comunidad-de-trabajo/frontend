import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import { useState } from 'react';

import usuario from './usuario.svg';
import {
  Grid,
  Backdrop,
  Snackbar,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  input: {
    display: 'none',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  image: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: '0 0 0 50px',
    borderRadius: '50%',
  },
}));

export default function ModalUpload() {
  const classes = useStyles();
  const [abrirCarga, setAbrirCarga] = useState(true);
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = () => {
    setOpenBackdrop(false);
    setOpenSnackbar(true);
    previsualizar();
  };

  const handleToggle = () => {
    setOpenBackdrop(!openBackdrop);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  function cargar() {
    setAbrirCarga(false);
  }

  function previsualizar() {
    const $imagenSubida = document.querySelector('#contained-button-file');
    const $imagenAVisualizar = document.querySelector('#previsualizar');
    const archivos = $imagenSubida.files;
    console.log(archivos[0]);
    const primerArchivo = archivos[0];
    const objectURL = URL.createObjectURL(primerArchivo);
    $imagenAVisualizar.src = objectURL;
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <>
      <Grid item xs={12} md={6}>
        <input
          accept="image/png, image/jpg"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={cargar}
          >
            <Typography align="center">Logo de Empresa</Typography>
            <CameraAltOutlinedIcon fontSize="large" />
          </Button>
        </label>
        <Button color="primary" disabled={abrirCarga} onClick={handleToggle}>
          Subir
        </Button>
        <Backdrop
          className={classes.backdrop}
          open={openBackdrop}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Typography variant="inherit" display="block" color="textSecondary">
          El logo debe ser formato JPG o PNG, con peso maximo de 500kb y un
          tamaño minimo de 200px por 200px y maximo de 500px por 500px.
        </Typography>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            Imagen cargada con exito
          </Alert>
        </Snackbar>
        {/*<Alert severity="error">This is an error message!</Alert>
        <Alert severity="warning">This is a warning message!</Alert>
        <Alert severity="info">This is an information message!</Alert>
        <Alert severity="success">This is a success message!</Alert>*/}
      </Grid>
      <Grid item xs={6}>
        <img
          id="previsualizar"
          alt=""
          src={usuario}
          className={classes.image}
        />
      </Grid>
    </>
  );
}
