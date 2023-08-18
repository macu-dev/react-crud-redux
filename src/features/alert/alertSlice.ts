import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AlertState {
  type: string | null;
  message: string | null;
}

const initialState: AlertState = {
  type: null,
  message: null,
};

export interface AlertPayload {
  type: string;
  message: string;
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertPayload>) => {
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
