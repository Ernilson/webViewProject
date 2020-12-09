import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground, Alert } from 'react-native';

import firebase from '../../firebase';

export default function Pedidos({ navigation }) {

  const [name, setName] = useState('');
  const [pedidos, setPedidos] = useState('');

  function createFirebase() {
    var database = firebase.database();
    try {
      if(name === null|| pedidos === null){
        return Alert.alert('Preenchemento obrigatorio!')
      }else{
      database.ref('/pedidos').push({
        name: name,
        pedidos: pedidos,
      });
      }
      Alert.alert('Mensagem enviada com sucesso!')
    } catch (e) {
      alert(e)
    }
    setName('')
    setPedidos('')
  }

  return (

    <View style={styles.container}>
      <ImageBackground source={require("../../assets/Imag_Sibre/corapp.jpg")}
        style={{ width: 395, padding: 50, paddingTop: 70 }}>       
        <Text style={styles.text}>Disse Jesus:</Text>
        <Text style={styles.text}>
          Pedi, pedi e dar-se-vos-á; buscai, buscai e achareis; batei, batei e abrir-se-vos-á.
          Porque, aquele que pede, recebe; e, o que busca, encontra; e, ao que bate, abrir-se-lhe-á.
      </Text>
        <Text style={styles.text}>Mateus 07: 07 e 08</Text>
        <TextInput style={styles.nomeInput}
          onChangeText={name => setName(name)} value={name}
          placeholder="Nome" />

        <TextInput style={styles.pedidosInput}
          onChangeText={pedidos => setPedidos(pedidos)} value={pedidos}
          placeholder="Escreva aqui seu pedido de oração. " />

        <TouchableOpacity style={styles.btnEnviar} onPress={createFirebase}>
          <Text style={styles.enviar}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnRegisterHome}>Home</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>

  );
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
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
  },
  btnRegisterHome: {
    fontSize: 15,
    marginLeft: 120,

  }

});
