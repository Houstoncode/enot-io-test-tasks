import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '@/layouts';

const DashboardPage = lazy(() => import('./dashboard'));

export const Routing = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
