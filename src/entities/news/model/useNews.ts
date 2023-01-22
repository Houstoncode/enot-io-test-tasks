import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { getNews, News, NewsResponse } from '@/shared/api/news';

import { NEWS_LIST_QUERY_KEY } from './consts';

// TODO: write tests

export const useNews = () =>
  useQuery<AxiosResponse<NewsResponse, unknown>, unknown, News[]>(
    NEWS_LIST_QUERY_KEY,
    () => getNews(),
    { select: ({ data }) => data.articles },
  );
