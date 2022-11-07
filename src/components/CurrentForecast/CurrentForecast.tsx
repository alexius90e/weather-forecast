import React, { FC } from 'react';
import { CurrentWeather } from 'models/current-weather-dto.interface';
import { WeatherIcon } from 'components/WeatherIcon';

interface CurrentForecastProps {
  currentWeather: CurrentWeather;
}

export const CurrentForecast: FC<CurrentForecastProps> = ({ currentWeather }) => {
  const { name, main, weather, wind, dt, sys } = currentWeather;

  const [weatherInfo] = weather;

  const temp = `${Math.floor(main.temp)}°`;

  const minMaxTemp = `${Math.floor(main.temp_min)}° / ${Math.floor(main.temp_max)}°`;

  const currentDate = new Date(dt * 1000).toLocaleString();

  return (
    <section className="current-forecast">
      <h1 style={{ fontSize: '2.5rem', margin: '1rem 0 0' }}>
        {name}, {sys.country}
      </h1>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div>
          <div style={{ fontSize: '6rem', lineHeight: '6.5rem', margin: '0 0 1rem' }}>{temp}</div>
          <p style={{ fontSize: '2rem', margin: 0 }}>{minMaxTemp}</p>
        </div>

        <div>
          <WeatherIcon iconType={weatherInfo.icon} height={'10rem'} />
        </div>

        <div>
          <h2 style={{ fontSize: '2.5rem', lineHeight: '2.8rem', margin: '0 0 0.25rem' }}>
            {weatherInfo.main}
          </h2>
          <p style={{ fontSize: '1.75rem', margin: '0 0 1rem' }}>{weatherInfo.description}</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div>Humidity: {main.humidity} %</div>
            <div>Wind speed: {wind.speed} m/s</div>
            <div>Wind direction: {wind.deg} °</div>
          </div>
        </div>
      </div>

      <h3 style={{ fontSize: '2rem', lineHeight: '2.5rem', textAlign: 'center' }}>{currentDate}</h3>

      <pre>{JSON.stringify(currentWeather, null, 4)}</pre>
    </section>
  );
};
