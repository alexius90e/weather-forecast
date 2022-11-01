import React, { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';

export const MainPage: FC = () => {
  const { city } = useParams();

  return (
    <>
      <nav>
        <NavLink to={'/weather/minsk'}>Minsk</NavLink>
        <NavLink to={'/weather/moscow'}>Moscow</NavLink>
        <NavLink to={'/weather/bratislava'}>Bratislava</NavLink>
      </nav>
      <h1>{city}</h1>
    </>
  );
};
