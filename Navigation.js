import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { SettingScreen } from "./src/screens/SettingScreen";
import { StackScreen } from "./src/screens/StackScreen";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Home"
            component={HomeScreen} />
            <Tab.Screen 
            name="Settings" 
            component={SettingScreen} />
            <Tab.Screen 
            name="Stack" 
            component={StackScreen} />
        </Tab.Navigator>
    );
};

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}