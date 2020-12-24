import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../component/features/userSlice';
import appReducer from '../component/features/appSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
