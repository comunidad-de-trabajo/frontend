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
import { fetchListadoEmpresas } from '../../services/listado-empresas/fetchListadoEmpresas';
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

const ListaVencidas = () => {
  const classes = useStyles();
  const [empresasRechazadas, setEmpresasRechazadas] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);

  /* paginacion*/
  const [limite] = React.useState(25);
  const [page, setPage] = React.useState(1);
  const limitePaginacion = Math.ceil(empresasRechazadas.length / limite);
  const indexOfLastPost = page * limite;
  const indexOfFirstPost = indexOfLastPost - limite;
  const listaPaginada = empresasRechazadas.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const handlePaginacion = (event, value) => {
    setPage(value);
  };
  /*-------*/

  const fetchListadoEmpresasRechazadas = async () => {
    setEmpresasRechazadas(await fetchListadoEmpresas('rechazada'));
  };

  useEffect(() => {
    fetchListadoEmpresasRechazadas();
    return () => {
      setEmpresasRechazadas([]);
    };
  }, []);

  return (
    <>
      <Grid item xs={12} md={12} className={classes.container}>
        <Divider />
        <List>
          {empresasRechazadas.length > 0 &&
            listaPaginada.map((emp) => (
              <div key={emp.id}>
                <ListItem>
                  <ListItemText primary={emp.nombreComercial} />
                  <ListItemSecondaryAction>
                    <BotonesDeLista
                      ver={true}
                      aceptar={true}
                      rechazar={false}
                      empresa={emp}
                      setOpenAlert={setOpenAlert}
                      render={fetchListadoEmpresasRechazadas}
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

export default ListaVencidas;
