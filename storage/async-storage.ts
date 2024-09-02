import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "@/utils/storage.interface";

export const storeData = async (key: StorageKeys, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(`Saving error: ${error}`);
    }
};

export const getData = async (key: StorageKeys) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value !== null ? value : "";
    } catch (error) {
        console.log(`Reading error: ${error}`);
    }
};

export const getAllKeys = async () => {
    try {
        return await AsyncStorage.getAllKeys();
    } catch (error) {
        console.log(`Get All Keys Error: ${error}`);
    }
};



export const storeTestData = async (value: {}) => {
    try {
        await AsyncStorage.setItem(StorageKeys.Test, JSON.stringify(value));
    } catch (error) {
        console.log(`Saving Test Data Error: ${error}`);
    }
};

export const getTestData = async () => {
    try {
        const value = await AsyncStorage.getItem(StorageKeys.Test);
        return value !== null ? JSON.parse(value) : {};
    } catch (error) {
        console.log(`Reading error: ${error}`);
    }
};