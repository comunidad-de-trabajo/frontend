import axios from 'axios';

const api = axios.create({
  baseURL: 'https://35.247.236.141:3000',
});

export default api;
