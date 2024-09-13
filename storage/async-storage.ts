import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "@/utils/storage.interface";

export const storeData = async (key: StorageKeys, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(`Saving Error: ${error}`);
    }
};

export const getData = async (key: StorageKeys) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value !== null ? value : "";
    } catch (error) {
        console.log(`Reading Error: ${error}`);
    }
};

export const getAllKeys = async () => {
    try {
        return await AsyncStorage.getAllKeys();
    } catch (error) {
        console.log(`Get All Keys Error: ${error}`);
    }
};

export const clearAllData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log(`Clear Data Error: ${error}`);
    }
}