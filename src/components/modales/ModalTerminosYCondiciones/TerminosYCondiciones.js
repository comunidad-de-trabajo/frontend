import React from 'react';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

export const TerminosYCondiciones = () => {
  return (
    <div>
      <Typography variant="subtitle1">
        <b>Condiciones del Servicio:</b>
      </Typography>
      <Typography variant="body2">
        El Portal de Empleo de la UNAHUR derivará postulantes acordes al perfil
        de acuerdo a la descripción del puesto efectuada. Esto no implica que se
        encontrarán en la búsqueda activa de empleo, o que los datos de los
        curriculum sean fiel reflejo de la realidad.
      </Typography>
      <Typography variant="body2">
        La UNAHUR no se hace responsable por la calidad de la información
        vertida en esas solicitudes, ni en su exactitud, veracidad y/o
        actualización.
      </Typography>

      <Typography variant="subtitle1">
        <b>Compromiso del Solicitante del Servicio:</b>
      </Typography>
      <Typography variant="body2">
        Si bien este servicio es gratuito, se requiere una contraprestación por
        parte de la empresa / organización. Esta consiste en información
        detallada de los postulantes: si han sido contactados, entrevistados,
        incorporados, rechazados o cualquier otro dato que nos actualice el
        estado de la búsqueda. Si el solicitante no cumpliera con esta parte del
        acuerdo, el Portal de Empleo de la UNAHUR podrá proceder a su
        inactivación, lo que implica que no podrá solicitar nuevamente el
        Servicio.
      </Typography>

      <Typography variant="subtitle1">
        <b>Limitaciones de la responsabilidad por el servicio:</b>
      </Typography>
      <Typography variant="body2">
        El Portal de Empleo de la UNAHUR no se hace responsable por el
        comportamiento de los postulantes derivados una vez incorporados a la
        empresa, ni intervendrá en disputas laborales de ningún tipo que
        pudieran generarse a partir de la relación laboral que se establezca con
        el empleado.
      </Typography>

      <Typography variant="subtitle1">
        <b>Alcance: Estos términos aplican para:</b>
      </Typography>
      <Typography variant="body2">
        El sitio web de la Universidad Nacional de Hurlingham, ubicado en
        {
          <NavLink to="http://www.unahur.edu.ar/" color="inherit">
            {' '}
            http://www.unahur.edu.ar
          </NavLink>
        }
        El mapa interactivo, ubicado en http://mapa.unahur.edu.ar
      </Typography>
      <Typography variant="body2">
        Al ingresar al Sitio web oficial de la UNAHUR (pagina web) estás
        aceptando los siguientes Términos y Condiciones:
      </Typography>
      <Typography variant="subtitle1">
        <b>Responsabilidad</b>
      </Typography>
      <Typography variant="body2">
        La UNAHUR no se responsabiliza por daños y pérdidas que surjan en
        relación con las consultas o visitas realizadas al Sitio Web.
      </Typography>
      <Typography variant="body2">
        La UNAHUR no puede garantizar que la transmisión de información por
        parte de los usuarios sea completamente segura. El usuario asume este
        riesgo.
      </Typography>
      <Typography variant="subtitle1">
        <b>El usuario se compromete a:</b>
      </Typography>
      <Typography variant="body2">
        No intentar acceder a datos restringidos o a intentar violar las
        barreras de seguridad para llegar a ellos No realizar búsquedas de
        vulnerabilidades o explotación de las mismas para cualquier fin No
        divulgar información acerca de la detección de vulnerabilidades
        encontradas en el sitio Enviar información de vulnerabilidades
        detectadas en el sitio a XXXX@XXXX .El usuario acepta las políticas de
        privacidad.
      </Typography>
      <Typography variant="subtitle1">
        <b>Propiedad Intelectual</b>
      </Typography>
      <Typography variant="subtitle1">
        <b> Modificación de términos y vigencia</b>
      </Typography>
      <Typography variant="body2">
        LA UNAHUR puede alterar las condiciones de estos términos en cualquier
        momento, comprometiéndose a anunciarlo por medio de un aviso en el mismo
        sitio web.
      </Typography>
      <Typography variant="body2">
        Enlaces con sitios, productos y servicios de terceros
      </Typography>
      <Typography variant="body2">
        El Sitio Web puede contener enlaces hacia otros sitios, productos y
        servicios que son propiedad y operados por terceros. La UNAHUR advierte
        que no administra ni controla estos sitios y no será responsable de sus
        contenidos ni de cualquier daño o perjuicio causado por tales
        contenidos, productos o servicios disponibles en dichos otros sitios.
      </Typography>
    </div>
  );
};
