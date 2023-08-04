import { Tr } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface TableRowProps {
  children?: ReactElement | ReactElement[];
}

export const TableRow = ({ children }: TableRowProps) => {
  return <Tr>{children}</Tr>;
};
