import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes/Index';

export default function App() {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
}
