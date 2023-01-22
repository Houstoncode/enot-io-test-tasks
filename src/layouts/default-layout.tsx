import { Container } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/features/footer';
import { Header } from '@/features/header';

export const DefaultLayout: FC = () => {
  return (
    <Container maxWidth="sm">
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
