import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { users } from "./Index";
import { db } from "../../Services/fireBase";
import { doc, deleteDoc } from "firebase/firestore";

export type UserProps = {
    data: users;
    handleEdit: (user: users) => void;
}
export function Users({ data, handleEdit }: UserProps) {
    async function handleDeleteUser() {
        const docRef = doc(db, 'Users', data.id);
        await deleteDoc(docRef).then(() => {
            console.log('Usuario deletado com sucesso!');
        }).catch((error) => {
            console.error("Erro ao deletar usuario:", error);
        })
    }
    async function handleEditUser(item: users) {
            handleEdit(item);       
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 16, color: '#000' }}>Nome: {data.nome}</Text>
            <Text style={{ fontSize: 16, color: '#000' }}>Idade: {data.idade}</Text>
            <Text style={{ fontSize: 16, color: '#000' }}>Cargo: {data.cargo}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <TouchableOpacity
                    onPress={() => handleDeleteUser()}
                    style={{ backgroundColor: '#b3261e', padding: 5, borderRadius: 5, marginTop: 5, alignSelf: 'flex-start' }}>
                    <Text style={{ color: '#fff' }}>Deletar Usuario</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleEditUser(data)}
                    style={{ backgroundColor: '#111', padding: 5, borderRadius: 5, marginTop: 5, alignSelf: 'flex-start' }}>
                    <Text style={{ color: '#fff' }}>Editar Usuario</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        padding: 8,
        borderRadius: 5,
        marginBottom: 10,
    }
})