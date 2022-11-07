import React, { FC } from 'react';
import { ReactComponent as BrokenCloudsD } from 'assets/weater-icons/broken-clouds-day.svg';
import { ReactComponent as BrokenCloudsN } from 'assets/weater-icons/broken-clouds-night.svg';
import { ReactComponent as ClearSkyD } from 'assets/weater-icons/clear-sky-day.svg';
import { ReactComponent as ClearSkyN } from 'assets/weater-icons/clear-sky-night.svg';
import { ReactComponent as FewCloudsD } from 'assets/weater-icons/few-clouds-day.svg';
import { ReactComponent as FewCloudsN } from 'assets/weater-icons/few-clouds-night.svg';
import { ReactComponent as MistD } from 'assets/weater-icons/mist-day.svg';
import { ReactComponent as MistN } from 'assets/weater-icons/mist-night.svg';
import { ReactComponent as RainD } from 'assets/weater-icons/rain-day.svg';
import { ReactComponent as RainN } from 'assets/weater-icons/rain-night.svg';
import { ReactComponent as ScatteredCloudsD } from 'assets/weater-icons/scattered-clouds-day.svg';
import { ReactComponent as ScatteredCloudsN } from 'assets/weater-icons/scattered-clouds-night.svg';
import { ReactComponent as ShowerRainD } from 'assets/weater-icons/shower-rain-day.svg';
import { ReactComponent as ShowerRainN } from 'assets/weater-icons/shower-rain-night.svg';
import { ReactComponent as SnowD } from 'assets/weater-icons/snow-day.svg';
import { ReactComponent as SnowN } from 'assets/weater-icons/snow-night.svg';
import { ReactComponent as ThunderstormD } from 'assets/weater-icons/thunderstorm-day.svg';
import { ReactComponent as ThunderstormN } from 'assets/weater-icons/thunderstorm-night.svg';
import { WeatherIconType } from 'models/weather-icon-type.type';

interface WeatherIconProps extends React.SVGProps<SVGSVGElement> {
  iconType: WeatherIconType;
}

export const WeatherIcon: FC<WeatherIconProps> = ({ iconType, ...rest }) => {
  const weatherIcons = {
    '01d': ClearSkyD,
    '01n': ClearSkyN,
    '02d': FewCloudsD,
    '02n': FewCloudsN,
    '03d': ScatteredCloudsD,
    '03n': ScatteredCloudsN,
    '04d': BrokenCloudsD,
    '04n': BrokenCloudsN,
    '09d': ShowerRainD,
    '09n': ShowerRainN,
    '10d': RainD,
    '10n': RainN,
    '11d': ThunderstormD,
    '11n': ThunderstormN,
    '13d': SnowD,
    '13n': SnowN,
    '50d': MistD,
    '50n': MistN,
  };

  const WeatherIconComponent = weatherIcons[iconType];

  return <WeatherIconComponent {...rest} />;
};
