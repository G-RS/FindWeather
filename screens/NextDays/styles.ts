import { Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "@/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.dark
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: Platform.OS == 'android' ? 'center' : 'flex-start'
    },
    background: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 32,
        height: 352,
        borderRadius: 56,
        top: Platform.OS == 'web' ? -40 : -Constants.statusBarHeight,
        backgroundColor: theme.colors.dark400
    },
    climateContainer: {
        flexDirection: 'row',
        marginBottom: -25,
        alignItems: 'center',
    },
    icon: {
        height: 114,
        width: 129,
    },
    temperature: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});