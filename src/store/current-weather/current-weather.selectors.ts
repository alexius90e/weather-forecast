import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { CurrentWeatherState } from './current-weather.slice';

const currentWeatherState = (state: RootState): CurrentWeatherState => state.currentWeather;

const selectWeather = createSelector(currentWeatherState, (state) => state.currentWeather);

const selectIsLoading = createSelector(currentWeatherState, (state) => state.isLoading);

export const currentWeatherSelectors = {
  selectWeather,
  selectIsLoading,
};
