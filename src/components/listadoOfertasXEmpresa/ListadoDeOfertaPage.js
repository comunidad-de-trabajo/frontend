import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import ListadoDeOferta from './ListadoDeOferta';
import Paginacion from './Paginacion';
import MediaCard from '../common/MediaCard';
import PropTypes from 'prop-types';

export default function ListadoDeEmpresasPage() {
  return (
    <>
      <MediaCard>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          Lista de Ofertas
        </Typography>
        <ListadoDeOferta />
        <Paginacion />
      </MediaCard>
    </>
  );
}

ListadoDeEmpresasPage.propTypes = {
  routes: PropTypes.array,
};
