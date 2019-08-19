import axios from 'axios';

const XHR = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL,
   timeout: 5000,
   headers: { 'X-Api-Key': process.env.REACT_APP_X_API_KEY }
});

export default XHR;