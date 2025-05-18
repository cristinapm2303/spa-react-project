import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app.apidog.com/project/878633',
});

export default api;
