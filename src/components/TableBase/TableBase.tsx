import { Table, TableContainer, Tbody, Td, Th } from '@chakra-ui/react';

import { Column, Row } from './TableBase.types';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

interface TableBaseProps {
  columns: Column[];
  rows: Row[];
  rowIdIdentifier: string;
}

export const TableBase = ({
  columns,
  rows,
  rowIdIdentifier,
}: TableBaseProps) => {
  return (
    <TableContainer mt={10}>
      <Table variant="simple">
        <TableHeader>
          {columns.map((col) => (
            <Th key={col.key}>{col.headerName}</Th>
          ))}
        </TableHeader>
        <Tbody>
          {rows.map((row) => (
            <TableRow key={row[rowIdIdentifier]}>
              {columns.map((col) => (
                <Td key={`${row[rowIdIdentifier]}-${col.key}`}>
                  {col.valueGetter(row[col.key])}
                </Td>
              ))}
            </TableRow>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
