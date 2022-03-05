import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "../screens/WelcomeScreen";
import NewsScreen from "../screens/NewsScreen";
import AboutScreen from "../screens/AboutScreen";

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
    return (
        <RootStack.Navigator >
            <RootStack.Screen 
                name='Welcome'
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />
            <RootStack.Screen 
                name='News'
                component={NewsScreen}
                options={{ headerShown: false }}
            />
            <RootStack.Screen 
                name='About'
                component={AboutScreen}
                options={{ headerTitle: 'Welcome' }}
            />
        </RootStack.Navigator>
    )
}

export default RootStackNavigator
