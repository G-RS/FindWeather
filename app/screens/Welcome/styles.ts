import { StyleSheet } from "react-native";
import theme from "@/app/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.dark,
    },
    image: { 
        width: 222, 
        height: 214 
    },
    title: {
        fontFamily: theme.fontFamily.OverpassSemiBold, 
        fontSize: theme.fontSize.xxl33, 
        color: theme.colors.white,
        marginTop: 57, 
        width: 304
    }, 
    text: {
        marginTop: 33, 
        width: 304
    },
    button: {
        marginTop: 74, 
    }
});
