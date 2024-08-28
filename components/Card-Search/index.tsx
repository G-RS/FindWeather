import { StyleSheet, View, Image } from "react-native";
import Temperature from "../Temperature";
import Text from "../Text";
import theme from "@/theme";


export default function SearchCard() {

    return(
        <View style={styles.container}>

            <View style={styles.climateContainer}>
                <View style={styles.imageContainer}>
                    <Temperature value="13" fontSize1={theme.fontSize.lg30} fontSize2={theme.fontSize.sm18}/>
                    <Image style={styles.image} source={require('@/assets/images/weather-icons/cloud.png')}/>
                </View>

                <Text fontSize={theme.fontSize.sm18}>Nublado</Text>
            </View>

            <Text fontSize={theme.fontSize.sm18}
                  textAlign="left"
                  color={theme.colors.white}>Santiago de Compostele, Espanha
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        height: 164,
        width: 155,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: theme.colors.dark100,
        backgroundColor: theme.colors.dark300
    },
    climateContainer: {
        alignItems: 'flex-start',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
    },
    image: {
        height: 27,
        width: 39
    },
    city: {

    }
});
