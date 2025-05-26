import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Picker } from '@react-native-picker/picker';

interface pizzaState {
    pizza: number;
    pizzas: { id: number; name: string; price: number }[];
}

export default class Pickers extends Component<{}, pizzaState> {

    constructor(props: any) {
        super(props);
        this.state = {
            pizza: 0,
            pizzas: [
                { id: 0, name: 'Calabresa', price: 59.90 },
                { id: 1, name: 'Mussarela', price: 49.90 },
                { id: 2, name: 'Portuguesa', price: 69.90 },
                { id: 3, name: 'Frango com Catupiry', price: 59.90 },
                { id: 4, name: 'Quatro Queijos', price: 79.90 },
                { id: 5, name: 'Pepperoni', price: 69.90 },
            ]
        }
    }
    render() {

        let pizzas = this.state.pizzas.map((pizza, key) => {
            return (
                <Picker.Item key={key} value={pizza.id} label={pizza.name} />
            )
        });

        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Menu Pizza</Text>
                <Picker
                    selectedValue={this.state.pizza}
                    onValueChange={(itemValue) => this.setState({ pizza: itemValue })}>
                    {pizzas}
                </Picker>
                <Text style={styles.pizzas}>Voce escolhe: {this.state.pizzas[this.state.pizza].name}</Text>
                <Text style={styles.pizzas}>R$ 59,90</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
        textAlign: 'center'
    },
    pizzas: {
        marginTop: 15,
        fontSize: 20,
        textAlign: 'center',
    }
})