import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { Leftarrow } from '../assets/svg'
import { Vector } from '../assets/svg'
import WebView from 'react-native-webview'
import webservices from '../Navigation/webservices'

const Shop = () => {



    return (
        <View style={{ backgroundColor: "white", height: '100%' }}>

            <View style={styles.purple}>
                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Shop</Text>
            </View>


            <WebView source={{ uri: 'https://shop.motivation.ie/' }} style={{}} />


        </View>
    )
}

export default Shop

const styles = StyleSheet.create({
    purple: {
        backgroundColor: 'rgba(112, 43, 146, 1)',
        height: '8%',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center"
    },
})