import { Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Forgot = () => {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={{ position: 'absolute' }}>
                <Image source={require('../assets/image/Background.png')} style={{ height: 428, width: 493 }} />
            </View>
            <View style={styles.view1}>
                <Image source={require('../assets/image/Motivation1.png')} style={{ width: 127, height: 80 }} />
                <Text style={{ fontFamily: "Mulish-ExtraBold", fontSize: 20, color: 'white', marginTop: 40 }}>Forgot Password</Text>
            </View>
            <View style={styles.white}>
                <Image source={require('../assets/image/Lock.png')} style={{ width: 160, height: 170, marginTop: 45 }} />
                <Text style={{ color: "black", fontFamily: 'Mulish-Regular', marginTop: 45 }}>Enter the email associated with your account </Text>
                <Text style={{ color: "black", fontFamily: 'Mulish-Regular' }}>and we'll send an email with instructions to </Text>
                <Text style={{ color: "black", fontFamily: 'Mulish-Regular' }}>reset your Password </Text>
                <View style={{ borderWidth: 0.5, borderColor: 'lightgray', width: 350, borderRadius: 10, marginTop: 25 }}>
                    <TextInput
                        style={{ color: 'black', padding: 10, fontFamily: 'Mulish-Regular' }}
                        placeholder='Enter Email'
                        placeholderTextColor={'black'}
                    />
                </View>
                <TouchableOpacity style={styles.purple}>
                    <Text style={{ color: 'white', fontFamily: 'Mulish-Bold' }}>GET OTP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Forgot

const styles = StyleSheet.create({

    safe: {
        backgroundColor: 'rgba(112, 43, 146, 1)',
        height: '100%'
    },

    view1: {
        alignItems: 'center',
        height: '30%',
        justifyContent: 'center'
    },

    white: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 30,
        height: '100%',
        alignItems: 'center',

    },

    purple: {
        backgroundColor: 'rgba(112, 43, 146, 1)',
        width: 350,
        padding: 17,
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 80
    },
})