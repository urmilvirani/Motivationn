import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../assets/svg'


const Bloodinfo = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.purple}>


                <TouchableOpacity
                    style={{ flexDirection: 'row', marginStart: 10 }}
                    onPress={() => navigation.pop()}>
                    <Leftarrow />
                </TouchableOpacity>


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Blood Pressure</Text>
                <View style={{ width: '10%' }}>

                </View>
            </View>

            <View style={{ flexDirection: 'row', width: '85%', marginStart: 15, marginTop: 10 }}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>One of the best ways to access blood pressure is to monitor it regularly.
                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>Blood pressure is the force of blood pushing against the walls of the arteries as the heart
                    pumps it around the body. It is usually expressed as two values: systolic pressure (the pressure when the heart beats) over diastolic pressure (
                    the pressure when the heart is at rest between beats.
                    )
                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>Measure it when you are completely relaxed.
                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>Do not measure it if you are uncomfortable or anxious as your blood pressure may be misleadingly higher
                    at these times.
                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>Each time, measure it 3 times and record only the lowest pair of numbers.
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Bloodinfo

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