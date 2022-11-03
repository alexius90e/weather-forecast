import React, { FC } from 'react';
import { CurrentWeather } from 'models/current-weather-dto.interface';

interface CurrentForecastProps {
  currentWeather: CurrentWeather;
}

export const CurrentForecast: FC<CurrentForecastProps> = ({ currentWeather }) => {
  const { main, weather, wind, dt } = currentWeather;

  const currentDate = new Date(dt * 1000).toLocaleString();

  const [weatherInfo] = weather;

  return (
    <>
      <h2>{`${main.temp}°C`}</h2>
      <p>{`max. ${main.temp_max}°, min. ${main.temp_min}°`}</p>

      <h2>{`${weatherInfo.main} ${weatherInfo.icon}`}</h2>
      <p>{weatherInfo.description}</p>
      <div>Humidity: {main.humidity} %</div>
      <div>Wind speed: {wind.speed} m/s</div>
      <div>Wind direction: {wind.deg} °</div>

      <h3>{currentDate}</h3>

      <pre>{JSON.stringify(currentWeather, null, 4)}</pre>
    </>
  );
};
