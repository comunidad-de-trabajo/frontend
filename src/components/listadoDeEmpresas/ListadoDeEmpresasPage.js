import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListadoDeEmpresas from './ListadoDeEmpresas';
import Paginacion from './Paginacion';

const useStyles = makeStyles({
  root: {
    width: 1000,
    minHeight: 600,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ textAlign: 'center' }}
            >
              Lista de empresas
            </Typography>
          </CardContent>
        </CardActionArea>
        <ListadoDeEmpresas />
        <Paginacion />
      </Card>
    </div>
  );
}
