import { View, Image } from "react-native";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import SearchCard from "@/components/Card-Search";
import Text from "@/components/Text";
import theme from "@/theme";
import styles from "./styles";


const SearchError = () => {
    return (
        <View style={styles.errorContainer}>
            <Image style={styles.image} source={require('@/assets/images/not-found-destination.png')} />

            <Text font={theme.fontFamily.OverpassSemiBold}
                    fontSize={theme.fontSize.xs16}>OPS!
            </Text>

            <View style={{margin: 8}}/>

            <Text font={theme.fontFamily.OverpassSemiBold}
                    fontSize={theme.fontSize.xs16}>Não foi possivel encontrar o local desejado!
            </Text>
        </View>
    );
}


export default function Search() {
    const [value, onChangeText] = useState('');

    return(
        <View style={styles.container}>
            <SearchBar value={value} onChangeText={onChangeText}/>

            <View style={styles.searchCardContainer}>
                {/* <SearchCard/> */}
            </View>

            {/* <SearchError/> */}
        </View>
    );
} 
