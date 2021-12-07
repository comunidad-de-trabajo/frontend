import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  List,
  Divider,
  makeStyles,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import BotonesDeLista from './BotonesDeLista';
import { fetchListadoEmpresas } from '../../services/listado-empresas/fetchListadoEmpresas';
const useStyles = makeStyles((theme) => ({
  mensaje: {
    marginTop: theme.spacing(20),
  },
  container: {
    marginTop: theme.spacing(4),
  },
  paginacion: {
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
    margin: '240px auto 0 auto',
  },
  botonVer: {
    margin: '0 2px 0 2px',
    borderRadius: '10%',
    backgroundColor: '#FFD646',
    '&:hover': {
      backgroundColor: '#e8c23c',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
}));

const ListaAceptadas = () => {
  const classes = useStyles();
  const [empresasAceptadas, setEmpresasAceptadas] = useState([]);

  /* paginacion*/
  const [limite] = React.useState(25);
  const [page, setPage] = React.useState(1);
  const limitePaginacion = Math.ceil(empresasAceptadas.length / limite);
  const indexOfLastPost = page * limite;
  const indexOfFirstPost = indexOfLastPost - limite;
  const listaPaginada = empresasAceptadas.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const handlePaginacion = (event, value) => {
    setPage(value);
  };
  /*-------*/

  const fetchListadoEmpresasAceptadas = async () => {
    setEmpresasAceptadas(await fetchListadoEmpresas('aceptada'));
  };

  useEffect(() => {
    fetchListadoEmpresasAceptadas();
    return () => {
      setEmpresasAceptadas([]);
    };
  }, []);

  return (
    <>
      <Grid item xs={12} md={12} className={classes.container}>
        <Divider />
        <List>
          {empresasAceptadas.length == 0 && (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.mensaje}
            >
              <Typography>No hay registro de empresas aceptadas</Typography>
            </Grid>
          )}
          {empresasAceptadas.length > 0 &&
            listaPaginada.map((emp) => (
              <div key={emp.id}>
                <ListItem>
                  <ListItemText primary={emp.nombreComercial} />
                  <ListItemSecondaryAction>
                    <BotonesDeLista
                      ver={true}
                      aceptar={false}
                      rechazar={false}
                      empresa={emp}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </div>
            ))}
        </List>
      </Grid>
      <Pagination
        className={classes.paginacion}
        count={limitePaginacion}
        page={page}
        color="primary"
        onChange={handlePaginacion}
      />
    </>
  );
};

export default ListaAceptadas;
