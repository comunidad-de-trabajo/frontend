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
import { getAllOfertas } from '../../services/listado-ofertas/listado-ofertas-service';
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';
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

const ListaEnviadas = () => {
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
    setOfertasPendientes(await getAllOfertas('enviada'));
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
          {ofertasPendientes.length == 0 && (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.mensaje}
            >
              <Typography>No hay ofertas enviadas</Typography>
            </Grid>
          )}
          {ofertasPendientes.length > 0 &&
            listaPaginada.map((oferta) => (
              <div key={oferta.id}>
                <ListItem>
                  <ListItemText primary={oferta.tituloBusqueda} />
                  <ListItemSecondaryAction>
                    <BotonesDeLista
                      ver={true}
                      darDeBaja={true}
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

export default ListaEnviadas;
