import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { WeatherDetails } from './components/WeatherDetails';

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={'/weather/moscow'} />} />
        <Route path="/weather/:city" element={<MainPage />} />
        <Route path="/details" element={<WeatherDetails />} />
      </Routes>
    </>
  );
};
