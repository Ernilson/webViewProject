import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Swiper from 'react-native-swiper/src';


class acao_social extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../assets/tomorrow.jpg")}
                    style={{ flex: 1, width: undefined, padding: 10, paddingTop: 1 }}>
                    <SafeAreaView >
                        <Text style={{ flexDirection: 'row', justifyContent: 'center', textAlign: 'center', marginTop: 5, fontSize: 20 }}>Gloria a Deus!!!</Text>
                        <TouchableOpacity style={{ alignItems: "flex-end", margin: 5 }}
                            onPress={this.props.navigation.openDrawer}>
                            <FontAwesome5 name="bars" size={30} color="#161924" />
                        </TouchableOpacity>

                    </SafeAreaView>
                    <View style={{ height: 200, width: '100%', alignSelf: 'center', borderRadius: 8, justifyContent: 'center' }}>
                        <Swiper autoplay height={200}>

                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../assets/Ação social/Fran1.jpg')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                            <Image source={require('../assets/Ação social/Fran2.jpg')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                            <Image source={require('../assets/Ação social/Mari1.jpg')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                            <Image source={require('../assets/Ação social/Mari2.jpg')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                            <Image source={require('../assets/Ação social/Mari3.jpg')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                            <Image source={require('../assets/Ação social/Nat1.jpg')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                            <Image source={require('../assets/Ação social/igreja.jpg')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                        </Swiper>
                    </View>
                    <Text style={{ flexDirection: 'row', justifyContent: 'center', textAlign: 'center', fontSize: 20 }}>Atividades</Text>
                    <Text></Text>
                    <View >
                        <Text style={styles.atividades}>Segunda Feira: Oração Matinal ás 08:00 hrs</Text>
                        <Text style={styles.atividades}>Terça Feira: Pg de Homens 20:00 hrs</Text>
                        <Text style={styles.atividades}>Quarta Feira: Culto de Oração  ás 20:00 hrs</Text>
                        <Text style={styles.atividades}>Quinta Feira: Culto de Oração  ás 16:00 hrs</Text>
                        <Text style={styles.atividades}>Domingo Culto Matinal ás 10:00 hrs</Text>
                        <Text style={styles.atividades}>Domingo Culto Noturno ás 19:00 hrs</Text>
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
        fontSize: 15

    }
});

export default acao_social ;