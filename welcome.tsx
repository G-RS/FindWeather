import {useFonts, Overpass_400Regular, Overpass_600SemiBold, Overpass_700Bold} from '@expo-google-fonts/overpass';
import { StatusBar } from "expo-status-bar";
import * as SystemUI from 'expo-system-ui'
import theme from "@/theme";
import Welcome from '@/screens/Welcome';


export default function Index() {
  SystemUI.setBackgroundColorAsync(theme.colors.dark);

  let [fontsLoaded] = useFonts({
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <>
      <StatusBar style="light"/>

      <Welcome /> 
    </>
  );
}
