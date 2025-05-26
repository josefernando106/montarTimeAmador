import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { Filme } from "../Pages/Filmes";
import ModalComponent from "./Modal";


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
                <TouchableOpacity style={styles.botao} onPress={() => {setVisibleModal(true) }}>
                    <Text style={styles.textoBotao}>LEIA MAIS</Text>
                </TouchableOpacity>
            </View>

            <Modal transparent={true} animationType="slide" visible={visibleModal} onRequestClose={() => setVisibleModal(false)}>
                <ModalComponent filme={props.data} voltar={() => setVisibleModal(false)}/>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFF',
        marginTop: 15,
        elevation: 2,
    },
    titulo: {
        padding: 15,
        fontSize: 18
    },
    capa: {
        height: 200,
        zIndex: 2,
        resizeMode: 'cover',
    },
    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9,
    },
    botao: {
        width: 100,
        backgroundColor: '#09a6ff',
        borderRadius: 5,
        padding: 8,
        opacity: 8
    },
    textoBotao: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,

    }
});