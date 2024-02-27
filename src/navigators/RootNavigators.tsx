import React from "react";
import {
    NativeStackScreenProps, 
    createNativeStackNavigator, 
} from "@react-navigation/native-stack";
import { Onboarding1 } from "../screens/Onboarding1";


export type RootStackParamList = {
    Onboarding1: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackProps<T extends keyof RootStackParamList> = 
NativeStackScreenProps<RootStackParamList, T>;

export const RootNavigators = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen 
                    name="Onboarding1" 
                    component={Onboarding1}
                    options={{
                        headerShown: false,
                        animation: "fade",
                    }}
                />
            </RootStack.Group>
        </RootStack.Navigator>
    );
};
