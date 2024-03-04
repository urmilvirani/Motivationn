import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking } from 'react-native'
import React from 'react'
import { Leftarrow } from '../assets/svg'

const Blood = ({ navigation }) => {

    const Render = ({ item }) => (
        <View style={{ marginStart: 15 }}>
            <View style={{ flexDirection: 'row', marginTop: 20, width: '95%', justifyContent: 'space-between' }}>
                <View >
                    <Text style={{ color: 'black', fontFamily: 'Mulish-Regular' }}>{item.name} {item.tag}</Text>
                    <Text style={{ color: 'black', marginTop: 5, fontFamily: 'Mulish-Regular' }}>{item.name1} {item.tag1}</Text>
                    <Text style={{ color: 'black', marginTop: 5, fontFamily: 'Mulish-Regular' }}>{item.name2} {item.tag2}</Text>
                </View>
                <Text style={{ color: '#4A4A4A' }}>{item.time}</Text>
            </View>
            <View style={{
                width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 20
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


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Blood Pressure </Text>
                <View style={{ width: '10%' }}>

                </View>
            </View>

            <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <View style={styles.avg}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: "black", width: '76%', fontFamily: 'Mulish-Bold', fontSize: 18 }}>Average BP</Text>
                            <Image source={require('../assets/image/Heartbreake.png')} style={{ width: 40, height: 40 }} />
                        </View>
                        <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 35, marginTop: 20 }}>120/80</Text>
                    </View>
                    <View style={styles.std}>

                        <Text style={{ color: "black", fontFamily: 'Mulish-Bold', fontSize: 18, marginTop: 5 }}>Standard Limits</Text>


                        <FlatList

                            data={data}
                            renderItem={(item) => (
                                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                    <Text style={{
                                        color: '#4A4A4A'
                                    }}>{item.item.name}</Text>
                                    <Text style={{ color: 'black' }}>{item.item.tag}</Text>
                                </View>
                            )}
                        />

                    </View>
                </View>
            </View>

            <View style={styles.today}>
                <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 20, marginStart: 15, }}>Today</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Blooddata')}
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

export default Blood

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

const data = [
    {
        id: 1,
        name: 'Systolic :',
        tag: '<120 mmHg'
    },
    {
        id: 2,
        name: 'Diastolic :',
        tag: '<80 mmHg'
    },
    {
        id: 3,
        name: 'Pulse Rate :',
        tag: '70 bpm'
    },
]

const today = [
    {
        id: 1,
        name: 'Systolic :',
        tag: '<80 mmHg',
        name1: 'Diastolic :',
        tag1: '<120  mmHg',
        name2: 'Pulse Rate :',
        tag2: '70 bpm',
        time: '05.30 AM'
    },
    {
        id: 2,
        name: 'Systolic :',
        tag: '<100 mmHg',
        name1: 'Diastolic :',
        tag1: '<100 mmHg',
        name2: 'Pulse Rate :',
        tag2: '65 bpm',
        time: '12.00 PM'
    },
    {
        id: 3,
        name: 'Systolic :',
        tag: '<100 mmHg',
        name1: 'Diastolic :',
        tag1: '<80 mmHg',
        name2: 'Pulse Rate :',
        tag2: '70 bpm',
        time: '05.30 PM'
    },
]