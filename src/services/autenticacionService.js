import axios from 'axios';

const AutenticacionService = {
  getRol: async function (token) {
    let rol = await axios
      .post('http://localhost:3001/api/usuario/getRole', { token })
      .then((res) => {
        return res.data.rol;
      })
      .catch((e) => {
        console.log(e.message);
      });

    return rol;
  },
};

export default AutenticacionService;
