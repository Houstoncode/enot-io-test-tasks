import { useMemo } from 'react';

import { useNews } from './useNews';

// TODO: write tests

export const useRandomNews = () => {
  const { data, isFetching } = useNews();

  const newsData = useMemo(() => data || [], [data]);

  const randomArticle = useMemo(
    () => newsData[Math.floor(Math.random() * newsData.length)],
    [newsData],
  );

  return { data: randomArticle, isFetching };
};
