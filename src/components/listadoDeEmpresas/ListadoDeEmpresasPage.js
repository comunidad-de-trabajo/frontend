import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StickyHeadTable from './ListadoDeEmpresas';
import ListadoDeEmpresas from './ListadoDeEmpresas';

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
            <ListadoDeEmpresas />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
