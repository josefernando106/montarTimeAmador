import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Filme } from "../Pages/Filmes/Index";

interface ModalProps {
    voltar: () => void;
    filme: Filme;
}

export default function ModalComponent(props: ModalProps) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
                    <Text style={{ color: '#EEE', fontSize: 16 }}>Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>{props.filme.nome}</Text>
                <Text style={styles.sinopse}>Sinopse:</Text>
                <Text style={styles.descricao}>{props.filme.sinopse}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:10,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    content: {
        width: '90%',
        height:'80%',
        backgroundColor:'#121212',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    btnVoltar:{
        backgroundColor:'#E52246',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    titulo:{
        textAlign: 'center',
        color: '#FFF',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    sinopse:{
        color: '#FFF',
        fontSize: 16,
        marginBottom:8,
        marginLeft:10,
    },
    descricao:{
        color: '#FFF',
        fontSize: 14,
        marginLeft:10,
        marginBottom: 10
    }
})