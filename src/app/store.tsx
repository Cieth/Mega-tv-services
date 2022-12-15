import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/slices/userSlice';
import { useDispatch } from 'react-redux';
const store = configureStore({
  reducer: { user: userSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
