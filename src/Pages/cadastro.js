import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import firebase from '../../firebase';

export default function cadastro({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');  
  const [errorMessage] = useState(null);

  // Metodo para adicionar usuarios autenticados
  function Cadastro() {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage)
    });
  }

  return (
    <View style={styles.background}>
      <ImageBackground source={require("../../assets/Imag_Sibre/img007.png")}
        style={{ flex: 1, width: undefined, padding: 100, paddingTop: 100 }}>
        <Text style={styles.btnRegisterText2}>  Crie sua conta</Text>
        {errorMessage &&
          <Text style={{ color: 'red' }}>
            {errorMessage}
          </Text>}
        <TextInput
          placeholder="Por favor digite seu email..."
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(email) => setEmail(email)} value={email}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder='Senha com 6 caracteres'
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(password) => setPassword(password)} value={password}
        />
        <TextInput 
         placeholder='por favor repita senha'
          value={confirmPassword}
          style={styles.textInput} secureTextEntry={true}
          onChangeText={(confirmPassword) => setconfirmPassword(confirmPassword)} />

        <View>

          <TouchableOpacity style={styles.button} onPress={() =>  Cadastro() & navigation.navigate('login')}  >
            <Text style={styles.btnRegisterText1}>Cadastre-se</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('login')}>
            <Text style={styles.btnRegisterText}>Já tem conta?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>

  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#e53935',
  },
  textInput: {
    backgroundColor: '#fff',
    width: 250,
    marginTop: 10,
    color: '#000',
    fontSize: 14,
    borderRadius: 7,
    padding: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#35AAFF',
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,

  },
  btnRegister: {
    marginTop: 20,
    alignItems: 'center'
  },
  btnRegisterText: {
    color: '#000',
    fontSize: 15,
    alignItems: 'center'
  },
  btnRegisterText2: {
    color: 'green',
    fontSize: 25,
    alignItems: 'center',

  },
  btnRegisterText1: {
    color: '#fff',
    fontSize: 20,
    alignItems: 'center'
  }
})


