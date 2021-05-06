import axios from 'axios';

export async function getAllProvincias() {
  const response = await axios.get(
    'https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre'
  );
  return response.data;
}

export async function getAllLocalidades(nombreProvincia) {
  const response = await axios.get(
    `https://apis.datos.gob.ar/georef/api/departamentos?formato=json&provincia=${nombreProvincia}&max=135`
  );
  return response.data;
}
