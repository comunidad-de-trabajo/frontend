import axios from 'axios';

const AutenticacionService = {
  getAuthenticationAndRole: async function (token) {
    let auth = await axios
      .post('http://localhost:3001/api/usuario/getAuth', { token })
      .then((res) => {
        return res.data.auth;
      })
      .catch((e) => {
        console.log(e.message);
        return { isAuthenticated: false, rol: null };
      });
    return auth;
  },
};

export default AutenticacionService;
