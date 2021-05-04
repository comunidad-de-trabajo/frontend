import {
  FormControl,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { AppRoutes } from '../../routes/AppRoutes';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

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

const ListadoDeEmpresas = ({ routes }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleFiltroChange = (e) => {
    history.push(e.target.value);
  };

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
              defaultValue="pendientes"
            >
              <MenuItem value="aceptadas">Aceptadas</MenuItem>
              <MenuItem value="pendientes">Pendientes</MenuItem>
              <MenuItem value="rechazadas">Rechazadas</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <AppRoutes routes={routes} />
      </Grid>
    </React.Fragment>
  );
};

ListadoDeEmpresas.propTypes = {
  routes: PropTypes.array,
};

export default ListadoDeEmpresas;
