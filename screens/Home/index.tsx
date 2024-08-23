import { View, Image } from "react-native";
import Text from "@/components/Text";
import theme from "@/theme";
import styles from "./styles";


export default function Home() {
    return(
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
