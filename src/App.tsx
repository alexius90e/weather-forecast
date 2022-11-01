import { MainPage } from 'components/MainPage';
import { WeatherDetails } from 'components/WeatherDetails';
import React, { FC } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App: FC = () => {
  return (
    <>
      <nav>
        <NavLink to={'/'}>Main</NavLink>
        <NavLink to={'/details'}>WeatherDetails</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details" element={<WeatherDetails />} />
      </Routes>
    </>
  );
};
