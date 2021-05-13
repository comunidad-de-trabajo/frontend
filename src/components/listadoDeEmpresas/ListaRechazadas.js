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

const ListaRechazadas = () => {
  const classes = useStyles();
  const [empresasRechazadas, setEmpresasRechazadas] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
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

export default ListaRechazadas;
