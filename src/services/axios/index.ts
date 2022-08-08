import axios from 'axios';

import config from '../../config/axios';

const api = axios.create({
  baseURL: config.BASE_URL,
});

export default api;
