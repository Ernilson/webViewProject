import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, ImageBackground, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import firebase from '../firebase';

class oracao extends Component {
    state = {
        name: '',
        pedidos: ''
    }

    createFirebase = async () =>  {
        var database = firebase.database();
        try {
           await database.ref('/pedidos').push({
                name: this.state.name,
                pedidos: this.state.pedidos,
            })

           //showSuccess('Mensagem enviada com sucesso!')
        } catch (e) {
            alert(e);
        }
        // this.setState({ ...initialState })
    }

    render() {
        /*
        const validations = []
        validations.push(this.state.name && this.state.name.trim())
        validations.push(this.state.pedidos === this.state.pedidos.trim())
        const validForm = validations.reduce((t, a) => t && a)
        */
        return (

            <View style={styles.container}>
                <ImageBackground source={require("../../assets/corapp.jpg")}
                    style={{ width: 395, padding: 50, paddingTop: 70 }}>
                    <SafeAreaView >
                        <Text></Text>
                        <Text style={{ flexDirection: 'row', justifyContent: 'center', textAlign: 'center', marginTop: 5, fontSize: 20 }}>A Deus seja a glória. </Text>
                        <TouchableOpacity style={{ alignItems: "flex-end", margin: 5 }}
                            onPress={this.props.navigation.openDrawer}>
                            <FontAwesome5 name="bars" size={30} color="#161924" />
                        </TouchableOpacity>

                    </SafeAreaView>

                    <Text style={styles.text}>Disse Jesus:</Text>
                    <Text style={styles.text}>
                        Pedi, pedi e dar-se-vos-á; buscai, buscai e achareis; batei, batei e abrir-se-vos-á.
                        Porque, aquele que pede, recebe; e, o que busca, encontra; e, ao que bate, abrir-se-lhe-á.
                    </Text>
                    <Text style={styles.text}>Mateus 07: 07 e 08</Text>
                    <TextInput style={styles.nomeInput}
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                        placeholder="Nome" />

                    <TextInput style={styles.pedidosInput}
                        value={this.state.pedidos}
                        onChangeText={pedidos => this.setPedidos({ pedidos })}
                        placeholder="Escreva aqui seu pedido de oração. " />

                    <TouchableOpacity style={styles.btnEnviar} onPress={this.createFirebase()}>
                        <Text style={styles.enviar}>Enviar</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    enviar: {
        color: '#000',
        fontSize: 16,
        marginLeft: 60
    },
    text: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
    },

    nomeInput: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 2,
        textAlign: 'center',
        marginTop: 30,
    },
    pedidosInput: {
        width: 300,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 2,
        textAlign: 'center',
        marginTop: 5,
    },
    btnEnviar: {
        margin: 10,
        //borderWidth: 2,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40

    },

});

export default oracao;