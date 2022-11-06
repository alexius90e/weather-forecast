import React, { FC } from 'react';
import { CurrentWeather } from 'models/current-weather-dto.interface';
import { ReactComponent as RainDay } from 'assets/weater-icons/rain-day.svg';

interface CurrentForecastProps {
  currentWeather: CurrentWeather;
}

export const CurrentForecast: FC<CurrentForecastProps> = ({ currentWeather }) => {
  const { name, main, weather, wind, dt, sys } = currentWeather;

  const currentDate = new Date(dt * 1000).toLocaleString();

  const [weatherInfo] = weather;

  return (
    <>
      <h1>
        {name}, {sys.country}
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ flex: '0 1 30%', textAlign: 'left' }}>
          <h2
            style={{ fontSize: '4rem', lineHeight: '4rem', margin: '0 0 1rem' }}
          >{`${main.temp}°C`}</h2>
          <p
            style={{ fontSize: '2rem', lineHeight: '2.5rem', margin: 0 }}
          >{`max. ${main.temp_max}°, min. ${main.temp_min}°`}</p>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', flex: '0 1 40%', maxHeight: '18rem' }}
        >
          <RainDay />
        </div>
        <div style={{ flex: '0 1 30%' }}>
          <h2 style={{ fontSize: '2.75rem' }}>{`${weatherInfo.main} ${weatherInfo.icon}`}</h2>
          <p>{weatherInfo.description}</p>
          <div>Humidity: {main.humidity} %</div>
          <div>Wind speed: {wind.speed} m/s</div>
          <div>Wind direction: {wind.deg} °</div>
        </div>
      </div>

      <h3 style={{ fontSize: '2rem', lineHeight: '2.5rem', textAlign: 'center' }}>{currentDate}</h3>

      <pre>{JSON.stringify(currentWeather, null, 4)}</pre>
    </>
  );
};
