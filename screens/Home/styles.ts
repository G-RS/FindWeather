import { Platform, StyleSheet } from "react-native";
import theme from "@/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.dark,
        padding: 28,
        paddingTop: 46
    },
    image: {
        height: 256,
        width: 243,
        marginTop: 45
    },
    text: {
        textDecorationLine: 'underline',
        marginTop: 105
    },
    icon: {
        objectFit: 'contain',
        height: Platform.OS == 'web' ? 180 : 140,
        width: 172,
        marginTop: 40
    },
    temperature: {
        flexDirection: 'row',
        marginTop: 10
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: 45,
        width: 328
    },
    linkContainer: {
        flexGrow: 1,
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    hourCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 328
    }
});
