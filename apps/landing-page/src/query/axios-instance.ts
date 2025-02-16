'use server';

import config from '@/config';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: config.apiUrl,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
