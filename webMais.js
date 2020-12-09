import React, { useState } from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';

import { WebView } from 'react-native-webview';

export default function webMais() {

    const [url, setUrl] = useState('');
    const [go, setGo] = useState(false);

    if (go == false) {
        return (
            <View style={{ flex:1 }}>
                <Text Oh Gloria/>
                <View style={{ marginTop: 5 }}>

                    <Button onPress={() => setGo(true)}
                        title="Sibre"
                    />
                </View>
            </View>
        );
    } else {
        return(
            <WebView 
            source={{ uri:'https://sibre.herokuapp.com/'}}
            style={{ marginTop: 20}}
            />
        )

    }
}
