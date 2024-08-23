import { StyleSheet } from "react-native";
import theme from "@/theme";

export default StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.dark,
        padding: 28, 
    },
    image: {
        height: 256,
        width: 243,
        marginTop: 105
    },
    text: {
        textDecorationLine: 'underline',
        marginTop: 105
    }
    
});