import React, { useEffect, useState } from "react";
import { ActivityIndicator, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { PickerItem } from "../../Components/Helper";
import { apiEconomia } from "../../Services/Api";

export default function ConverterApp() {
    const [moedas, setMoedas] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [moedaSelecionada, setMoedaSelecionada] = useState<any>(null);
    const [moedaBvalor, setMoedaBValor] = useState<any>();
    const [valorConvertido, setValorConvertido] = useState<any>(null);
    const [valorMoeda, setValorMoeda] = useState<any>();

    useEffect(() => {
        async function loadMoedas() {
            const response = await apiEconomia.get('/all')
            let arrayMoedas: any = [];
            Object.keys(response.data).map((key) => {
                arrayMoedas.push({
                    key: key,
                    label: key,
                    value: key
                });
            });
            setMoedas(arrayMoedas);
            setMoedaSelecionada(arrayMoedas[0].key);
            setLoading(false);
        }

        loadMoedas()
    }, []);

    async function converter() {
        if (moedaBvalor === '' || moedaBvalor === '0.00') {
            return;
        }
        const response = await apiEconomia.get(`all/${moedaSelecionada}-BRL`);
        setValorConvertido(
            (response.data[moedaSelecionada].ask * parseFloat(moedaBvalor))
            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        );
        setValorMoeda(moedaBvalor);
        Keyboard.dismiss();

    }
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#09a6ff" />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.moeda}>
                    <Text style={styles.titulo}>Selecione sua Moeda</Text>
                    <PickerItem
                        moedas={moedas}
                        moedaSelecionada={moedaSelecionada}
                        onChange={(moeda) => setMoedaSelecionada(moeda)} />
                </View>
                <View style={styles.convercao}>
                    <Text style={styles.titulo}>Digite um valor para converter em (R$)</Text>
                    <TextInput
                        placeholder="EX: 1.50"
                        style={styles.input}
                        value={moedaBvalor}
                        onChangeText={(e: any) => setMoedaBValor(e)}
                        keyboardType="numeric" />
                </View>
                <TouchableOpacity style={styles.botao} onPress={() => { converter() }}>
                    <Text style={styles.botaoText}>Converter</Text>
                </TouchableOpacity>

                {valorConvertido !== null && (
                    <View style={styles.areaResultado}>
                        <Text style={styles.valorConvertido}>{valorMoeda} {moedaSelecionada}</Text>
                        <Text style={{ fontSize: 16, color: "#111", marginTop: 10 }}> Corresponde a </Text>
                        <Text style={styles.valorConvertido}>{valorConvertido}</Text>
                    </View>)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101215',
        paddingTop: 40,
        alignItems: 'center',
    },
    moeda: {
        backgroundColor: "#f9f9f9",
        width: '90%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        marginBottom: 1,
    },
    titulo: {
        fontSize: 20,
        color: "#111",
        paddingLeft: 5,
        paddingTop: 5,
        textAlign: 'center',
        margin: 10,
    },
    convercao: {
        backgroundColor: "#f9f9f9",
        width: '90%',
        padding: 10,
    },
    input: {
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 18,
        color: "#111",
        marginTop: 10,
    },
    botao: {
        backgroundColor: "#fb4b57",
        width: '90%',
        height: 45,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
    },
    areaResultado: {
        width: '90%',
        marginTop: 20,
        padding: 15,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    valorConvertido: {
        fontSize: 20,
        color: "#111",
    }
});