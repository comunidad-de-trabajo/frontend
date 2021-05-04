import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

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

export default function MediaCard({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  children: PropTypes.node,
};
