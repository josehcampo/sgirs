import axios from 'axios';

const baseURL = 'https://reportesgirscali.com/api/';

const client = axios.create({
  baseURL,
  withCredentials: true,
});

export default client;
