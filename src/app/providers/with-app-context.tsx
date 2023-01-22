import { AppContext, useToggle } from '@/shared';

export const withAppContext = (component: () => React.ReactNode) => () => {
  const [showNews, toggleShowNews] = useToggle();

  return (
    <AppContext.Provider value={{ showNews, toggleShowNews }}>
      {component()}
    </AppContext.Provider>
  );
};
