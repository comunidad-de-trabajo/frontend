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
import BotonesDeLista from './BotonesDeLista';
import { fetchListadoEmpresas } from '../../services/listado-empresas/fetchListadoEmpresas';
import AlertaOperacionTerminada from '../common/AlertaOperacionTerminada';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
}));

const ListaPendientes = () => {
  const classes = useStyles();
  const [empresasPendientes, setEmpresasPendientes] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);

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
    <Grid item xs={12} md={12} className={classes.container}>
      <Divider />
      <List>
        {empresasPendientes.length > 0 &&
          empresasPendientes.map((emp) => (
            <div key={emp.id}>
              <ListItem>
                <ListItemText primary={emp.nombre} />
                <ListItemSecondaryAction>
                  <BotonesDeLista
                    ver={true}
                    aceptar={true}
                    rechazar={true}
                    empresa={emp}
                    setOpenAlert={setOpenAlert}
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
  );
};

export default ListaPendientes;
