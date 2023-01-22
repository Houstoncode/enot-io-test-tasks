import axios from 'axios';

import { API_URL } from '@/shared/app-config';

export const apiInstance = axios.create({
  baseURL: API_URL,
});
