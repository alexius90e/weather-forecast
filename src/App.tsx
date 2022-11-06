import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { WeatherDetails } from './components/WeatherDetails/WeatherDetails';

export const App: FC = () => {
  return (
    <main style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1rem' }}>
      <Routes>
        <Route path="/" element={<Navigate to={'/weather/moscow'} />} />
        <Route path="/weather/:city" element={<MainPage />} />
        <Route path="/details" element={<WeatherDetails />} />
      </Routes>
    </main>
  );
};
