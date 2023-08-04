import { Thead } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { TableRow } from './TableRow';

interface TableHeaderProps {
  children?: ReactElement | ReactElement[];
}

export const TableHeader = ({ children }: TableHeaderProps) => {
  return (
    <Thead>
      <TableRow>{children}</TableRow>
    </Thead>
  );
};
