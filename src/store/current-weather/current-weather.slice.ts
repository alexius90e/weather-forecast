import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentWeather } from 'models/current-weather-dto.interface';
import { fetchCurrentWeather } from './current-weather.thunk';

export interface CurrentWeatherState {
  currentWeather: CurrentWeather | null;
  isLoading: boolean;
  error: boolean;
}

const initialState: CurrentWeatherState = {
  currentWeather: null,
  isLoading: false,
  error: false,
};

export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCurrentWeather.fulfilled,
        (state, action: PayloadAction<CurrentWeather>): void => {
          state.currentWeather = action.payload;
          state.isLoading = false;
          state.error = false;
        }
      )
      .addCase(fetchCurrentWeather.rejected, (state): void => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const currentWeatherReducer = currentWeatherSlice.reducer;
