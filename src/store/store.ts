import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch } from 'react-redux';
import { currentWeatherReducer } from './current-weather/current-weather.slice';

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

setupListeners(store.dispatch);
