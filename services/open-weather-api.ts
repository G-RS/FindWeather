import axios from "axios";

const apiKey = process.env.EXPO_PUBLIC_API_KEY_OPEN_WEATHER;

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
});

export const openWeatherAPI = {
    get5DaysForecast: (lat: string, lon: string) => {
        return api.get(`forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`);
    }
};