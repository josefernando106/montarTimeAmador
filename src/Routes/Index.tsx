import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Pages/Home/Index';
import Filmes from '../Pages/Filmes/Index';
import Converter from '../Pages/Moedas/Index';
import Animacao from '../Pages/Animacao/Index';
import Firebase from '../Pages/Firebase/Index';
import StackRoutes from './stackRoutes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function Routes() {

    return (
        <Tab.Navigator>
                {/* <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ title: 'Página Inicial' }} />
                <Stack.Screen name="Filmes" component={Filmes} options={{ title: 'Lista de Filmes' }} />
                <Stack.Screen name="Converter" component={Converter} options={{ title: 'Conversor de Moedas' }} />
            </Stack.Navigator> */}
                {/* <Tab.Screen
                    name="HomeStack"
                    component={StackRoutes}
                    options={{
                        title: 'Inicio',
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="home" size={size} color={color} />
                        ),
                    }} />                */}
                <Tab.Screen
                name="Home" 
                component={Home}
                options={{ 
                    title: 'Página Inicial',
                    tabBarIcon: ({color, size}) => (
                        <Feather name="home" size={size} color={color} />
                    ) }} />    
                <Tab.Screen 
                name="Converter" 
                component={Converter}
                options={{ 
                    title: 'Conversor',
                    tabBarIcon: ({color, size}) => (
                        <Feather name="dollar-sign" size={size} color={color} />
                    ) }} />
                <Tab.Screen 
                name="Filme" 
                component={Filmes}
                options={{ 
                    title: 'Filmes',
                    tabBarIcon: ({color, size}) => (
                        <Feather name="film" size={size} color={color} />
                    ) }} />
                <Tab.Screen 
                name="Animacao" 
                component={Animacao} 
                options={{ 
                    title: 'Animação',
                    tabBarIcon: ({color, size}) => (
                        <Feather name="monitor" size={size} color={color} />
                    ) }} />
                      <Tab.Screen 
                name="Firebase" 
                component={Firebase} 
                options={{ 
                    title: 'Firebase',
                    tabBarIcon: ({color, size}) => (
                        <Feather name="database" size={size} color={color} />
                    ) }} />
            </Tab.Navigator>
    );
}