import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout';
import { TaskCreate } from '../pages/TaskCreate';
import { TaskEdit } from '../pages/TaskEdit';
import { TasksList } from '../pages/TasksList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/tasks',
        element: <TasksList />,
      },
      {
        path: '/create',
        element: <TaskCreate />,
      },
      {
        path: '/edit',
        element: <TaskEdit />,
      },
    ],
  },
]);
