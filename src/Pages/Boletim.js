import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import firebase from '../../firebase';

export default function Boletim({navigation}) {
    const [listFire, setListFire] = useState('');    
    // Metodo para listar
    useEffect(() => {
        var database = firebase.database();
        try {
            database.ref('/boletin').on('value', (snapshot) => {
                const list = [];
                snapshot.forEach((childItem) => {
                    list.push({
                        key: childItem.key,
                        suplicas: childItem.val().suplicas,
                    });
                });
                setListFire(list);
            })

        } catch (e) {
            alert(e)
        }
    }, [])

    return (

        <SafeAreaView style={styles.container}>
           <ImageBackground source={require("../../assets/Imag_Sibre/corapp.jpg")}
                style={{ flex: 1, width: undefined, padding: 37, paddingTop: 5 }}>
                     <SafeAreaView >                        
                        <TouchableOpacity style={{ alignItems: "flex-end", margin: 22, marginTop:20}}
                            onPress={() => navigation.openDrawer()}>
                            <FontAwesome5 name="bars" size={30} color="#161924" />
                        </TouchableOpacity>
                    </SafeAreaView>
                <Text style={styles.txtBoletim}>Boletim</Text>
               
                <FlatList style={styles.viewFlalist} data={listFire}
                    keyExtractior={(item) => item.key}
                    renderItem={({ item }) =>
                        <View style={styles.iconFlat}>
                            <Text style={styles.pedidostext}>{item.suplicas}</Text>
                        </View>
                    }
                ></FlatList>

                <TouchableOpacity style={styles.txtPedidos} onPress={() => navigation.navigate('Pedidos')}>
                    <Text style={styles.btnRegisterText}>   Pedido de Oração     </Text>
                </TouchableOpacity>

            </ImageBackground>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnRegisterText: {
        fontSize: 20,
        marginLeft: 20
    },
    txtPedidos: {        
        backgroundColor: '#35AAFF',       
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        marginLeft: 20
    },
    txtBoletim: {
        marginTop:-30,
        fontSize: 23,
        marginLeft: 90
    },
    text: {
        color: '#000',
        fontSize: 10,
    },
    pedidostext: {        
        color: '#000',
        fontSize: 16,
        margin:10,
        marginTop:10
    },
    iconFlat: {
        width: 286,
        height: 150,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
        marginTop:10
    },
    sliderContainer: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
      
    },
    sliderImage:{
        marginLeft:30
    },
    viewFlat: {
        maxHeight: 400,
    }
});
