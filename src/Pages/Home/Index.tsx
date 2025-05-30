import { useNavigation, NavigationProp } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


type RootStackParamList = {
    Home: undefined;
    Converter: undefined;
    Filmes: undefined;
};

export default function Home() {
    const navigator = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Bem-vindo à página inicial!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    texto: {
        fontSize: 24,
        color: '#333',
    },
});