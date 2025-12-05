import axios from 'axios';

const client = axios.create({
  baseURL: 'https://todo-backend-3-baop.onrender.com'
});

export default client;
