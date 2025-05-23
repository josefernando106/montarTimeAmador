import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

import { Picker } from '@react-native-picker/picker';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      sabor: 'calabresa',
      valor: 59.90
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) => this.setState({ pizza: itemValue })}
        >
          <Picker.Item key={1} value={1} label={'calabresa'} />
        </Picker>
        <Text style={styles.pizzas}>Voce escolhe: Pizza Calabresa</Text>
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