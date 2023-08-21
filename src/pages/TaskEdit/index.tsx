import { useParams } from 'react-router-dom';

export const TaskEdit = () => {
  const { taskId } = useParams();
  return <div>{taskId}</div>;
};
