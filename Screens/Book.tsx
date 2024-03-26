import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import WebView from 'react-native-webview'
import { Leftarrow } from '../assets/svg'

const Book = ({ navigation }) => {

    const [loading, setLoading] = useState(false)


    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.purple}>


                <TouchableOpacity
                    style={{ flexDirection: 'row', marginStart: 10 }}
                    onPress={() => navigation.pop()}>
                    <Leftarrow />
                </TouchableOpacity>


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Book Assessment</Text>
                <View style={{ width: '10%' }}>

                </View>
            </View>
            {loading && (
                <View style={{ height: '95%', justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator style={{ backgroundColor: '#EAEAEA', width: 80, height: 80, borderRadius: 50, }} color={'black'} size={50} />
                </View>)}
            <WebView source={{ uri: 'https://motivation.ie/book-an-assessment/' }}

                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
            />
        </View>
    )
}

export default Book

const styles = StyleSheet.create({
    purple: {
        backgroundColor: 'rgba(112, 43, 146, 1)',
        height: '8%',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})