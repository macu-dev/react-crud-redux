export type RN = React.ReactNode;
export type Row = {
  [key: string]: string | number;
};

export interface Column {
  key: string;
  headerName: string;
  valueGetter: (value: string | number) => React.ReactNode;
}
