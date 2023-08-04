import { Button, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../app/store';
import { TableBase } from '../../components/TableBase/TableBase';
import { Column, Row } from '../../components/TableBase/TableBase.types';
import { ColumnFactory } from '../../components/TableBase/utils/ColumnFactory';

export const TasksList = () => {
  const navigate = useNavigate();
  const tasks = useSelector((state: RootState) => state.tasks);

  const columns: Column[] = [
    ColumnFactory('title', 'title'),
    ColumnFactory('description', 'description'),
  ];

  return (
    <>
      <Heading sx={{ marginY: 2 }}>Lista de tareas</Heading>
      <Button colorScheme="blue" onClick={() => navigate('/create')}>
        Crear nueva tarea
      </Button>
      {tasks.length ? (
        <TableBase
          columns={columns}
          rowIdIdentifier="id"
          rows={tasks as unknown as Row[]}
        />
      ) : (
        <Text fontSize="xl" sx={{ marginY: 2 }}>
          No tienes tareas
        </Text>
      )}
    </>
  );
};
