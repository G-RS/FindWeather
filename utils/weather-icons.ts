import { Weather } from "./open-weather-api.interface";
import { Current, Hour } from "./weather-api.interface";

export function getWeatherIcon(forecast: Current | Hour | Weather)  {
  let key: keyof typeof weatherIcons;

  if ('icon' in forecast) {
    key = forecast.icon as keyof typeof weatherIcons;

    return weatherIcons[key]
  } 

  if ('is_day' in forecast) {
    key = forecast.condition.code as keyof typeof weatherIcons;

    if (forecast.condition.code == 1000) {
      key = `${forecast.condition.code}-${forecast.is_day}` as keyof typeof weatherIcons;
      return weatherIcons[key];
    }
    
    return weatherIcons[key]
  }
};


export const weatherIcons = {
  "1000-0": require('@/assets/images/weather-icons/night.png'),
  "1000-1": require('@/assets/images/weather-icons/sun.png'),
  1003: require('@/assets/images/weather-icons/cloud.png'),
  1006: require('@/assets/images/weather-icons/cloud.png'),
  1009: require('@/assets/images/weather-icons/cloud.png'),
  1030: require('@/assets/images/weather-icons/fog-middle.png'),
  1063: require('@/assets/images/weather-icons/raining-middle.png'),
  1066: require('@/assets/images/weather-icons/snowing-middle.png'),
  1069: require('@/assets/images/weather-icons/snowing-middle.png'),
  1072: require('@/assets/images/weather-icons/freezing-raining-middle.png'),
  1087: require('@/assets/images/weather-icons/thunder-middle.png'),
  1114: require('@/assets/images/weather-icons/mid-snow-fast-winds.png'),
  1117: require('@/assets/images/weather-icons/blizzard-middle.png'),
  1135: require('@/assets/images/weather-icons/fog-middle.png'),
  1147: require('@/assets/images/weather-icons/icy-fog-middle.png'),
  1150: require('@/assets/images/weather-icons/light-rain-middle.png'),
  1153: require('@/assets/images/weather-icons/light-rain-middle.png'),
  1168: require('@/assets/images/weather-icons/freezing-light-rain-middle.png'),
  1171: require('@/assets/images/weather-icons/freezing-raining-middle.png'),
  1180: require('@/assets/images/weather-icons/light-rain-middle.png'),
  1183: require('@/assets/images/weather-icons/light-rain-middle.png'),
  1186: require('@/assets/images/weather-icons/raining-middle.png'),
  1189: require('@/assets/images/weather-icons/raining-middle.png'),
  1192: require('@/assets/images/weather-icons/heavy-raining-middle.png'),
  1195: require('@/assets/images/weather-icons/heavy-raining-middle.png'),
  1198: require('@/assets/images/weather-icons/freezing-light-rain-middle.png'),
  1201: require('@/assets/images/weather-icons/freezing-heavy-raining-middle.png'),
  1204: require('@/assets/images/weather-icons/snow-light-rain-middle.png'),
  1207: require('@/assets/images/weather-icons/snow-heavy-raining-middle.png'),
  1210: require('@/assets/images/weather-icons/snowing-middle.png'),
  1213: require('@/assets/images/weather-icons/snowing-middle.png'),
  1216: require('@/assets/images/weather-icons/snowing-middle.png'),
  1219: require('@/assets/images/weather-icons/snowing-middle.png'),
  1222: require('@/assets/images/weather-icons/snow.png'),
  1225: require('@/assets/images/weather-icons/snow.png'),
  1237: require('@/assets/images/weather-icons/hailstone-middle.png'),
  1240: require('@/assets/images/weather-icons/waterdrop-middle.png'),
  1243: require('@/assets/images/weather-icons/waterdrop-middle.png'),
  1246: require('@/assets/images/weather-icons/heavy-raining-middle.png'),
  1249: require('@/assets/images/weather-icons/snow-heavy-raining-middle.png'),
  1252: require('@/assets/images/weather-icons/snow-heavy-raining-middle.png'),
  1255: require('@/assets/images/weather-icons/snow-light-rain-middle.png'),
  1258: require('@/assets/images/weather-icons/snow-heavy-raining-middle.png'),
  1261: require('@/assets/images/weather-icons/hailstone-middle.png'),
  1264: require('@/assets/images/weather-icons/hailstone-middle.png'),
  1273: require('@/assets/images/weather-icons/raining-and-thunder.png'),
  1276: require('@/assets/images/weather-icons/heavy-raining-and-thunder-middle.png'),
  1279: require('@/assets/images/weather-icons/snow-with-thunder.png'),
  1282: require('@/assets/images/weather-icons/snow-with-thunder.png'),

  "01d": require('@/assets/images/weather-icons/sun.png'),
  "01n": require('@/assets/images/weather-icons/night.png'),
  "02d": require('@/assets/images/weather-icons/cloud-day.png'),
  "02n": require('@/assets/images/weather-icons/cloud-night.png'),
  "03d": require('@/assets/images/weather-icons/cloud.png'),
  "03n": require('@/assets/images/weather-icons/cloud.png'),
  "04d": require('@/assets/images/weather-icons/cloud.png'),
  "04n": require('@/assets/images/weather-icons/cloud.png'),
  "09d": require('@/assets/images/weather-icons/light-rain-middle.png'),
  "09n": require('@/assets/images/weather-icons/light-rain-middle.png'),
  "10d": require('@/assets/images/weather-icons/raining.png'),
  "10n": require('@/assets/images/weather-icons/raining-night.png'),
  "11d": require('@/assets/images/weather-icons/thunder.png'),
  "11n": require('@/assets/images/weather-icons/thunder-night.png'),
  "13d": require('@/assets/images/weather-icons/snow.png'),
  "13n": require('@/assets/images/weather-icons/snow.png'),
  "50d": require('@/assets/images/weather-icons/fog.png'),
  "50n": require('@/assets/images/weather-icons/fog-night.png'),
}