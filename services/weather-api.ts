import axios from "axios";

const apiKey = process.env.EXPO_PUBLIC_API_KEY_WEATHER_API;

const api = axios.create({
    baseURL: 'https://api.weatherapi.com/v1'
});

export const weatherAPI = {
    getForecast: (city: string) => {
        return api.get(`forecast.json?key=${apiKey}&q=${city}&days=2&aqi=no&alerts=no&lang=pt`)
    }
}