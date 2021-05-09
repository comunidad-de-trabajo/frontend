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

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
}));

const ListaPendientes = () => {
  const classes = useStyles();
  const [empresasPendientes, setEmpresasPendientes] = useState([]);

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
      <div>
        <Divider />
        <List>
          {empresasPendientes.length > 0 &&
            empresasPendientes.map((emp) => (
              <div key={emp.id}>
                <ListItem>
                  <ListItemText primary={emp.nombre} />
                  <ListItemSecondaryAction>
                    <BotonesDeLista ver={true} aceptar={true} rechazar={true} />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </div>
            ))}
        </List>
      </div>
    </Grid>
  );
};

export default ListaPendientes;
