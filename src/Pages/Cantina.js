import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, FlatList,TouchableOpacity, ImageBackground, SafeAreaView  } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import Swiper from 'react-native-swiper/src';
import firebase from '../../firebase';

export default function Cantina({navigation}) {
    const [listFire, setListFire] = useState('');

    const theme = useTheme();

    // Metodo para listar
    useEffect(() => {
        var database = firebase.database();
        try {
            database.ref('/cantina').on('value', (snapshot) => {
                const list = [];
                snapshot.forEach((childItem) => {
                    list.push({
                        key: childItem.key,
                        name: childItem.val().name,
                        pedidos: childItem.val().pedidos,
                    });
                });
                setListFire(list);
            })

        } catch (e) {
            alert(e)
        }
    }, [])

    return (

        <View style={styles.container}>
        <ImageBackground source={require("../../assets/Imag_Sibre/corapp.jpg")}
                  style={{ width: undefined, padding: 16, paddingTop: 1 }}>
          <Text style={styles.tamanho}> Menu</Text>
          <SafeAreaView >                        
                        <TouchableOpacity style={{ alignItems: "flex-end", margin: 25, marginTop:-30}}
                            onPress={() => navigation.openDrawer()}>
                            <FontAwesome5 name="bars" size={30} color="#161924" />
                        </TouchableOpacity>
                    </SafeAreaView>
          <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
          
          <View style={styles.sliderContainer}>
              <Swiper autoplay height={200}>
                  <View style={styles.slide}>
                      <Image source={require('../../assets/Imag_Cantina/food-banner1.png')}
                          resizeMode="cover"
                          style={styles.sliderImage}
                      />
                  </View>

                  <View style={styles.slide}>
                      <Image source={require('../../assets/Imag_Cantina/food-banner2.png')}
                          resizeMode="cover"
                          style={styles.sliderImage}
                      />
                  </View>

                  <View style={styles.slide}>
                      <Image source={require('../../assets/Imag_Cantina/food-banner3.jpg')}
                          resizeMode="cover"
                          style={styles.sliderImage}
                      />
                  </View>
              </Swiper>
          </View>

            <FlatList style={styles.viewFlalist} data={listFire}
                keyExtractior={(item) => item.key}
                renderItem={({ item }) =>

                    <View style={styles.iconFlat}>
                        
                        <Text style={styles.pedidostext}>{item.pedidos}</Text>

                    </View>
                }
            ></FlatList>
            <View>
                <TouchableOpacity style={styles.btnEnviar} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textLogin}>Home</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',       
       
    },
    sliderContainer: {
        marginTop:-5,
        height: 200,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    iconFlat: {
        width: 317,
        height: 140,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 9,
        marginTop:10
    },
    btnSubmit: {
        marginTop: 20,
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        marginLeft:15
      },
      btnEnviar: {
        margin: 10,
        borderWidth: 2,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 90
    
      },
    nometext: {
        color: '#000',       
    },
    pedidostext: {
        color: '#000',
        fontSize: 16,
        margin:10,
        marginTop:-60
    },
    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
        width: '100%'
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
    tamanho: {
        marginTop:10,
        fontSize: 27,
        marginLeft:100
    }
});


