import React, { useState, useEffect } from 'react';
import {
  View, Text, KeyboardAvoidingView, TextInput,
  TouchableOpacity, StyleSheet, Animated, Alert,
} from 'react-native';
import * as Facebook from 'expo-facebook';
import firebase from '../../firebase';

export default function App({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  
  const signUpFacebook = async () => {   
    try {
      await Facebook.initializeAsync({
        appId: '563253421182157',
      });
      const {
        type,
        token
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API // https://graph.facebook.com/me?access_token=${token}
        const response = await fetch(`https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        const data = await response.json();
        setUser(data);
        navigation.navigate('Home');       
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      Alert.alert(`Facebook Login Error: ${message}`);
    };
  }


  // Metodo para validar usuarios autenticados
  function loginFirebase() {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => navigation.navigate('Home'))
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage)

      });
  }

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 15 }))
  const [logo] = useState(new Animated.ValueXY({ x: 250, y: 220 }))


  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 40
    }).start();
  }, [])



  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("Logado - " + user.email)
      } else {
        console.log('Não há usuario com este email');
      }
    });
  }, [])

  return (

    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y
          }}
          source={require('../../assets/Imag_Sibre/logo.png')}
        />
        <Text>Deus Seja Louvado</Text>
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)} value={email}
        />

        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Senha"
          autoCapitalize="none"
          onChangeText={(password) => setPassword(password)} value={password}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={() => { loginFirebase() }}>
          <Text style={styles.textLogin}>login</Text>
        </TouchableOpacity>

        <View style={styles.container2}>
          {user ? (
            <View style={styles.fotoContainer}>
              <View style={styles.image} source={{ uri: user.picture.data.url }} />
              <Text style={styles.text}>{user.name}</Text>
              <Text style={styles.text}>{user.email}</Text>
            </View>
          ) : (
            <TouchableOpacity style={styles.face} onPress={() => { signUpFacebook() }}>
            <Text style={styles.textFacebook}>Facebook</Text>
          </TouchableOpacity>
            )}
        </View>

        <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('cadastro')}>
          <Text style={styles.btnRegisterText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container2: {  
    //backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center"
  },
  fotoContainer: {},
  image: { width: 200, height: 200 },
  text: { fontSize: 12, textAlign: "center" },

  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  face: {
    marginTop: 15,
  },
  submitText: {
    color: '#FFF',
    fontSize: 18,
  },
  btnRegister: {
    marginTop: 10,
  },
  btnRegisterText: {
    color: '#FFF',
  },
  textLogin: {
    color: '#fff',
    fontSize: 21,
  },
  textFacebook: {
    color: '#fff',
    fontSize: 21,
  },
  fotoContainer: {},
  image: { width: 200, height: 200 },
  text: { fontSize: 18, textAlign: "center" },

});

