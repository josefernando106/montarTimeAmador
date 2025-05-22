import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput, Touchable, TouchableOpacity, Image } from "react-native";
import Cronometro from "./cronometro";



interface AppState {
    jogadores: string[];
    nome?: string;
    numero: number;
}

class App extends Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            jogadores: [],
            nome: "",
            numero: 0
        };
        this.pegaNome = this.pegaNome.bind(this);
        this.adicionarJogador = this.adicionarJogador.bind(this);

        this.vai = this.vai.bind(this);
        this.parar = this.parar.bind(this);

    }
    vai() {
        setInterval(() => {
            this.setState({ numero: (this.state.numero ?? 0) + 0.1 });
        }, 100);
    }
    parar() {
        this.setState({ numero: 0 });
    }
    pegaNome(nome: string) {
        this.setState({ nome });
    }
    adicionarJogador = (nome: string) => {
        this.setState((prevState: any) => ({
            jogadores: [...prevState.jogadores, nome]
        }));
    };
    render() {
        return (
            <View style={[styles.container]}>
                {/* adiconando os jogadores */}

                <TextInput
                    style={styles.input}
                    placeholder="Digite o nome do jogador"
                    onChangeText={this.pegaNome}
                ></TextInput>

                <View>
                    <TouchableOpacity onPress={() => this.adicionarJogador(this.state.nome ?? "")}>
                        <View style={styles.buton}>
                            <Text style={styles.texto}>
                                Adicione o jogador
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={styles.texto}>
                        LISTA DOS JOGADORES
                    </Text>
                    {this.state.jogadores.map((jogador: string, index: number) => {
                        return (
                            <View key={index}>
                                <Text style={styles.texto}>
                                    {jogador}
                                </Text>
                            </View>
                        )
                    }
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        padding: 10,
        fontSize: 20
    },
    texto: {
        marginLeft: 5
    },
    buton: {
        margin: 10,
        backgroundColor: 'green',
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }

})
export default App;


