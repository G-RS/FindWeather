import {View, Image} from "react-native";
import { StatusBar } from "expo-status-bar";
import {useFonts, Overpass_400Regular, Overpass_600SemiBold, Overpass_700Bold} from '@expo-google-fonts/overpass';
import * as SystemUI from 'expo-system-ui'
import Text from "@/app/components/Text";
import Button from "@/app/components/Button";
import theme from "@/app/theme";
import styles from "./styles";


export default function Welcome() {
  SystemUI.setBackgroundColorAsync(theme.colors.dark);

  let [fontsLoaded] = useFonts({
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold
  });

  return (
    <>
      <StatusBar style="light"/>

      <View style={styles.container}>
    
        <Image style={styles.image} source={require('../../../assets/images/cloud-and-thunder.png')}/>
        
        <Text style={styles.title}>Descubra o Clima na sua Cidade</Text>

        <Text style={styles.text}>Com o Find
          <Text font={theme.fontFamily.OverpassBold}>Weather</Text> 
          nunca ficou tão fácil ter a previsão do tempo na palma da sua mão
        </Text>
        
        <Button style={styles.button}><Text color={theme.colors.white}>Iniciar</Text></Button>

      </View>
    </>
  );
}