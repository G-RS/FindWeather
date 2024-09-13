import { StyleSheet, View, Image } from "react-native";
import { Capitalize, WeekdayFormat } from "@/utils/dateFormat";
import { getWeatherIcon } from "@/utils/weather-icons";
import { List } from "@/utils/open-weather-api.interface";
import Text from "../Text";
import theme from "@/theme";


interface DailyWeatherProps {
    forecast: List;
}

export default function DailyWeather(props: DailyWeatherProps) {
    const dayOfTheWeek = WeekdayFormat(props.forecast.dt_txt.toString());
    const icon = getWeatherIcon(props.forecast.weather[0]);
    const condition = Capitalize(props.forecast.weather[0].description);
    const tempMax = props.forecast.main.temp_max.toFixed(0);
    const tempMin = props.forecast.main.temp_min.toFixed(0);


    return (
        <View style={styles.container}>

            <View style={styles.dateContainer}>
                <Text fontSize={theme.fontSize.xs16} 
                      color={theme.colors.white}>{dayOfTheWeek}
                </Text>
            </View>

            <View style={styles.conditionContainer}>
                <Image style={styles.icon} source={icon} />

                <Text style={styles.text} fontSize={theme.fontSize.xs16}>{condition}</Text>
            </View>

            <View style={styles.temperatureContainer}>
                <Text fontSize={theme.fontSize.xs16} color={theme.colors.white}>{tempMax}º </Text>
                <Text fontSize={theme.fontSize.xs16}>/ {tempMin}º</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 32,
        marginRight: 32,
        marginTop: 10,
        marginBottom: 10
    },
    dateContainer: {
        flexDirection: 'row',
        width: 70
    },
    conditionContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icon: {
        height: 30,
        width: 30
    },
    text: {
        margin: 5
    },
    temperatureContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: 80
    },
});