import React from 'react';
import { Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';



class Registro extends React.Component {

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Administrativo')}>
                    <Text style={styles.admin} >Administrativo</Text>
                </TouchableOpacity>
                <ImageBackground source={require("../../assets/Imag_Sibre/corapp.jpg")}
                    style={{ width: 395, padding: 50, paddingTop: 70 }}>

                    <Text style={styles.prefix}>Banco: 290</Text><Text style={styles.conta}>PagSeguro Internet S.A. </Text>
                    <Text style={styles.prefix}>Agência:</Text><Text style={styles.conta}> 0001 </Text>
                    <Text style={styles.prefix}>Nº da conta:</Text><Text style={styles.conta}> 05111693-7 </Text>
                    <Text style={styles.prefix}>Tipo:</Text><Text style={styles.conta}> Conta de pagamento </Text>
                    <Text style={styles.prefix}>CNPJ:</Text><Text style={styles.conta}>18.685.520.0001-40</Text>
                </ImageBackground>
                <TouchableOpacity onPress={() => navigation.navigate('Solidariedade')}>
                    <Text style={styles.txtVoltar}>Voltar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 15,
        color: 'red',
        justifyContent: 'center',
        alignContent: 'center',
    },
    conta: {
        fontSize: 20,
        color: 'red'
    },
    prefix: {
        fontSize: 18,
        color: '#000'
    },
    txtVoltar: {
        marginTop: 20,
        backgroundColor: '#35AAFF',
        width: '50%',
        height: 45,
        borderRadius: 18,
        marginLeft: 80,
        textAlign: 'center',
        fontSize: 30,
    },
    admin:{
        fontSize:18,
        marginLeft: 100,
        color:'#000'

    }

})

export default Registro;