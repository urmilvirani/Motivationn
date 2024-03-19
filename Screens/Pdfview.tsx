import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import Pdf from 'react-native-pdf'
import { Leftarrow } from '../assets/svg'

const Pdfview = ({ route, navigation }: any) => {

    console.log(route?.params?.data.media);
    const pdfUri = route?.params?.data.media;
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.purple}>


                <TouchableOpacity
                    style={{ flexDirection: 'row', marginStart: 10 }}
                    onPress={() => navigation.pop()}>
                    <Leftarrow />
                </TouchableOpacity>



                <View style={{ width: '10%' }}>

                </View>
            </View>
            <Pdf trustAllCerts={false} source={{ uri: pdfUri }} style={{ height: '100%', width: '100%' }} />
        </View>
    )
}

export default Pdfview

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