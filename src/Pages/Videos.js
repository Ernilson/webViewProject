import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';


class Videos extends React.Component {

    render() {


        return (

            <View style={styles.container}>
                <ImageBackground source={require("../../assets/Imag_Home/luz.png")}
                    style={{ width: undefined, padding: 16, paddingTop: 1 }}> 
                     <Text style={{ justifyContent: 'center', alignItems: 'center', fontSize: 20, marginLeft:90, marginTop:20}}>Gloria a Deus!!!</Text>                  
                    <SafeAreaView>
                        <TouchableOpacity style={{ alignItems: "flex-end", margin: 15, marginTop:-10}}
                            onPress={this.props.navigation.openDrawer}>
                            <FontAwesome5 name="bars" size={30} color="#161924" />
                        </TouchableOpacity>                       
                    </SafeAreaView>
                </ImageBackground>
                <WebView source={{ uri: 'https://www.youtube.com/channel/UCWTywd1HwBLG3mpSI5hAmvg/featured' }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
    },
    text: {
        color: "#161924",
        fontSize: 30,
        fontWeight: "500"
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
});

export default Videos;