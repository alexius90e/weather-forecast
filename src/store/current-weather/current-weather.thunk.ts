import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CurrentWeather } from 'models/current-weather-dto.interface';

export const fetchCurrentWeather = createAsyncThunk<CurrentWeather, string>(
  'currentWeather/fetchCurrentWeather',
  async (cityName: string) => {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = '4710ef6911e997c7be5c517bab2d54af';
    const units = 'metric';
    const url = `${baseUrl}?q=${cityName}&appid=${apiKey}&units=${units}`;
    const response = await axios.get(url);
    return response.data;
  }
);
