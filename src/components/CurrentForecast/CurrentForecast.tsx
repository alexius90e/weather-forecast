import React, { FC } from 'react';
import { CurrentWeather } from 'models/current-weather-dto.interface';
import { WeatherIcon } from 'components/WeatherIcon';
import { ReactComponent as WindDirection } from 'assets/wind-direction-icon.svg';

import './CurrentForecast.scss';

interface CurrentForecastProps {
  currentWeather: CurrentWeather;
}

export const CurrentForecast: FC<CurrentForecastProps> = ({ currentWeather }) => {
  const { name, main, weather, wind, dt, sys, clouds, rain } = currentWeather;

  const [weatherInfo] = weather;

  const countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(sys.country);

  const temp = `${Math.floor(main.temp)}°`;

  const minMaxTemp = `${Math.floor(main.temp_min)}°C / ${Math.floor(main.temp_max)}°C`;

  const pressure = Math.floor(main.pressure / 1.333);

  const visability = (currentWeather.visibility / 1000).toFixed(1);

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  const currentDate = new Date(dt * 1000).toLocaleString('en-US', dateOptions);

  return (
    <section className="current-forecast">
      <h1 className="current-forecast__city">
        {name}, {countryName}
      </h1>

      <p className="current-forecast__date">{currentDate}</p>

      <div className="forecast">
        <div className="forecast__temp">
          <h2 className="forecast__temp-current">{temp}</h2>
          <p className="forecast__temp-min-max">{minMaxTemp}</p>
        </div>

        <WeatherIcon iconType={weatherInfo.icon} width="100%" className="forecast__icon" />

        <div className="forecast__details">
          <div className="forecast__info">
            <h4 className="forecast__details-heading">{weatherInfo.main}</h4>
            <p className="forecast__description">{weatherInfo.description}</p>
          </div>
          <div className="forecast__details-item">
            <h4 className="forecast__details-heading">{main.humidity}%</h4>
            <p className="forecast__description">humidity, %</p>
          </div>
          <div className="forecast__details-item">
            <h4 className="forecast__details-heading">{pressure}mm</h4>
            <p className="forecast__description">pressure, mmHg</p>
          </div>
          <div className="forecast__details-item">
            <h4 className="forecast__details-heading">{visability}km</h4>
            <p className="forecast__description">visibility, km</p>
          </div>
          <div className="forecast__details-item">
            <h4 className="forecast__details-heading">{clouds.all}%</h4>
            <p className="forecast__description">clouds, %</p>
          </div>
          {rain && (
            <div className="forecast__details-item">
              <h4 className="forecast__details-heading">{rain['1h']}mm</h4>
              <p className="forecast__description">rain for hour, mm</p>
            </div>
          )}
          <div className="forecast__wind">
            <h4 className="forecast__details-heading">
              <WindDirection
                style={{ transform: `rotate(${wind.deg}deg)`, transition: 'all linear 0.5s' }}
              />
              <span>{wind.speed}mps</span>
            </h4>
            <p className="forecast__description">wind speed, mps</p>
          </div>
        </div>
      </div>
    </section>
  );
};
