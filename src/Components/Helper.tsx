import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { Filme } from "../Pages/Filmes";
import ModalComponent from "./Modal";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./StyleSheet";


export default function Filmes(props: { data: Filme }) {
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    
    return (
        <View style={styles.card}>
            <Text style={styles.titulo}>{props.data.nome}</Text>
            <Image
                source={{ uri: props.data.foto }}
                style={styles.capa}
            />
            <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.botao} onPress={() => { setVisibleModal(true) }}>
                    <Text style={styles.textoBotao}>LEIA MAIS</Text>
                </TouchableOpacity>
            </View>

            <Modal transparent={true} animationType="slide" visible={visibleModal} onRequestClose={() => setVisibleModal(false)}>
                <ModalComponent filme={props.data} voltar={() => setVisibleModal(false)} />
            </Modal>

        </View>
    );
}

interface PickerItemProps {
    moedas: Array<{ key: string, label: string, value: string }>;
    moedaSelecionada: string;
    onChange: (moeda: string) => void;
}


export function PickerItem(props: PickerItemProps) {
    let moedas = props.moedas.map((item, index) => {
        return (
            <Picker.Item key={index} label={item.label} value={item.value} />
        );
    });
    return (
        <Picker
            selectedValue={props.moedaSelecionada}
            onValueChange={(itemValue) => props.onChange(itemValue)}>
            {moedas}
        </Picker>
    );
}
