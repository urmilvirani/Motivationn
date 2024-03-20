import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ScrollView, Appearance } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../assets/svg'
import webservices from '../Navigation/webservices';
import Metricloader from '../component/Metricloader';

const Heartdata = ({ navigation }: any) => {

    const [pulse, setPulse] = useState('')
    const [loading, setLoading] = useState('')

    useEffect(() => {
        heart()

    }, [])

    const heart = async () => {
        try {
            setLoading(true)
            const response = await webservices('heart_rate/list', 'POST')
            console.log(response.data.list);
            setPulse(response?.data?.list)
        }
        catch (error) {
            console.log(error);

        }
        finally {
            setLoading(false)
        }
    }

    const Render = ({ item }: any) => (
        <View style={{ marginStart: 15, }}>
            <Text style={styles.today}>{item.date}</Text>

            {item.list.map((heartData, index) => (
                <View key={index}>
                    <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ color: 'black', fontSize: 16, fontFamily: 'Mulish-Regular' }}>{'Pulse rate: '} {heartData.pulse_rate}</Text>
                        {/* <Text style={{ color: '#4A4A4A', fontSize: 14, fontFamily: 'Mulish-Regular' }}>{heartData.datetime}</Text> */}
                    </View><View style={{
                        width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 10
                    }}></View>
                </View>
            ))}

        </View>
    )



    const [isModalVisible, setModalVisible] = useState(false);

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
            {/* <Text style={styles.today}>Today</Text> */}

            {loading ? <Metricloader /> : <View>
                <FlatList
                    data={pulse}
                    renderItem={Render}
                />
            </View>}



        </SafeAreaView>
    )
}

export default Heartdata

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
    today: { color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginStart: 0, marginTop: 20 },
    yes: { color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginStart: 15, marginTop: 15 },

    bottom: { flexDirection: 'row', marginTop: 20, width: '95%', justifyContent: 'space-between' },
    rate: { flexDirection: 'row', marginTop: 20, width: '95%', justifyContent: 'space-between', alignItems: 'center' },

    model: {
        position: 'absolute', backgroundColor: 'white', width: '100%', height: '50%', marginStart: 0, marginBottom: 0, bottom: 0, borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
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

const yesterday = [
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

]

const dome = [
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
]


// const formattedDate = selectedDate.toLocaleDateString();
// const formattedTime = selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

// // Concatenate date and time
// const dateTime = `${formattedDate} ${formattedTime}`;

// const data = new FormData()
// data.append('pulse_rate', '70')
// data.append('datetime', dateTime)
// const save = await webservices('heart_rate/save', "POST", data)
// console.log('saved', save.message);
// setPulse(save)