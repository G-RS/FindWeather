import { Platform, StyleSheet } from "react-native";
import theme from "@/theme";


export default StyleSheet.create({
    container: {
        flex:1,
        padding: 28,
        paddingTop: Platform.OS == 'web' ? 28 : 80,
        backgroundColor: theme.colors.dark
    },
    searchCardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 12
    },
    errorContainer: {
        flexGrow: 1,
        alignItems: 'center'
    },
    image: {
        objectFit: 'contain',
        height: 226,
        width: 306,
        marginBottom: 20
    }
});