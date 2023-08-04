import { RN } from '../TableBase.types';

export const ColumnFactory = (
  key: string,
  headerName: string,
  valueGetter: (v: string | number) => RN = (v) => v,
) => {
  return { key, headerName, valueGetter };
};
