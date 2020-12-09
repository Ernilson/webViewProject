import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Swiper from 'react-native-swiper/src';

class Solidariedade extends React.Component {    
    render() {
        const { navigation } = this.props;
        return (
            
            <View style={styles.container}>
                <ImageBackground source={require("../../assets/Imag_Sibre/corapp.jpg")}
                    style={{ flex: 1, width: undefined, padding: 10, paddingTop: 10 }}>
                <Text style={{ flexDirection: 'row', justifyContent: 'center', textAlign: 'center', marginTop: 5, fontSize: 20 }}>A Deus seja a glória. </Text>
                    <SafeAreaView >                        
                        <TouchableOpacity style={{ alignItems: "flex-end", margin:15, marginTop:-20 }}
                            onPress={this.props.navigation.openDrawer}>
                            <FontAwesome5 name="bars" size={30} color="#161924" />
                        </TouchableOpacity>
                    </SafeAreaView>
                    <View style={{ height: 200, width: '100%', alignSelf: 'center', borderRadius: 8, justifyContent: 'center', marginTop:10 }}>
                        <Swiper autoplay height={200}>

                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../../assets/Imag_Solidariedade/Fran5.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../../assets/Imag_Solidariedade/Fran23.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../../assets/Imag_Solidariedade/Mari1.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../../assets/Imag_Solidariedade/Marm4.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../../assets/Imag_Solidariedade/marm2.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../../assets/Imag_Solidariedade/Nat1.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../../assets/Imag_Solidariedade/nino2.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../../assets/Imag_Solidariedade/nino1.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                        </Swiper>
                    </View>
                    <Text style={{ flexDirection: 'row', justifyContent: 'center', textAlign: 'center', fontSize: 20 }}>Ação Acão Social</Text>
                    <Text></Text>
                    <View >
                        <Text style={styles.atividades}>Desde o mês de março, devido a pandemia,</Text>
                        <Text style={styles.atividades}>a segunda Igreja Batista no Recanto das Emas, SIBRE, por meio da irmã Francisca e voluntários,</Text>
                        <Text style={styles.atividades}>está realizando a distribuição de marmitas e abençoando assim aos mais necessitados. </Text>
                        <Text style={styles.atividades}>
                            Sendo assim, a Sibre tem indo aonde a maioria não quer ir. Além disso,  tem sido realizada a </Text>
                        <Text style={styles.atividades}>distribuição  de cestas de alimentos e roupas para  famílias carentes. Para que este projeto não pare e o Reino continue a ser pregado,  </Text>
                        <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Registro')}>
                            <Text style={styles.btnRegisterText}>Faça a sua contribuição click aqui ...</Text>
                        </TouchableOpacity>
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
    },
    maior: {
        fontSize: 17
    },
    btnRegisterText: {
        color: 'red',
        fontSize: 17,
        alignItems: 'center'
      },
});

export default Solidariedade;