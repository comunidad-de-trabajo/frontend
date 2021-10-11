import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Paginacion from './Paginacion';
import MediaCard from '../common/MediaCard';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import ListadoDeOfertas from './ListadoDeOfertas';

export default function ListadoDeOfertasPage({ routes }) {
  const history = useHistory();

  useEffect(() => {
    history.push('/listadoOfertasADM/pendientes');
  }, [history]);

  return (
    <>
      <MediaCard>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          Lista de ofertas
        </Typography>
        <ListadoDeOfertas routes={routes} />
        <Paginacion />
      </MediaCard>
    </>
  );
}

ListadoDeOfertasPage.propTypes = {
  routes: PropTypes.array,
};
