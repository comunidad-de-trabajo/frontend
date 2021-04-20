import { makeStyles } from '@material-ui/core';
import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    display: 'grid',
    placeItems: 'center',
  },
  paginacion: {
    position: 'relative',
    margin: '0 auto',
  },
}));

const Paginacion = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={10} color="primary" />
    </div>
  );
};

export default Paginacion;
