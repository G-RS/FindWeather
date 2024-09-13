import { useFonts, Overpass_600SemiBold, Overpass_700Bold, Overpass_400Regular, Overpass_300Light } from '@expo-google-fonts/overpass';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Redirect, useNavigation } from 'expo-router';
import { StorageKeys } from '@/utils/storage.interface';
import { getData } from '@/storage/async-storage';
import * as SystemUI from 'expo-system-ui';
import Welcome from '@/screens/Welcome';
import theme from "@/theme";



export default function Index() {
  const [isFirstAccess, setFirstAccess] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(theme.colors.dark);
    navigation.setOptions({ headerShown: false });
    
    if (Platform.OS == 'web') {
      document.title = 'FindWeather';
    }
    
    getData(StorageKeys.FirstAccess)
      .then( (data) => { setFirstAccess(data as string); } );
  }, [navigation]);

  let [fontsLoaded] = useFonts({
        Overpass_300Light,
        Overpass_400Regular,
        Overpass_600SemiBold,
        Overpass_700Bold
  });

  if (!fontsLoaded) { return }

  return (
    <>
      <StatusBar style="light"/>

      { isFirstAccess != "true" ? <Welcome /> : <Redirect href="/(tabs)"/> } 
    </>
  );
}
