import { doc, getDoc, onSnapshot, setDoc, addDoc, collection, updateDoc } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { FlatList, Keyboard, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { db } from '../../Services/fireBase';
import { Users } from './users';


export type users = {
    id: string;
    nome: string;
    idade: string;
    cargo: string;
}

export default function FirebaseIndex() {
    const [nome, setNome] = React.useState<string>('');
    const [idade, setIdade] = React.useState<string>('');
    const [cargo, setCargo] = React.useState<string>('');
    const [users, setUsers] = React.useState<any>([]);
    const [isEdit, setIsEdit] = React.useState<string>('');

    const [showForm, setShowForm] = React.useState<boolean>(false);

    useEffect(() => {
        async function getDados() {
            const usersRef = collection(db, 'Users');
            onSnapshot(usersRef, (snapshot) => {
                let list: any[] = [];
                snapshot.forEach((doc) => {
                    list.push({
                        id: doc.id,
                        nome: doc.data().nome,
                        idade: doc.data().idade,
                        cargo: doc.data().cargo
                    });
                });
                setUsers(list);
            })
        }

        getDados()
    }, []);

    async function handleRegister() {
        // await setDoc(doc(db, 'Users', '2'), {
        //     nome: 'Fernando',
        //     idade: '29',
        //     cargo: 'devops II'
        // }).then(() => {
        //     console.log('Dados registrados com sucesso!');
        // }).catch((error) => {
        //     console.error("Erro ao registrar dados:", error);
        // });
        await addDoc(collection(db, 'Users'), {
            nome: nome,
            idade: idade,
            cargo: cargo
        }).then(() => {
            console.log('Dados registrados com sucesso!');
            setCargo('');
            setIdade('');
            setNome('');
            Keyboard.dismiss();
        }).catch((error) => {
            console.error("Erro ao registrar dados:", error);
        });

    }

    function editUser(item: users) {
        setNome(item.nome);
        setIdade(item.idade);
        setCargo(item.cargo);
        setIsEdit(item.id);
    }

    async function handleEditUser() {
        const docRef = doc(db, 'Users', isEdit);
        await updateDoc(docRef, {
            nome: nome,
            idade: idade,
            cargo: cargo
        }).then(() => {
            console.log('Usuario editado com sucesso!');
            setCargo('');
            setIdade('');
            setNome('');
            setIsEdit('');
            Keyboard.dismiss();
        }).catch((error) => {
            console.error("Erro ao editar usuario:", error);
        })
    }
    return (
        <View style={styles.container}>
            {showForm && <View>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                    placeholder="Digite seu nome"
                />
                <Text style={styles.label}>Idade:</Text>
                <TextInput
                    style={styles.input}
                    value={idade}
                    onChangeText={(idade) => setIdade(idade)}
                    placeholder="Digite seu nome"
                />
                <Text style={styles.label}>Cargo:</Text>
                <TextInput
                    style={styles.input}
                    value={cargo}
                    onChangeText={(cargo) => setCargo(cargo)}
                    placeholder="Digite seu nome"
                />
                {isEdit !== '' ?
                    <TouchableOpacity style={styles.button} onPress={() => handleEditUser()}>
                        <Text style={{ color: '#fff', padding: 10 }}>Editar Usuario</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
                        <Text style={{ color: '#fff', padding: 10 }}>Cadastrar Usuario</Text>
                    </TouchableOpacity>
                }
            </View>}

            <TouchableOpacity style={{ backgroundColor: '#ff5476', margin: 10, padding: 4, alignItems: 'center', borderRadius: 5 }} onPress={() => setShowForm(!showForm)}>
                <Text style={{ color: '#fff', padding: 10 }}>{showForm ? 'Esconder Formulário' : 'Mostrar Formulario'}</Text>
            </TouchableOpacity>

            <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 20, color: '#000' }}>Usuarios:</Text>
            <FlatList
                style={styles.list}
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <Users data={item} handleEdit={(item) => { editUser(item) }} />
                } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f0f0f0',
    },
    button: {
        backgroundColor: '#000',
        margin: 10,
        padding: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    label: {
        fontSize: 16,
        margin: 10,
        color: '#000',
    },
    input: {
        borderWidth: 1,
        marginHorizontal: 10,
        borderColor: '#000',
        padding: 10,
        borderRadius: 5,
    },
    list: {
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        padding: 10,
    },
})