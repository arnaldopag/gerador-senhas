import { useState } from 'react'
import { ModalPassword } from '../modal'
import Slider from '@react-native-community/slider'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'

const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";



export function Home() {

    const [size, setSize] = useState(8);
    const [passwordValue, setPasswordValue] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    function generatePassword() {
        let password = ''
        for (let i = 0, n = charSet.length; i < size; i++) {
            password += charSet.charAt(Math.floor(Math.random() * n))
        }
        setPasswordValue(password);
        setModalVisible(true);
        console.log(password)
    }


    return (
        <View style={styles.container}>
            <Image
                source={require("/Users/Arnaldo/Desktop/codigo/Senac/gerador-senhas/src/assets/logo.png")}
                style={styles.logo}
            />
            <Text style={styles.title}>{size} caracteres</Text>
            <View style={styles.area}>
                <Slider
                    style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={30}
                    maximumTrackTintColor='#ff0000'
                    minimumTrackTintColor='#000'
                    thumbTintColor='#392de9'
                    value={size}
                    onValueChange={(value) =>
                        setSize(Math.round(value))}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar Senha</Text>
            </TouchableOpacity>


            <Modal visible={modalVisible} animationType='fade' transparent={true}>
                <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F3FF",
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginBottom: 60
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 6
    },
    button: {
        backgroundColor: "#392de9",
        width: "80%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 18
    },
    buttonText: {
        color: "#FFF",
        fontSize: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})