import { CurrentWeather } from 'models/current-weather-dto.interface';
import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { currentWeatherSelectors } from 'store/current-weather/current-weather.selectors';
import { fetchCurrentWeather } from 'store/current-weather/current-weather.thunk';
import { useAppDispatch } from 'store/store';

export const MainPage: FC = () => {
  const { city } = useParams();

  const dispatch = useAppDispatch();

  useMemo(() => {
    if (city) dispatch(fetchCurrentWeather(city));
  }, [city, dispatch]);

  const currentWeather: CurrentWeather | null = useSelector(currentWeatherSelectors.selectWeather);

  return (
    <>
      <nav>
        <NavLink to={'/weather/mogilev'}>Mogilev</NavLink>
        <NavLink to={'/weather/minsk'}>Minsk</NavLink>
        <NavLink to={'/weather/moscow'}>Moscow</NavLink>
        <NavLink to={'/weather/bratislava'}>Bratislava</NavLink>
      </nav>

      {currentWeather && (
        <>
          <h1>{`${currentWeather.name} ${currentWeather.main.temp}°C`}</h1>
          <h2>{currentWeather.weather[0].main}</h2>
          <p>{currentWeather.weather[0].description}</p>
          <p>Coordinates: {`${currentWeather.coord.lat} ${currentWeather.coord.lon}`}</p>

          <p>{JSON.stringify(currentWeather)}</p>
        </>
      )}
    </>
  );
};
