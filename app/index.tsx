import { useEffect, useState } from 'react';
import { Redirect, useNavigation } from 'expo-router';
import { useFonts, Overpass_400Regular, Overpass_600SemiBold, Overpass_700Bold } from '@expo-google-fonts/overpass';
import { StorageKeys } from '@/utils/storage.interface';
import { getData } from '@/storage/async-storage';
import { StatusBar } from "expo-status-bar";
import * as SystemUI from 'expo-system-ui';
import Welcome from '@/screens/Welcome';
import theme from "@/theme";
import { title } from 'process';
import { Platform } from 'react-native';


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
      .then( (data) => {setFirstAccess(data as string); console.log(data)} );
  }, [navigation]);

  let [fontsLoaded] = useFonts({
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
