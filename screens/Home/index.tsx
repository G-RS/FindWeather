import { View, Image, Platform, FlatList, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StorageKeys } from "@/utils/storage.interface";
import { WeatherAPI } from "@/utils/weather-api.interface";
import { weatherAPI } from "@/services/weather-api";
import { getData } from "@/storage/async-storage";
import { DateFormat, TimeFormat } from "@/utils/dateFormat";
import Text from "@/components/Text";
import Temperature from "@/components/Temperature";
import WeatherCard from "@/components/Card-Weather";
import HourCard from "@/components/Card-Hour";
import theme from "@/theme";
import styles from "./styles";


interface HomeProps {
    cityName: string;
}

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

const HomeContent = ( props: HomeProps ) => {
    const [forecast, setForecast] = useState({} as WeatherAPI);
    const [isLoading, setIsLoading] = useState(true);
    const icon = require('@/assets/images/weather-icons/heavy-raining-middle.png')

    useEffect(() => {
        weatherAPI.getForecast(props.cityName as string)
        .then( (response) => {
            setForecast(response.data);
            setIsLoading(false);
        });
    }, []);

    return (
        <View style={styles.container}>
            { isLoading ? (<ActivityIndicator size='large' color='white' />) : '' }

            { !isLoading ? (
                <View style={styles.container}>

                    <Text fontSize={theme.fontSize.sm18} color={theme.colors.white} >
                        <Ionicons name="location-sharp" size={15} color={theme.colors.white}/>{`${forecast.location.name}, ${forecast.location.region}`}
                    </Text>

                    <Text fontSize={theme.fontSize.xs16}>{DateFormat(forecast.location.localtime)}</Text>

                    <Image style={styles.icon} source={icon} />

                    <Temperature value={`${forecast.current.temp_c.toFixed(0)}`} 
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
                                font={theme.fontFamily.OverpassSemiBold}>Próximos 5 dias
                            </Text>
                            <Ionicons name="chevron-forward-sharp" size={15} color={theme.colors.gray100}/>
                        </View>
                    </View>

                    <View style={styles.hourCardContainer}>
                        <FlatList horizontal={true}
                                    data={forecast.forecast.forecastday[0].hour}
                                    renderItem={ ({item}) => (
                                        <HourCard temperature={item.temp_c.toFixed(0)} 
                                                    image={item.condition.icon}
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

    useEffect(() => {
        getData(StorageKeys.CityName)
        .then((city) => {
            setCity(city as string);
        });
    }, []);

    return (
        <>
            { city != "" ? <HomeContent cityName={city} /> : <HomeEmptyContent/> }
        </>
    );
}
