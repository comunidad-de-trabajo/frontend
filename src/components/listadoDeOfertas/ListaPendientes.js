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
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';
import { getAllOfertas } from '../../services/listado-ofertas/listado-ofertas-service';

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
}));

const ListaOfertasPendientes = () => {
  const classes = useStyles();
  const [ofertasPendientes, setOfertasPendientes] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);

  /* paginacion*/
  const [limite] = React.useState(25);
  const [page, setPage] = React.useState(1);
  const limitePaginacion = Math.ceil(ofertasPendientes.length / limite);
  const indexOfLastPost = page * limite;
  const indexOfFirstPost = indexOfLastPost - limite;
  const listaPaginada = ofertasPendientes.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const handlePaginacion = (event, value) => {
    setPage(value);
  };
  /*-------*/

  const fetchListadoOfertasPendientes = async () => {
    setOfertasPendientes(await getAllOfertas('pendiente'));
  };

  const eliminarOferta = (id) => {
    setOfertasPendientes(
      ofertasPendientes.filter((oferta) => {
        return oferta.id != id;
      })
    );
  };

  useEffect(() => {
    fetchListadoOfertasPendientes();
    return () => {
      setOfertasPendientes([]);
    };
  }, []);

  return (
    <>
      <Grid item xs={12} md={12} className={classes.container}>
        <Divider />
        <List>
          {ofertasPendientes.length > 0 &&
            listaPaginada.map((oferta) => (
              <div key={oferta.id}>
                <ListItem>
                  <ListItemText primary={oferta.tituloBusqueda} />
                  <ListItemSecondaryAction>
                    <BotonesDeLista
                      ver={true}
                      enviar={true}
                      id={oferta.id}
                      setOpenAlert={setOpenAlert}
                      render={fetchListadoOfertasPendientes}
                      eliminarOferta={eliminarOferta}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </div>
            ))}
          {ofertasPendientes.length == 0 && (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.mensaje}
            >
              <Typography>No hay ofertas pendientes</Typography>
            </Grid>
          )}
        </List>
        <AlertaOperacionTerminada
          tipo="success"
          open={openAlert}
          setOpen={setOpenAlert}
        />
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

export default ListaOfertasPendientes;
