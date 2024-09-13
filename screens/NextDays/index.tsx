import { ActivityIndicator, FlatList, Image, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from 'react';
import { openWeatherAPI } from "@/services/open-weather-api";
import { weatherIcons } from "@/utils/weather-icons";
import { Capitalize } from "@/utils/dateFormat";
import { List } from "@/utils/open-weather-api.interface";
import WeatherCard from "@/components/Card-Weather";
import Temperature from "@/components/Temperature";
import DailyWeather from "@/components/Daily-Weather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Text from "@/components/Text";
import styles from "./styles";
import theme from "@/theme";

export default function NextDays() {
    const navigation = useNavigation();
    const { humidity, wind_kph, rain, lat, lon } = useLocalSearchParams();
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

        getForecast();
    }, []);

    const headerTitle = () => 
        <View style={styles.headerContainer}>
            <Ionicons name="calendar-outline" size={16} color={theme.colors.white}/> 
            <Text fontSize={theme.fontSize.xs16} color={theme.colors.white}> Próximos 5 dias</Text>
        </View>

    const getForecast = () => {
        openWeatherAPI.get5DaysForecast(lat as string, lon as string)
            .then((response) => {
                filterList(response.data.list);
            })
            .catch((error) => {
                console.log(`Get Forecast Error: ${error}`);
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const filterList = (forecast: List[]) => {
        const forecastFiltered: List[] = [];
        let lastDate = new Date().toLocaleDateString();

        forecast.forEach((item) => {
            const date = new Date(item.dt_txt).toLocaleDateString();

            if (lastDate != date) {
                lastDate = date;
                forecastFiltered.push(item);
            }
        });

        setForecast(forecastFiltered);
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
                                    <Temperature value={forecast[0].main.temp_max} />

                                    <Text font={theme.fontFamily.OverpassSemiBold} 
                                        fontSize={theme.fontSize.xxl33}>/ </Text>

                                    <Temperature value={ Number(forecast[0].main.temp_min)} 
                                                    fontSize1={theme.fontSize.xxl33}
                                                    fontSize2={theme.fontSize.md22}
                                                    color1={theme.colors.gray100}
                                                    color2={theme.colors.gray100}
                                    />
                                </View>

                                <Text fontSize={theme.fontSize.md20} 
                                      textAlign="left">{Capitalize(forecast[0].weather[0].description)}
                                </Text>       
                            </View>    
                        </View>

                        <WeatherCard humidity={Number(humidity)} 
                                     wind_kph={Number(wind_kph)} 
                                     rain_change={Number(rain)}
                        />
                    </View>
        
                    <FlatList data={forecast.slice(1)}
                              renderItem={ ({item}) => <DailyWeather forecast={item} /> }
                    />                    
                </>
            ) : '' }
            
        </View>
    );
}
