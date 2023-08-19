import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AlertStatus } from '@chakra-ui/react';

export interface AlertState {
  type: AlertStatus | undefined;
  message: string | null;
}

const initialState: AlertState = {
  type: undefined,
  message: null,
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertState>) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    resetAlert: (state) => {
      state.message = initialState.message;
      state.type = initialState.type;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAlert, resetAlert } = alertSlice.actions;

export default alertSlice.reducer;
