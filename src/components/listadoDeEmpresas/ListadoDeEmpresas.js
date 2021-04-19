import {
  FormControl,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import ListaAceptadas from './ListaAceptadas';
import ListaPendientes from './ListaPendientes';
import ListaRechazadas from './ListaRechazadas';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titulo: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  subtitulo: {
    marginLeft: theme.spacing(2),
  },
  filtro: {
    marginRight: theme.spacing(2),
  },
}));

const ListadoDeEmpresas = () => {
  const classes = useStyles();
  const [filtro, setFiltro] = useState('');

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
    console.log(filtro);
  };

  function getElementoSegunFiltro() {
    switch (filtro) {
      case 'pendientes':
        return <ListaPendientes />;
      case 'aceptadas':
        return <ListaAceptadas />;
      case 'rechazadas':
        return <ListaRechazadas />;
      default:
        return <ListaPendientes />;
    }
  }

  return (
    <React.Fragment>
      <Grid container className={classes.root}>
        <Grid item xs={8} sm={10}>
          <Typography variant="h6" className={classes.subtitulo}>
            Empresas
          </Typography>
        </Grid>
        <Grid item xs={4} sm={2}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              displayEmpty
              onChange={handleFiltroChange}
              className={classes.filtro}
            >
              <MenuItem value="aceptadas">Aceptadas</MenuItem>
              <MenuItem value="pendientes">Pendientes</MenuItem>
              <MenuItem value="rechazadas">Rechazadas</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {getElementoSegunFiltro()}
      </Grid>
    </React.Fragment>
  );
};

export default ListadoDeEmpresas;
