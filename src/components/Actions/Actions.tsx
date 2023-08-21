import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setAlert } from '../../features/alert/alertSlice';
import { deleteTask } from '../../features/tasks/tasksSlice';

export const Actions = ({ taskId }: { taskId: string }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = useCallback(
    (id: string) => {
      dispatch(deleteTask(id));
      dispatch(
        setAlert({
          message: 'Tarea eliminado',
          type: 'error',
        }),
      );
    },
    [dispatch],
  );
  return (
    <div>
      <Button
        colorScheme="teal"
        leftIcon={<EditIcon />}
        marginRight={2}
        variant="solid"
        onClick={() => navigate(`/edit/${taskId}`)}
      >
        Editar
      </Button>
      <Button
        colorScheme="red"
        leftIcon={<DeleteIcon />}
        variant="solid"
        onClick={() => handleDelete(taskId)}
      >
        Borrar
      </Button>
    </div>
  );
};
