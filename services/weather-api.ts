import axios from "axios";

const apiKey = process.env.EXPO_PUBLIC_API_KEY;

const api = axios.create({
    baseURL: 'https://api.weatherapi.com/v1'
});

export const weatherAPI = {
    getForecast: (city: string) => {
        return api.get(`forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no&lang=pt`)
    }
}