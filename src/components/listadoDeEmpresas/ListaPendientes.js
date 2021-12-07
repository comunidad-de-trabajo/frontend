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
}));

const ListaPendientes = () => {
  const classes = useStyles();
  const [empresasPendientes, setEmpresasPendientes] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);

  /* paginacion*/
  const [limite] = React.useState(25);
  const [page, setPage] = React.useState(1);
  const limitePaginacion = Math.ceil(empresasPendientes.length / limite);
  const indexOfLastPost = page * limite;
  const indexOfFirstPost = indexOfLastPost - limite;
  const listaPaginada = empresasPendientes.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const handlePaginacion = (event, value) => {
    setPage(value);
  };
  /*-------*/

  const fetchListadoEmpresasPendientes = async () => {
    setEmpresasPendientes(await fetchListadoEmpresas('pendiente'));
  };

  useEffect(() => {
    fetchListadoEmpresasPendientes();
    return () => {
      setEmpresasPendientes([]);
    };
  }, []);

  return (
    <>
      <Grid item xs={12} md={12} className={classes.container}>
        <Divider />
        <List>
          {empresasPendientes.length == 0 && (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.mensaje}
            >
              <Typography>No hay solicitudes de empresas</Typography>
            </Grid>
          )}
          {empresasPendientes.length > 0 &&
            listaPaginada.map((emp) => (
              <div key={emp.id}>
                <ListItem>
                  <ListItemText primary={emp.nombreComercial} />
                  <ListItemSecondaryAction>
                    <BotonesDeLista
                      ver={true}
                      aceptar={true}
                      rechazar={true}
                      empresa={emp}
                      setOpenAlert={setOpenAlert}
                      render={fetchListadoEmpresasPendientes}
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

export default ListaPendientes;
