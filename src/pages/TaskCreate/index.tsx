import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  ScaleFade,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

import { addTask } from '../../features/tasks/tasksSlice';

export const TaskCreate = () => {
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
  });
  const dispatch = useDispatch();

  const { isOpen, onClose } = useDisclosure();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('se ejecuto');
    dispatch(
      addTask({
        ...task,
        id: uuidv4(),
      }),
    );
    onClose();
    // Limpiamos el estado de la tarea
    setTask({
      id: '',
      title: '',
      description: '',
    });
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
      <ScaleFade in={isOpen} initialScale={0.9}>
        <Alert
          alignItems="center"
          flexDirection="column"
          height="200px"
          justifyContent="center"
          status="success"
          textAlign="center"
          variant="subtle"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle fontSize="lg" mb={1} mt={4}>
            Tarea creada!
          </AlertTitle>
        </Alert>
      </ScaleFade>
    </>
  );
};
