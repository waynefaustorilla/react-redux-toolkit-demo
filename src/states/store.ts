import { configureStore } from '@reduxjs/toolkit';
import nameReducer from './reducers/nameReducer';

const store = configureStore({
  reducer: { nameReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
