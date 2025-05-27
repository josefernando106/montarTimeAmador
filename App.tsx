import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Pages/Home/Index';
import Filmes from './src/Pages/Filmes/Index';
import Converter from './src/Pages/Moedas/Index';
import Animacao from './src/Pages/Animacao/Index';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ title: 'Página Inicial' }} />
            <Stack.Screen name="Filmes" component={Filmes} options={{ title: 'Lista de Filmes' }} />
            <Stack.Screen name="Converter" component={Converter} options={{ title: 'Conversor de Moedas' }} />
        </Stack.Navigator> */}
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Inicio'
                    }} />

                <Tab.Screen name="Filmes" component={Filmes} options={{ title: 'Lista de Filmes' }} />
                <Tab.Screen name="Converter" component={Converter} options={{ title: 'Conversor de Moedas' }} />
                <Tab.Screen name="Animacao" component={Animacao} options={{ title: 'Animação' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}