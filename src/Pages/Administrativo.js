import React from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';

const Administrativo = () => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ flex: 0.9, justifyContent: 'center' }}>

            <WebView source={{ uri: 'https://sibre.herokuapp.com/' }} />

        </View>
    </View>
)

export default Administrativo;
