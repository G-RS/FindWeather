export enum StorageKeys {
    FirstAccess = "FindWeather:Welcome",
    CityName = "FindWeather:City",
    Test = "FindWeather:Test"
}

export interface StorageType {
    cityName?: string;
    isFirstAccess?: boolean;
}