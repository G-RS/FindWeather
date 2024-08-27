import { View, Image, ImageSourcePropType } from "react-native";
import Text from "../Text";
import theme from "@/theme";

interface ItemProps {
    image: ImageSourcePropType,
    middleText: string,
    bottomText: string
}

const Item = (props: ItemProps) => {
    return (
        <View style={{
            flexGrow: 1,
            alignItems: 'center',
            margin: 5
        }}>
            <Image style={{
                objectFit: 'contain',
                maxHeight: '40%',
                maxWidth: '40%',
                height: 20,
                width: 16
            }} source={props.image} />

            <Text font={theme.fontFamily.OverpassBold} 
                  fontSize={theme.fontSize.xs16}
                  color={theme.colors.white}>{props.middleText}
            </Text>

            <Text font={theme.fontFamily.OverpassLight} 
                  fontSize={theme.fontSize.xxs14}>{props.bottomText}
            </Text>
            
        </View>
    );
}

const Divider = () => {
    return (
        <View style={{
            height: 36,
            width: 1,
            backgroundColor: theme.colors.gray600
        }}/>
    );
}

export default function WeatherCard() {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: theme.colors.gray600,
            borderRadius: 18,
            borderWidth: 1,
            width: 328,
            height: 76,
            marginTop: 45
        }}>
            <Item image={require("@/assets/images/weather-icons/drop-water.png")}
                  middleText="24%"
                  bottomText="Umidade"
            />

            <Divider/>

            <Item image={require("@/assets/images/weather-icons/wind.png")}
                  middleText="20km/h"
                  bottomText="Veloc. Vento"
            />

            <Divider/>

            <Item image={require("@/assets/images/weather-icons/raining-middle.png")}
                  middleText="76%"
                  bottomText="Chuva"
            />

        </View>
    );
}