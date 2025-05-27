import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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