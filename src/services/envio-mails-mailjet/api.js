import axios from 'axios';

const api = axios.create({
  baseURL: 'http://35.247.236.141:3000',
});

export default api;
