import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper/src';

class Cantina extends React.Component {
    render() {
        
        return (
            <View style={styles.container}>
                <Text>Gloria a Deus!!!</Text>
                <SafeAreaView >
                    <TouchableOpacity style={{ alignItems: "flex-end", margin: 30 }}
                        onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name="bars" size={30} color="#161924" />
                    </TouchableOpacity>                                    
                </SafeAreaView>

                <View style={{ height: 200, width: '90%', alignSelf: 'center', borderRadius: 8, justifyContent: 'center' }}>
                        
                        <Swiper autoplay height={200}>

                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                                <Image source={require('../assets/Images/food-banner1.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                            <Image source={require('../assets/Images/food-banner2.png')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'transparent', borderRadius: 8 }}>
                            <Image source={require('../assets/Images/food-banner3.jpg')}
                                    resizeMode="cover"
                                    style={{ height: '100%', width: '100%', alignSelf: 'center', borderRadius: 8 }}
                                />
                            </View>
                           
                        </Swiper>
                        <Text style={{justifyContent: 'center', alignItems: 'center'}}>Cantina</Text>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    text: {
        color: "#161924",
        fontSize: 30,
        fontWeight: "500"
    }
});

export default Cantina;