import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import ListadoDeEmpresas from './ListadoDeEmpresas';
import Paginacion from './Paginacion';
import MediaCard from '../common/MediaCard';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export default function ListadoDeEmpresasPage({ routes }) {
  const history = useHistory();

  useEffect(() => {
    history.push('/listadoEmpresas/pendientes');
  }, [history]);

  return (
    <>
      <MediaCard>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          Lista de empresas
        </Typography>
        <ListadoDeEmpresas routes={routes} />
        <Paginacion />
      </MediaCard>
    </>
  );
}

ListadoDeEmpresasPage.propTypes = {
  routes: PropTypes.array,
};
