import React, { useState } from "react";
import { Text, View } from "react-native";


export default function App() {
  const [nome, setNome] = useState('BEM VINDO');


  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>      
      <Text> {nome} </Text>
    </View>
  )
}