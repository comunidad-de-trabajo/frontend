import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    display: 'grid',
    placeItems: 'center',
    margin: '240px auto 0 auto',
  },
  paginacion: {
    position: 'relative',
    margin: '0 auto',
  },
}));

const Paginacion = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  console.log(page);

  return (
    <div className={classes.root}>
      {/*
      <Pagination count={10} page={page} color="primary" onChange={handleChange} />
      */}
    </div>
  );
};

export default Paginacion;
