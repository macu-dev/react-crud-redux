import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

export const Actions = () => {
  return (
    <div>
      <Button colorScheme="red" leftIcon={<DeleteIcon />} variant="solid">
        Borrar
      </Button>
      <Button colorScheme="red" leftIcon={<EditIcon />} variant="solid">
        Editar
      </Button>
    </div>
  );
};
