import React, { useEffect, useState } from 'react';
import {
  Grid,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  List,
  Divider,
  makeStyles,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import BotonesDeLista from './BotonesDeLista';
import { fetchListadoOfertas } from '../../services/listadoDeOfertas/endpointListadoOfertaXEmpresa';
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';

const useStyles = makeStyles((theme) => ({
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

const Oferta = () => {
  const classes = useStyles();
  const [ofertas, setOfertas] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);

  const fetchListadoDeOfertas = async () => {
    setOfertas(await fetchListadoOfertas());
  };
  console.log(ofertas);
  /* paginacion*/
  const [limite] = React.useState(25);
  const [page, setPage] = React.useState(1);
  const limitePaginacion = Math.ceil(ofertas.length / limite);
  const indexOfLastPost = page * limite;
  const indexOfFirstPost = indexOfLastPost - limite;
  const listaPaginada = ofertas.slice(indexOfFirstPost, indexOfLastPost);

  const handlePaginacion = (event, value) => {
    setPage(value);
  };
  /*-------*/

  useEffect(() => {
    fetchListadoDeOfertas();
    return () => {
      setOfertas([]);
    };
  }, []);

  return (
    <>
      <Grid item xs={12} md={12} className={classes.container}>
        <Divider />
        <List>
          {ofertas.length > 0 &&
            listaPaginada.map((oferta) => (
              <div key={oferta.id}>
                <ListItem>
                  <ListItemText primary={oferta.tituloBusqueda} />
                  <ListItemSecondaryAction>
                    <BotonesDeLista
                      ver={true}
                      editar={true}
                      darBaja={true}
                      oferta={oferta}
                      setOpenAlert={setOpenAlert}
                      render={fetchListadoDeOfertas}
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

export default Oferta;
