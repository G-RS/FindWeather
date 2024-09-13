import { View, Image, ActivityIndicator } from "react-native";
import { useState } from "react";
import { weatherAPI } from "@/services/weather-api";
import { WeatherAPI } from "@/utils/weather-api.interface";
import { StorageKeys } from "@/utils/storage.interface";
import { storeData } from "@/storage/async-storage";
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
    const [textValue, onChangeText] = useState('');
    const [forecast, setForecast] = useState({} as WeatherAPI);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleAPICall = async () => {
        setIsError(false);
        setIsLoading(true);

        weatherAPI.getForecast(textValue)
            .then((response) => { 
                setForecast(response.data);
                storeData(StorageKeys.CityName, textValue);
            })
            .catch((error) => { 
                setIsError(true);
                console.log(error);
            })
            .finally(() => { 
                onChangeText(''); 
                setIsLoading(false); 
            })
    };

    return(
        <View style={styles.container}>
            <SearchBar value={textValue} 
                       placeholder="Digite o nome de uma cidade"
                       onChangeText={onChangeText} 
                       onEndEditing={handleAPICall}
                       onPress={handleAPICall} />

            <View style={styles.searchCardContainer}>
                { !isError && (forecast.current != null) ? <SearchCard forecast={forecast} /> : ''}
            </View>

            { isLoading ? <ActivityIndicator size='large' color='white' /> : '' }

            { isError ? <SearchError/> : '' }
    
        </View>
    );
} 
