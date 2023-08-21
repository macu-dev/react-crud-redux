import { Button, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../app/store';
import { Actions } from '../../components/Actions/Actions';
import { TableBase } from '../../components/TableBase/TableBase';
import { Column, Row } from '../../components/TableBase/TableBase.types';
import { ColumnFactory } from '../../components/TableBase/utils/ColumnFactory';

export const TasksList = () => {
  const navigate = useNavigate();
  const tasks = useSelector((state: RootState) => state.tasks);

  const columns: Column[] = [
    ColumnFactory('title', 'title'),
    ColumnFactory('description', 'description'),
    ColumnFactory('actions', 'actions'),
  ];

  const columnsData = tasks?.map((task) => {
    return {
      ...task,
      actions: <Actions taskId={task.id} />,
    };
  });

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
          rows={columnsData as unknown as Row[]}
        />
      ) : (
        <Text fontSize="xl" sx={{ marginY: 2 }}>
          No tienes tareas
        </Text>
      )}
    </>
  );
};
