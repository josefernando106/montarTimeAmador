import React, { useEffect, useLayoutEffect, useState } from "react";

import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import api from '../../Services/Api';
import Filmes from "../../Components/Helper";
import { useNavigation } from "@react-navigation/native";

export interface Filme {
    id: number;
    nome: string;
    sinopse: string;
    foto: string;
}

export default function FilmesApp() {

    const [filmes, setFilmes] = useState<Filme[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Lista de Filmes 2023',
        })
    }, [navigation]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('r-api/?api=filmes')
            setFilmes(response.data);
            setLoading(false);
        }
        loadFilmes();
    }, []);

    if (loading) {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <ActivityIndicator
                    size={45}
                    color="#121212"
                    style={{ marginTop: 20 }} />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <FlatList
                    data={filmes}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <Filmes data={item} />
                    )} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});