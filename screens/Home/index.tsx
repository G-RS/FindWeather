import { View, Image, FlatList, ActivityIndicator } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { Link, router, useFocusEffect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StorageKeys } from "@/utils/storage.interface";
import { Forecastday, WeatherAPI } from "@/utils/weather-api.interface";
import { weatherAPI } from "@/services/weather-api";
import { getWeatherIcon } from "@/utils/weather-icons";
import { getData } from "@/storage/async-storage";
import { DateFormat, TimeFormat } from "@/utils/dateFormat";
import Text from "@/components/Text";
import Temperature from "@/components/Temperature";
import WeatherCard from "@/components/Card-Weather";
import HourCard from "@/components/Card-Hour";
import theme from "@/theme";
import styles from "./styles";


const HomeEmptyContent = () => {
    return (
        <View style={styles.container}>

            <Text fontSize={theme.fontSize.xxl33} color={theme.colors.white}>Find
                <Text font={theme.fontFamily.OverpassBold} 
                      fontSize={theme.fontSize.xxl33} 
                      color={theme.colors.white}>Weather
                </Text>
            </Text>

            <Image style={styles.image} source={require('@/assets/images/climate-change.png')}/>

            <Text style={styles.text}
                  onPress={async () => {
                    router.navigate('/(tabs)/search')
                  }}>Selecione aqui um local e encontre o clima em tempo real</Text>

        </View>
    );
} 

const HomeContent = () => {
    const [forecast, setForecast] = useState({} as WeatherAPI);
    const [nextDayForecast, setNextDayForecast] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isFocus, setIsFocus] = useState(true);
    const [city, setCity] = useState('');

    useEffect(() => {
        if(isFocus) {
            getData(StorageKeys.CityName)
                .then((cityName) => {
                    if(cityName != city) {
                        setIsLoading(true);

                        weatherAPI.getForecast(cityName as string)
                        .then( (response) => {
                            setForecast(response.data);
                            setIsLoading(false);

                            const nextDay = response.data.forecast.forecastday[0] as Forecastday;

                            setNextDayForecast({
                                humidity: nextDay.hour[0].humidity,
                                wind_kph: nextDay.hour[0].wind_kph,
                                rain: nextDay.hour[0].chance_of_rain,
                                lat: `${response.data.location.lat}`,
                                lon: `${response.data.location.lon}`,
                            });

                            setCity(cityName as string);
                        });
                    }
                });
        }
    }, [isFocus]);

    useFocusEffect(
        useCallback( () => {
            setIsFocus(true);
    
            return () => { setIsFocus(false); }
        }, [])
    );

    return (
        <View style={styles.container}>
            { isLoading ? (<ActivityIndicator size='large' color='white' />) : '' }

            { !isLoading ? (
                <View style={styles.container}>

                    <Text fontSize={theme.fontSize.sm18} color={theme.colors.white} >
                        <Ionicons name="location-sharp" size={15} color={theme.colors.white}/>{`${forecast.location.name}, ${forecast.location.region}`}
                    </Text>

                    <Text fontSize={theme.fontSize.xs16}>{ DateFormat(forecast.location.localtime) }</Text>

                    <Image style={styles.icon} 
                           source={getWeatherIcon(forecast.current)}
                    />

                    <Temperature value={forecast.current.temp_c}
                                 fontSize1={theme.fontSize.giant76} 
                                 fontSize2={theme.fontSize.xxl33}
                    />

                    <Text fontSize={theme.fontSize.lg30}>{forecast.current.condition.text}</Text>

                    <WeatherCard humidity={forecast.current.humidity} 
                                    wind_kph={forecast.current.wind_kph} 
                                    rain_change={forecast.forecast.forecastday[0].hour[0].chance_of_rain} 
                    />

                    <View style={styles.textContainer}>
                        <Text fontSize={theme.fontSize.md20} 
                                color={theme.colors.white}>Hoje
                        </Text>

                        <View style={styles.linkContainer}>
                            <Text fontSize={theme.fontSize.xs16}
                                  font={theme.fontFamily.OverpassSemiBold}>
                                    <Link href={{ pathname: "/next-days", 
                                                  params: nextDayForecast }} >Próximos 5 dias
                                    </Link>
                            </Text>
                            <Ionicons name="chevron-forward-sharp" size={15} color={theme.colors.gray100}/>
                        </View>
                    </View>

                    <View style={styles.hourCardContainer}>
                        <FlatList horizontal={true}
                                    data={forecast.forecast.forecastday[0].hour}
                                    renderItem={ ({item}) => (
                                        <HourCard temperature={item.temp_c} 
                                                  image={getWeatherIcon(item)}
                                                  hour={TimeFormat(item.time)} 
                                        />
                                    )} 
                        />
                    </View>
                </View> ) : '' 
            }
        </View>
    );
}

export default function Home() {
    const [city, setCity] = useState("");
    const [isFocus, setIsFocus] = useState(true);

    useEffect(() => {
        if(isFocus) {
            getData(StorageKeys.CityName)
                .then((city) => { setCity(city as string); });
        }     
    }, [isFocus]);

    useFocusEffect(
        useCallback( () => {
            setIsFocus(true);    
            return () => { setIsFocus(false); }
        }, [])
    );

    return (
        <>
            { city ? <HomeContent/> : <HomeEmptyContent/> }
        </>
    );
}
