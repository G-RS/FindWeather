import { Tabs } from "expo-router";
import { Octicons } from "@expo/vector-icons";
import theme from "@/theme";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
                headerShown: false, 
                tabBarActiveTintColor: theme.colors.white,
                tabBarInactiveTintColor: theme.colors.gray500,
                tabBarLabelPosition:'beside-icon',
                tabBarStyle: {
                    backgroundColor: theme.colors.dark
                }
            }}
        >
            <Tabs.Screen 
                name="index" 
                options={{
                    title:'Home',
                    tabBarIcon: ({color}) => <Octicons name="home" size={28} color={color}/>
                }}
            />
            <Tabs.Screen 
                name="search" 
                options={{
                    title:'Buscar',
                    tabBarIcon: ({color}) => <Octicons name="search" size={28} color={color}/>
                }}
            />
        </Tabs>
    );
}