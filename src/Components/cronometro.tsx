import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, Image } from "react-native";

interface AppState {
    numero: number;
    botao: string;
}

class Cronometro extends Component<{}, AppState> {
    timer: NodeJS.Timeout | null = null;

    constructor(props: any) {
        super(props);
        this.state = {
            numero: 0,
            botao: 'INICIAR'
        };
        this.timer = null
        this.vai = this.vai.bind(this);
        this.parar = this.parar.bind(this);

    }
    vai() {
        if (this.timer != null) {
            clearInterval(this.timer);
            this.timer = null;
            this.setState({ botao: 'INICIAR' });   

        } else {
            this.timer = setInterval(() => {
                this.setState({ numero: (this.state.numero ?? 0) + 0.1 });
            }, 100);
            this.setState({ botao: 'PARAR' });   
        }

    }
    parar() {
         if (this.timer != null) {
            clearInterval(this.timer);
            this.timer = null;
            this.setState({ botao: 'INICIAR' });   
        }
        this.setState({ numero: 0 });
    }


    render() {
        return (
            <View style={styles.containerCronometro}>
                <Image
                    source={require('./src/cronometro.png')}
                // style={styles.cronometro} 
                />

                <Text style={styles.timer}>
                    {(this.state.numero ?? 0).toFixed(2)}
                </Text>
                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.btn}>
                        <Text onPress={this.vai}>
                            {this.state.botao}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text>
                            ZERAR CRONOMETRO
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerCronometro: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00aeef'
    },
    timer: {
        marginTop: -160,
        color: '#FFF',
        fontSize: 65,
        fontWeight: 'bold'
    },
    btnArea: {
        flexDirection: 'row',
        marginTop: 70,
        height: 40
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 40,
        margin: 17,
        borderRadius: 9
    },
    btnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00aeef'
    },
    


})
export default Cronometro;


