import { View, StyleSheet } from "react-native";
import Text from "../Text";
import theme from "@/theme";


interface TemperatureProps {
    value: string;
    fontSize1?: number;
    fontSize2?: number;
    color?: string;
}

export default function Temperature(props: TemperatureProps) {
    return (
        <View style={styles.temperatureContainer}>
            <Text font={theme.fontFamily.OverpassBold} 
                  fontSize={props.fontSize1 ? props.fontSize1 :theme.fontSize.giant76} 
                  color={theme.colors.white}>{props.value}
            </Text>
            <Text fontSize={props.fontSize2 ? props.fontSize2 : theme.fontSize.lg30}
                  color={props.color ? props.color : theme.colors.white}>º</Text>
        </View>
    );
    
}


const styles = StyleSheet.create({
    temperatureContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: -10,
    }
});