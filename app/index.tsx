import { Text, View } from "react-native";
import {useFonts, Overpass_400Regular, Overpass_600SemiBold} from '@expo-google-fonts/overpass';


export default function Index() {
  let [fontsLoaded] = useFonts({
    Overpass_400Regular,
    Overpass_600SemiBold
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontFamily: 'Overpass_600SemiBold', 
        fontSize: 33, 
        textAlign: "center", 
        width: 304}}>Descubra o Clima na sua Cidade
      </Text>

    </View>
  );
}
