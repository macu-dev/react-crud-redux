import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';

export const Alert = () => {
  const { message, type } = useSelector((state: RootState) => state.alert);
  const toast = useToast();

  return toast({
    title: message,
    variant: 'subtle',
    status: type,
    duration: 700,
    isClosable: true,
  });
};
