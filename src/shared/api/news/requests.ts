import { AxiosPromise } from 'axios';

import { apiInstance } from '../request';
import { NewsResponse } from './types';
const BASE_URL =
  'api/1/news?apikey=pub_1596706f5f4fe7b05c79214b1aa1f9ebc2721&q=cryptocurrency';

export const getNews = (): AxiosPromise<NewsResponse> => {
  return apiInstance.get(BASE_URL, { baseURL: 'https://newsdata.io/' });
};
