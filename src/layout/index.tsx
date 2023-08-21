import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Alert } from '../components/Alert/Alert';

export const Layout = () => {
  return (
    <Container maxW="960px">
      <Outlet />
      <Alert />
    </Container>
  );
};
