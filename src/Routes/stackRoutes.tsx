import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Pages/Home/Index";
import AnimacaoApp from "../Pages/Animacao/Index";

const Stack = createNativeStackNavigator();
export default function StackRoutes() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{ title: 'Página Inicial' }} 
            />
            <Stack.Screen 
                name="Animacao" 
                component={AnimacaoApp} 
                options={{ title: 'Animação' }} 
                />
        </Stack.Navigator>
    )
}