import {View, Image} from "react-native";
import Text from "@/components/Text";
import Button from "@/components/Button";
import theme from "@/theme";
import styles from "./styles";
import { router } from "expo-router";
import { storeData } from "@/storage/async-storage";
import { StorageKeys } from "@/utils/storage.interface";


export default function Welcome() {

  return (
    <View style={styles.container}>

      <Image style={styles.image} source={require('@/assets/images/cloud-and-thunder.png')}/>
        
      <Text style={styles.title}>Descubra o Clima na sua Cidade</Text>

      <Text style={styles.text}>Com o Find
        <Text font={theme.fontFamily.OverpassBold}>Weather</Text> nunca ficou tão fácil ter a previsão do tempo na palma da sua mão
      </Text>
        
      <Button style={styles.button} onPress={() => {
        storeData(StorageKeys.FirstAccess, "true");
        router.replace('/(tabs)');
        }}><Text color={theme.colors.white}>Iniciar</Text>
      </Button>

    </View>  
  );
}
