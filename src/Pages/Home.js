import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Swiper from 'react-native-swiper/src';


class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../../assets/Imag_Sibre/corapp.jpg")}
                    style={{ flex: 1, width: undefined, padding: 10, paddingTop: 1 }}>
                    <Text style={{ flexDirection: 'row', justifyContent: 'center', textAlign: 'center', marginTop: 35, fontSize: 20 }}>Jesus é o Senhor. </Text>
                    <SafeAreaView >
                        <TouchableOpacity style={{ alignItems: "flex-end", margin: 25, marginTop:-30 }}
                            onPress={this.props.navigation.openDrawer}>
                            <FontAwesome5 name="bars" size={30} color="#161924" />
                        </TouchableOpacity>
                    </SafeAreaView>

                    <View style={{ height: 200, width: '100%', alignSelf: 'center', borderRadius: 8, justifyContent: 'center' }}>
                        <Swiper autoplay height={200}>

                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../../assets/Imag_Sibre/img001.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../../assets/Imag_Sibre/img002.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../../assets/Imag_Sibre/img011.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../../assets/Imag_Sibre/culto2.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../../assets/Imag_Sibre/subr2.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                        </Swiper>
                    </View>
                    <Text style={{ flexDirection: 'row', justifyContent: 'center', textAlign: 'center', fontSize: 20, marginTop: 10 }}>Nossos encontros:</Text>
                    <Text></Text>
                    <View >
                        <Text style={styles.atividades}>Segunda-feira: Oração às 08hs </Text>
                        <Text style={styles.atividades}>Terça-feira: Pequenos grupos às 20hs </Text>
                        <Text style={styles.atividades}>Quarta-feira: Culto de Oração às 20hs </Text>
                        <Text style={styles.atividades}>Sexta-feira: Culto de Oração  às 16hs</Text>
                        <Text style={styles.atividades}>Domingo Culto às 10hs e às 19hs</Text>
                        <Text style={styles.atividades}></Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
    },
    text: {
        color: "#161924",
        fontSize: 30,
        fontWeight: "500"
    },
    atividades: {
        fontSize: 18,
        fontWeight: '100',
        color: 'black',
        justifyContent: 'center'

    }
});

export default Home;