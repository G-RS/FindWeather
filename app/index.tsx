import {useFonts, Overpass_400Regular, Overpass_600SemiBold, Overpass_700Bold} from '@expo-google-fonts/overpass';
import { StatusBar } from "expo-status-bar";
import * as SystemUI from 'expo-system-ui'
import theme from "@/theme";
import Welcome from '@/screens/Welcome';
import { useEffect, useState } from 'react';
import { router, useNavigation } from 'expo-router';
import { getAllKeys, getData } from '@/storage/async-storage';
import { StorageKeys } from '@/utils/storage.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Index() {
  const [isFirstAccess, setFirstAccess] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(theme.colors.dark);
    navigation.setOptions({ headerShown: false });

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

      { isFirstAccess != "true" ? <Welcome /> : router.replace('/(tabs)') } 

      {/* {console.log(isFirstAccess)} */}
    </>
  );
}
