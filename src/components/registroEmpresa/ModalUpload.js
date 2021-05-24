import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import { useState } from 'react';
import usuario from './usuario.svg';

import { Grid, Snackbar, Typography } from '@material-ui/core';
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
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [image, setImage] = useState(usuario);

  const handleUpload = ({ target }) => {
    setImage(URL.createObjectURL(target.files[0]));
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

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
          onChange={handleUpload}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            <Typography align="center">Logo de Empresa</Typography>
            <CameraAltOutlinedIcon fontSize="large" />
          </Button>
        </label>
      </Grid>

      <Typography variant="inherit" display="block" color="textSecondary">
        El logo debe ser formato JPG o PNG, con peso maximo de 500kb y un tamaño
        minimo de 200px por 200px y maximo de 500px por 500px.
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

      <Grid item xs={6}>
        <img alt="logo" src={image} className={classes.image} />
      </Grid>
    </>
  );
}
