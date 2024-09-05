import { ActivityIndicator, FlatList, Image, View } from "react-native";
import { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from "expo-router";
import { getTestData, storeTestData } from "@/storage/async-storage";
import { StorageKeys } from "@/utils/storage.interface";
import { Geometry } from "@/utils/open-cage-api.interface";
import { openCageAPI } from "@/services/open-cage-api";
import { openWeatherAPI } from "@/services/open-weather-api";
import { WeekdayFormat } from "@/utils/dateFormat";
import { List } from "@/utils/open-weather-api.interface";
import { weatherIcons } from "@/utils/weather-icons";
import WeatherCard from "@/components/Card-Weather";
import Temperature from "@/components/Temperature";
import DailyWeather from "@/components/Daily-Weather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Text from "@/components/Text";
import styles from "./styles";
import theme from "@/theme";

export default function NextDays() {
    const navigation = useNavigation();
    const { address } = useLocalSearchParams<{ address: string }>();
    const [coordinates, setCoordinates] = useState({} as Geometry);
    const [forecast, setForecast] = useState({} as List[]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        navigation.setOptions({ 
            headerShown: true,
            title: 'Próximos 5 Dias',
            headerBackTitleVisible: false,
            headerStyle: { backgroundColor: theme.colors.dark400 },
            headerTintColor: theme.colors.white,
            headerTitleAlign: 'center',
            headerTitleStyle: { fontFamily: theme.fontFamily.OverpassRegular, fontSize: theme.fontSize.xs16 },
            headerTitle: headerTitle
        });

        // openCageAPI.getCoordinates(address)
        //     .then((response) => {
        //         const geo = response.data.results[0].geometry
        //         setCoordinates(geo);
        //         getForecast(geo);
        //     })
        //     .catch((error) => {
        //         console.log(`Get Coordinates Error: ${error}`);
        //         setIsError(true);
        //     });

        getData();
    }, []);

    const headerTitle = () => 
        <View style={styles.headerContainer}>
            <Ionicons name="calendar-outline" size={16} color={theme.colors.white}/> 
            <Text fontSize={theme.fontSize.xs16} color={theme.colors.white}> Próximos 5 dias</Text>
        </View>

    const getForecast = (coord: Geometry) => {
        openWeatherAPI.get5DaysForecast(coord.lat, coord.lng)
            .then((response) => {
                setForecast(response.data.list);
                storeTestData(StorageKeys.Test5Days, response.data);
            })
            .catch((error) => {
                console.log(`Get Forecast Error: ${error}`);
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const getData = () => {
        getTestData(StorageKeys.Test5Days)
            .then((data) => {
                // setForecast(data.list);
                filterList(data.list);
            });
    };

    const filterList = (forecast: List[]) => {
        const forecastFiltered: List[] = [];
        let lastDate = new Date().toLocaleDateString()

        forecast.forEach((item) => {
            const date = new Date(item.dt_txt).toLocaleDateString()

            if (lastDate != date) {
                lastDate = date
                forecastFiltered.push(item);
            }
        });

        setForecast(forecastFiltered)
        setIsLoading(false);
    };


    return (
        <View style={styles.container}>
            { isLoading ? <ActivityIndicator style={{marginTop: 40}} size='large' color={theme.colors.white}/> : '' }

            { ( !isLoading && !isError) ? (
                <>
                    <View style={styles.background}>

                        <View style={styles.climateContainer}>
                            <Image style={styles.icon} source={weatherIcons[forecast[0].weather[0].icon as keyof typeof weatherIcons]}/>

                            <View style={{marginLeft: 20}}>
                                <Text fontSize={theme.fontSize.md20} textAlign="left">Amanhã</Text>

                                <View style={styles.temperature}>
                                    <Temperature value={forecast[0].main.temp_max.toFixed(0)} />

                                    <Text font={theme.fontFamily.OverpassSemiBold} 
                                        fontSize={theme.fontSize.xxl33}>/ </Text>

                                    <Temperature value={forecast[0].main.temp_min.toFixed(0)} 
                                                    fontSize1={theme.fontSize.xxl33}
                                                    fontSize2={theme.fontSize.md22}
                                                    color1={theme.colors.gray100}
                                                    color2={theme.colors.gray100}
                                    />
                                </View>

                                <Text fontSize={theme.fontSize.md20} textAlign="left">{forecast[0].weather[0].description.replace(/\b([a-zÁ-ú]{3,})/g, (l) => l.charAt(0).toUpperCase() + l.slice(1))}</Text>       
                            </View>    
                        </View>

                        <WeatherCard humidity={forecast[0].main.humidity} 
                                     wind_kph={forecast[0].wind.speed*3.6} 
                                     rain_change={forecast[0].rain?.["3h"] ?? 0}/>
                    </View>
        
                    <FlatList data={forecast}
                              renderItem={ ({item}) => <DailyWeather forecast={item} /> }
                    />                    
                </>
            ) : '' }
            
        </View>
    );
}
