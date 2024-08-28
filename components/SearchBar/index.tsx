import { View, StyleSheet, TextInput, TouchableHighlight, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import theme from "@/theme";

interface SearchBarProps {
    value: string
    onChangeText: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBar(props: SearchBarProps) {
    
    return(
        <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
                <Octicons name="search" size={28} color={theme.colors.white}/>

                <TextInput style={[styles.textInput, Platform.OS === 'web' && ({outlineStyle: 'none'} as any)]} 
                        placeholder="Digite o nome de uma cidade"
                        placeholderTextColor={theme.colors.gray200}
                        inputMode="search"
                        keyboardAppearance="dark"
                        enterKeyHint="search"
                        onChangeText={props.onChangeText}/>
            </View>
            
            <TouchableHighlight style={{borderRadius:11}} onPress={() => alert(props.value)}>
                <View style={styles.button}>
                    <Ionicons name="location-sharp" size={28} color={theme.colors.white}/>
                </View>
            </TouchableHighlight>
        </View>
    );
} 

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection:  'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        minWidth: '60%'
    },
    inputContainer: {
        flexGrow: 1,
        flexDirection:  'row',
        alignItems: 'center',
        borderRadius: 11,
        marginRight: 16,
        paddingLeft: 10,
        backgroundColor: theme.colors.dark400
    },
    textInput: {
        flexGrow: 1,
        borderRadius: 11,
        paddingLeft: 12,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.OverpassRegular,
        fontSize: theme.fontSize.xs16,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 46,
        width: 46,
        borderRadius: 11,
        backgroundColor: theme.colors.dark400
    }
});