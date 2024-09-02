import {useFonts, Overpass_400Regular, Overpass_600SemiBold, Overpass_700Bold, Overpass_300Light} from '@expo-google-fonts/overpass';
import Home from "@/screens/Home";


export default function TabHome() {
    let [fontsLoaded] = useFonts({
        Overpass_300Light,
        Overpass_400Regular,
        Overpass_600SemiBold,
        Overpass_700Bold
      });
    
      if (!fontsLoaded) { return }

    return(
        <Home/>
    );
} 
