import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../app/store';
import { resetAlert } from '../../features/alert/alertSlice';

export const Alert = () => {
  const { message, type } = useSelector((state: RootState) => state.alert);
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      toast({
        title: message,
        status: type,
        duration: 1000,
        isClosable: true,
        onCloseComplete: () => dispatch(resetAlert()),
      });
    }
  }, [message, type, toast, dispatch]);
  return null;
};
