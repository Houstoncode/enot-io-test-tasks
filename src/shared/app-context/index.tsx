import { createContext } from 'react';

export type AppContext = {
  showNews: boolean;
  toggleShowNews?: () => void;
};

export const AppContext = createContext<AppContext>({ showNews: false });
