import { View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Text from "@/components/Text";
import theme from "@/theme";
import styles from "./styles";
import WeatherCard from "@/components/Card-Weather";
import HourCard from "@/components/Card-Hour";


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

            <Text style={styles.text}>Selecione aqui um local e encontre o clima em tempo real</Text>

        </View>
    );
} 

const HomeContent = () => {
    const cityName = "A Coruña, Espanha"
    const date = "Domingo, 01 Jan de 2023"
    const icon = require('@/assets/images/weather-icons/heavy-raining-middle.png')
    const temperature = "23"
    const climate = "Chuva Moderada"

    return (
        <View style={styles.container}>

            <Text fontSize={theme.fontSize.sm18}
                  color={theme.colors.white}>
                <Ionicons name="location-sharp" size={15} color={theme.colors.white}/>{cityName}
            </Text>

            <Text fontSize={theme.fontSize.xs16}>{date}</Text>

            <Image style={styles.icon} source={icon} />

            <View style={styles.temperature}>
                <Text font={theme.fontFamily.OverpassBold} 
                    fontSize={theme.fontSize.giant76} 
                    color={theme.colors.white}>{temperature}
                </Text>
                <Text fontSize={theme.fontSize.xxl33}
                      color={theme.colors.white}>º
                </Text>
            </View>

            <Text fontSize={theme.fontSize.lg30}>{climate}</Text>

            <WeatherCard/>

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
                <HourCard temperature="23" 
                        image={require('@/assets/images/weather-icons/raining-middle.png')}
                        hour="09:00"
                />

                <HourCard temperature="18" 
                        image={require('@/assets/images/weather-icons/cloud-1.png')}
                        hour="13:00"
                />

                <HourCard temperature="8" 
                        image={require('@/assets/images/weather-icons/sun.png')}
                        hour="17:00"
                />

                <HourCard temperature="28" 
                        image={require('@/assets/images/weather-icons/raining.png')}
                        hour="23:00"
                />

            </View>

        </View>
    );
}

export default function Home() {
    return (
        <HomeEmptyContent/>
        // <HomeContent/>
    );
}
