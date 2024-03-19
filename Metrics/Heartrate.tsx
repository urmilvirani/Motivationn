import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../assets/svg'
import webservices from '../Navigation/webservices'
import { useFocusEffect } from '@react-navigation/native'

const Heartrate = ({ navigation }) => {

    const [heartt, setHeartt] = useState('')
    useFocusEffect(
        React.useCallback(() => {
            heartapi()
            return () => {
                // Cleanup function (if needed)
            };
        }, [])
    );


    const heartapi = async () => {
        try {
            const heart = await webservices('heart_rate/get_details', 'POST')
            console.log(heart.data);
            setHeartt(heart.data)

        }
        catch (error) {
            console.log(error);

        }
    }


    const Render = ({ item }) => (
        <View style={{ marginStart: 15, }}>
            <View style={{ flexDirection: "row", width: '95%', justifyContent: 'space-between', marginTop: 10 }}>
                <Text style={{ color: 'black', fontSize: 16, fontFamily: 'Mulish-Bold' }}>{'Plus rate :'} {item.name}  </Text>
                <Text style={{
                    color: '#4A4A4A', fontSize: 14, fontFamily: 'Mulish-Regular'
                }}>{item.time}</Text>

            </View>
            <View style={{
                width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 10
            }}></View>
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
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
            <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <View style={styles.avg}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: "black", width: '76%', fontFamily: 'Mulish-Bold', fontSize: 18 }}>Average BPM</Text>
                            <Image source={require('../assets/image/Heartbreake.png')} style={{ width: 40, height: 40 }} />
                        </View>
                        <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 40, marginTop: 20 }}>{heartt.average_bpm}</Text>
                    </View>
                    <View style={styles.std}>

                        <Text style={{ color: "black", fontFamily: 'Mulish-Bold', fontSize: 18, marginTop: 5 }}>Standard Limits</Text>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{
                                color: '#4A4A4A', fontFamily: 'Mulish-Regular', fontSize: 18,
                            }}>Pulse Rate:</Text>
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 18, width: '50%' }}> {heartt.standard_pulse_rate}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.today}>
                <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 20, marginStart: 15, }}>Today</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Heartdata')}
                >
                    <Text style={{ color: '#702B92', fontFamily: 'Mulish-Bold', fontSize: 14 }}>view data</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={today}
                renderItem={Render}
            />
        </SafeAreaView>
    )
}

export default Heartrate

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
    avg: { backgroundColor: '#FBF4FF', width: '46%', marginTop: 10, padding: 10, borderRadius: 15 },
    std: { backgroundColor: '#F5F5F5', width: '45%', marginTop: 10, padding: 10, borderRadius: 15, marginStart: 10 },
    today: { marginTop: 20, flexDirection: 'row', alignItems: 'center', width: '96%', justifyContent: 'space-between' },

})

const today = [
    {
        id: 1,
        name: '72 bpm',
        time: '03.30 PM'
    },
    {
        id: 2,
        name: '71 bpm',
        time: '01.15 PM'
    },
    {
        id: 3,
        name: '70 bpm',
        time: '12.16 PM'
    },
    {
        id: 4,
        name: '80 bpm',
        time: '12.00 PM'
    },
    {
        id: 5,
        name: '85 bpm',
        time: '11.00 AM'
    },
    {
        id: 6,
        name: '95 bpm',
        time: '10.30 PM'
    },

]