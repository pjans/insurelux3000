import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
    headers: {'X-Api-Key': process.env.REACT_APP_X_API_KEY}
  });

  export default instance;