import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable';

// Criar um componente animado para o TouchableOpacity
const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {

    const larAnimado = useRef(new Animated.Value(150)).current;
    const altAnimado = useRef(new Animated.Value(50)).current;
    const opacidadeAnimada = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        //Inicia a animação de forma sequencial
        //Primeiro anima a opacidade, depois a largura e altura em paralelo
        Animated.sequence([
            Animated.timing(opacidadeAnimada, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: false
            }),
            // Animação de largura e altura em paralelo
            Animated.parallel([
                Animated.timing(altAnimado, {
                    toValue: 350,
                    duration: 2000,
                    useNativeDriver: false
                }),
                Animated.timing(larAnimado, {
                    toValue: 350,
                    duration: 2000,
                    useNativeDriver: false
                })
            ])
        ]).start(() => {
            // Callback após a animação terminar
        });

        // Animated.loop(
        //     Animated.parallel([
        //         Animated.timing(altAnimado, {
        //             toValue: 350,
        //             duration: 2000,
        //             useNativeDriver: false
        //         }),
        //         Animated.timing(larAnimado, {
        //             toValue: 350,
        //             duration: 2000,
        //             useNativeDriver: false
        //         })
        //     ])
        // ).start();

    }, []);

    // interpolar o valor da largura para uma porcentagem
    let porcetegemLargura = larAnimado.interpolate({
        inputRange: [150, 350],
        outputRange: ['40%', '100%']
    });

    return (
        <View style={styles.container}>
            <Animatable.Text
                style={{ fontSize: 22, textAlign: 'center', color: '#111' }}
                animation="shake"
                duration={2000}
                iterationCount="infinite"
            >Carregando...</Animatable.Text>

            <TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f5',
        alignItems: 'center',
        justifyContent: 'center',
    }
});