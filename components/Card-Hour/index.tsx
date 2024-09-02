import theme from "@/theme";
import { View, Image, ImageSourcePropType } from "react-native";
import Text from "../Text";

interface HourCardProps {
    temperature: string | number;
    image: string; //ImageSourcePropType;
    hour: string;
}

export default function HourCard(props: HourCardProps) {
    return (
        <View style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme.colors.dark300,
            borderColor: theme.colors.dark100,
            borderRadius: 20,
            borderWidth: 1.5,
            padding: 5,
            height: 90,
            marginRight: 18,
            width: 68
        }}>

            <View style={{
                flexDirection: 'row',
                marginLeft: 5
            }}>
                <Text font={theme.fontFamily.OverpassBold} 
                      fontSize={theme.fontSize.sm18} 
                      color={theme.colors.white}>{props.temperature}
                </Text>
                <Text fontSize={theme.fontSize.xxxs12}>º</Text>
            </View>

            <Image style={{width:30, height: 30, marginBottom: 5}} source={{uri: `https:${props.image}`}}/>

            <Text font={theme.fontFamily.OverpassBold} 
                  fontSize={theme.fontSize.xxxs12}>{props.hour}
            </Text>

        </View>
    );
}