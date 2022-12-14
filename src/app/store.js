import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/slices/userSlice';

export default configureStore({
  reducer: { user: userSlice },
});
