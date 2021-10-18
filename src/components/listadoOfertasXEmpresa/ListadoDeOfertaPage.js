import Typography from '@material-ui/core/Typography';
import ListadoDeOferta from './ListadoDeOferta';
import Paginacion from './Paginacion';
import MediaCard from '../common/MediaCard';

export default function ListadoDeOfertaPage() {
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
