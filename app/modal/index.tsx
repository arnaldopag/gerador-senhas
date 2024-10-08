import { StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";
import * as ClipBoard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'
import { assertEasingIsWorklet } from "react-native-reanimated/lib/typescript/reanimated2/animation/util";

export function ModalPassword({ password, handleClose }) {

    const { saveItem } = useStorage();

    async function copyPassword() {
        await ClipBoard.setStringAsync(password)
        await saveItem('@pass', password)
        alert('Senha salva')
        handleClose()
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text> senha do caralho</Text>
                <Pressable style={styles.innerPassword} onLongPress={copyPassword}>
                    <Text style={{ color: '#ffff' }}>{password}</Text>
                </Pressable>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text> Voltar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonSave}>
                        <Text style={styles.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24,24,24,0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#FFF',
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 24
    },
    innerPassword: {
        backgroundColor: '#0e0e0e',
        width: "90%",
        padding: 14,
        borderRadius: 8
    },
    text: {
        color: "#fff",
        textAlign: "center"
    },
    buttonArea: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        flex: 1,
        alignItems: 'center',
        margin: 14,
        padding: 8,
    },
    buttonSave: {
        flex: 1,
        alignItems: 'center',
        margin: 14,
        padding: 8,
        backgroundColor: "#392de9",
        borderRadius: 8
    },

    buttonSaveText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})