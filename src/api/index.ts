import axios from 'axios';

const API_URL = import.meta.env.VITE_SERVER_URL;
export const axiosApi = axios.create({
  baseURL: API_URL,
});
