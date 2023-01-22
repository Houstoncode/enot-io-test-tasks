import { AxiosPromise } from 'axios';

import { apiInstance } from '../request';
import { NewsResponse } from './types';

const BASE_URL =
  'v2/everything?q=tesla&from=2022-12-22&sortBy=publishedAt&apiKey=e5f4cf5f161f488fa477ed82b67621ae';

export const getNews = (): AxiosPromise<NewsResponse> => {
  return apiInstance.get(BASE_URL, { baseURL: 'https://newsapi.org/' });
};
