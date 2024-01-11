import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

const client = axios.create({
  baseURL,
  withCredentials: true,
});

export default client;
