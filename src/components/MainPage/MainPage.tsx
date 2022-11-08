import { CurrentWeather } from 'models/current-weather-dto.interface';
import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { currentWeatherSelectors } from 'store/current-weather/current-weather.selectors';
import { fetchCurrentWeather } from 'store/current-weather/current-weather.thunk';
import { useAppDispatch } from 'store/store';
import { CurrentForecast } from '../CurrentForecast/CurrentForecast';

export const MainPage: FC = () => {
  const { city } = useParams();

  const dispatch = useAppDispatch();

  useMemo(() => {
    if (city) dispatch(fetchCurrentWeather(city));
  }, [city, dispatch]);

  const currentWeather: CurrentWeather | null = useSelector(currentWeatherSelectors.selectWeather);

  return (
    <>
      <nav style={{ display: 'flex', gap: '0.5rem', padding: '1rem 0' }}>
        <NavLink to={'/weather/mogilev'}>Mogilev</NavLink>
        <NavLink to={'/weather/minsk'}>Minsk</NavLink>
        <NavLink to={'/weather/moscow'}>Moscow</NavLink>
        <NavLink to={'/weather/bratislava'}>Bratislava</NavLink>
        <NavLink to={'/weather/johannesburg'}>Johannesburg</NavLink>
        <NavLink to={'/weather/seoul'}>Seoul</NavLink>
        <NavLink to={'/weather/bogra'}>Bogra </NavLink>
      </nav>

      {currentWeather && <CurrentForecast {...{ currentWeather }} />}
    </>
  );
};
