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
import ModalEmpresas from './ModalEmpresas';
import BotonesDeLista from './BotonesDeLista';
import { fetchListadoEmpresas } from '../../services/listado-empresas/fetchListadoEmpresas';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
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
  const [open, setOpen] = useState(false);
  const [empresasAceptadas, setEmpresasAceptadas] = useState([]);

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
    <Grid item xs={12} md={12} className={classes.container}>
      <div>
        <Divider />
        <List>
          {empresasAceptadas.length > 0 &&
            empresasAceptadas.map((emp) => (
              <div key={emp.id}>
                <ListItem>
                  <ListItemText primary={emp.nombre} />
                  <ListItemSecondaryAction>
                    <BotonesDeLista
                      ver={true}
                      aceptar={false}
                      rechazar={false}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </div>
            ))}
        </List>
        <ModalEmpresas open={open} setOpen={setOpen} />
      </div>
    </Grid>
  );
};

export default ListaAceptadas;
