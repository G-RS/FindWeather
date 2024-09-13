import { View, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "@/theme";


interface TemperatureProps {
    value: number;
    fontSize1?: number;
    fontSize2?: number;
    color1?: string;
    color2?: string;
}

export default function Temperature(props: TemperatureProps) {
    return (
        <View style={styles.temperatureContainer}>
            <Text font={theme.fontFamily.OverpassBold} 
                  fontSize={props.fontSize1 ? props.fontSize1 :theme.fontSize.giant76} 
                  color={props.color1 ? props.color1 :theme.colors.white}>{props.value.toFixed(0)}
            </Text>
            <Text fontSize={props.fontSize2 ? props.fontSize2 : theme.fontSize.lg30}
                  color={props.color2 ? props.color2 : theme.colors.white}>º</Text>
        </View>
    );
    
}


const styles = StyleSheet.create({
    temperatureContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: -10,
        marginLeft: 5
    }
});