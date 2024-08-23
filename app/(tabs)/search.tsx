import { StyleSheet, View } from "react-native";
import Text from "@/components/Text";
import theme from "@/theme";


export default function TabSearch() {
    return(
        <View style={styles.container}>

            <Text fontSize={theme.fontSize.xxl33}>Busca</Text>

        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
