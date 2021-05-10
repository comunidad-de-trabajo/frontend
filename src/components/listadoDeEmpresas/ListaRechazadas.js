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

const ListaRechazadas = () => {
  const classes = useStyles();
  const [empresasRechazadas, setEmpresasRechazadas] = useState([]);

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
    <Grid item xs={12} md={12} className={classes.container}>
      <div>
        <Divider />
        <List>
          {empresasRechazadas.length > 0 &&
            empresasRechazadas.map((emp) => (
              <div key={emp.id}>
                <ListItem>
                  <ListItemText primary={emp.nombre} />
                  <ListItemSecondaryAction>
                    <BotonesDeLista
                      ver={true}
                      aceptar={true}
                      rechazar={false}
                      empresa={emp}
                    />
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

export default ListaRechazadas;
