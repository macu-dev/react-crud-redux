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
import { isEmpty } from 'ramda';

import { setAlert } from '../../features/alert/alertSlice';
import { addTask } from '../../features/tasks/tasksSlice';

type TaskType = {
  id: string;
  title: string;
  description: string;
};

export const TaskCreate = () => {
  const [task, setTask] = useState<TaskType>({
    id: '',
    title: '',
    description: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateTask = (
    prevTask: TaskType,
    name: string,
    value: string,
  ): TaskType => ({
    ...prevTask,
    [name]: value,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedTask = updateTask(task, e.target.name, e.target.value);
    setTask(updatedTask);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmpty(task.title || task.description)) return;

    const newTask: TaskType = {
      ...task,
      id: uuidv4(),
    };

    dispatch(addTask(newTask));

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
