import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Container maxW="960px">
      <Outlet />
    </Container>
  );
};
