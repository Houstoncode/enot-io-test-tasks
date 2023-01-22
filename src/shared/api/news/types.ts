export type News = {
  author: string;
  title: string;
  description: string;
  url: string;
  publishetAt: string;
  content: string;
};

export type NewsResponse = {
  status: 'ok';
  totalResults: number;
  articles: News[];
};
