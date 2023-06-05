import ClearDay from './static/clear-day.svg';
import ClearNight from './static/clear-night.svg';
import Cloudy from './static/cloudy.svg';
import Drizzle from './static/drizzle.svg';
import DustWind from './static/dust-wind.svg';
import Dust from './static/dust.svg';
import Fog from './static/fog.svg';
import Mist from './static/mist.svg';
import OvercastDay from './static/overcast-day.svg';
import OvercastNight from './static/overcast-night.svg';
import PartlyCloudyDay from './static/partly-cloudy-day.svg';
import PartlyCloudyNight from './static/partly-cloudy-night.svg';
import Rain from './static/rain.svg';
import Sleet from './static/sleet.svg';
import Smoke from './static/smoke.svg';
import Snow from './static/snow.svg';
import ThunderstormsRain from './static/thunderstorms-rain.svg';
import Thunderstorms from './static/thunderstorms.svg';
import Tornado from './static/tornado.svg';
import Wind from './static/wind.svg';

import ClearDayAnimated from './animated/clear-day.svg';
import ClearNightAnimated from './animated/clear-night.svg';
import CloudyAnimated from './animated/cloudy.svg';
import DrizzleAnimated from './animated/drizzle.svg';
import DustWindAnimated from './animated/dust-wind.svg';
import DustAnimated from './animated/dust.svg';
import FogAnimated from './animated/fog.svg';
import MistAnimated from './animated/mist.svg';
import OvercastDayAnimated from './animated/overcast-day.svg';
import OvercastNightAnimated from './animated/overcast-night.svg';
import PartlyCloudyDayAnimated from './animated/partly-cloudy-day.svg';
import PartlyCloudyNightAnimated from './animated/partly-cloudy-night.svg';
import RainAnimated from './animated/rain.svg';
import SleetAnimated from './animated/sleet.svg';
import SmokeAnimated from './animated/smoke.svg';
import SnowAnimated from './animated/snow.svg';
import ThunderstormsRainAnimated from './animated/thunderstorms-rain.svg';
import ThunderstormsAnimated from './animated/thunderstorms.svg';
import TornadoAnimated from './animated/tornado.svg';
import WindAnimated from './animated/wind.svg';

const images = {
  ClearDay,
  ClearNight,
  Cloudy,
  Drizzle,
  DustWind,
  Dust,
  Fog,
  Mist,
  OvercastDay,
  OvercastNight,
  PartlyCloudyDay,
  PartlyCloudyNight,
  Rain,
  Sleet,
  Smoke,
  Snow,
  ThunderstormsRain,
  Thunderstorms,
  Tornado,
  Wind,
  ClearDayAnimated,
  ClearNightAnimated,
  CloudyAnimated,
  DrizzleAnimated,
  DustWindAnimated,
  DustAnimated,
  FogAnimated,
  MistAnimated,
  OvercastDayAnimated,
  OvercastNightAnimated,
  PartlyCloudyDayAnimated,
  PartlyCloudyNightAnimated,
  RainAnimated,
  SleetAnimated,
  SmokeAnimated,
  SnowAnimated,
  ThunderstormsRainAnimated,
  ThunderstormsAnimated,
  TornadoAnimated,
  WindAnimated,
};

function getImageByKey(key) {
  return images[key];
}

export default getImageByKey;
