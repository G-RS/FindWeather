import {useFonts, Overpass_400Regular, Overpass_600SemiBold, Overpass_700Bold} from '@expo-google-fonts/overpass';
import Home from "@/screens/Home";


export default function TabHome() {
    let [fontsLoaded] = useFonts({
        Overpass_400Regular,
        Overpass_600SemiBold,
        Overpass_700Bold
      });
    
      if (!fontsLoaded) {
        return;
      }

    return(
        <Home/>
    );
} 
