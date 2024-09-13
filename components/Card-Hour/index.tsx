import theme from "@/theme";
import { View, Image, ImageSourcePropType, StyleSheet } from "react-native";
import Text from "../Text";
import Temperature from "../Temperature";

interface HourCardProps {
    temperature: number;
    image: ImageSourcePropType;
    hour: string;
}

export default function HourCard(props: HourCardProps) {
    return (
        <View style={styles.container}>

            <Temperature value={props.temperature}
                         fontSize1={theme.fontSize.sm18}
                         fontSize2={theme.fontSize.xxxs12} 
            />

            <Image style={styles.image} source={props.image}/>

            <Text font={theme.fontFamily.OverpassBold} 
                  fontSize={theme.fontSize.xxxs12}>{props.hour}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.dark300,
        borderColor: theme.colors.dark100,
        borderRadius: 20,
        borderWidth: 1.5,
        height: 90,
        width: 68,
        padding: 5,
        marginRight: 18
    },
    image: {
        height: 30, 
        width:30,
        marginTop: 10,
        marginBottom: 5
    }
});