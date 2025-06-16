import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TNotification } from './notificationTypes';

const initialState: TNotification = {
  show: false,
  message: '',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<TNotification>) => {
      const { message, title } = action.payload;
      state.show = true;
      state.message = message;
      if (title) {
        state.title = title;
      }
    },
  },
});

export const { showNotification } = notificationSlice.actions;

export const notification = notificationSlice.reducer;
