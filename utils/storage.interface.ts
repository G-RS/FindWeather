export enum StorageKeys {
    FirstAccess = "FindWeather:Welcome",
    CityName = "FindWeather:City"
}

export interface StorageType {
    cityName?: string;
    isFirstAccess?: boolean;
}