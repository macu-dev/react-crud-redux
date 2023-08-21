import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

import { setAlert } from '../../features/alert/alertSlice';
import { addTask } from '../../features/tasks/tasksSlice';

export const TaskCreate = () => {
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task.title || !task.description) return;

    dispatch(
      addTask({
        ...task,
        id: uuidv4(),
      }),
    );

    dispatch(
      setAlert({
        message: 'Tarea creada!',
        type: 'success',
      }),
    );

    navigate('/tasks');
  };

  return (
    <>
      <Heading sx={{ marginY: 2 }}>Crear tarea</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Titulo de la tarea</FormLabel>
          <Input
            name="title"
            sx={{ marginBottom: 2 }}
            type="text"
            value={task.title}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Descripcion de la tarea</FormLabel>
          <Input
            name="description"
            sx={{ marginBottom: 2 }}
            type="text"
            value={task.description}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          colorScheme="teal"
          sx={{ width: '100%', marginTop: 2 }}
          type="submit"
          variant="solid"
        >
          GUARDAR
        </Button>
      </form>
    </>
  );
};
