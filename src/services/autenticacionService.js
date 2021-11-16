import api from './envio-mails-mailjet/api';

const AutenticacionService = {
  getAuthenticationAndRole: async function (token) {
    let auth = await api
      .post('/api/usuario/getAuth', { token })
      .then((res) => {
        return res.data.auth;
      })
      .catch((e) => {
        console.log(e.message);
        return { isAuthenticated: false, rol: null, empresaRegistrada: false };
      });
    return auth;
  },
};

export default AutenticacionService;