import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../assets/svg'

const Heartinfo = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.purple}>


                <TouchableOpacity
                    style={{ flexDirection: 'row', marginStart: 10 }}
                    onPress={() => navigation.pop()}>
                    <Leftarrow />
                </TouchableOpacity>


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Heart Rate</Text>
                <View style={{ width: '10%' }}>

                </View>
            </View>

            <View style={{ flexDirection: 'row', width: '85%', marginStart: 15, marginTop: 10 }}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>Heart rate is a key indicator of cardiovascular health. Logging heart rete allows user to keep track of their heart's
                    performance and identify any irregularities or changes over time.
                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>Heart rate is a valuable metric for those engaging in physical fitness and
                    exercise. It can help users monitor the intensity of their workouts, set training zones, and ensure they're exercising within safe and effective
                    heart rate ranges.
                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>Monitoring heart rate can also be useful for stress management. Users can track how stres affects
                    their heart rate and take measures to reduce stress levels when necessary.
                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>You can record your heart rate reading. Results from tests taken at the clinic or from self-testing
                    can be entered.
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Heartinfo

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
    view: { flexDirection: 'row', width: '85%', marginStart: 15, marginTop: 20 }
})