import axios from "axios"

const apiKey = process.env.EXPO_PUBLIC_API_KEY_OPEN_CAGE

const api = axios.create({
    baseURL: 'https://api.opencagedata.com/geocode/v1'
});

export const openCageAPI = {
    getCoordinates: (address: string) => {
        return api.get(`json?q=${address}&key=${apiKey}&language=pt-BR&no_annotations=1&no_record=1`);
    }
}