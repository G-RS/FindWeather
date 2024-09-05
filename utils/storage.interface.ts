export enum StorageKeys {
    FirstAccess = "FindWeather:Welcome",
    CityName = "FindWeather:City",
    Test = "FindWeather:Test",
    Test5Days = "FindWeather:Test5Days"
}

export interface StorageType {
    cityName?: string;
    isFirstAccess?: boolean;
}