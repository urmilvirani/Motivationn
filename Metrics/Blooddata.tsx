import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ScrollView, Appearance } from 'react-native'
import React, { useState } from 'react'
import { Leftarrow } from '../assets/svg'
import Modal from "react-native-modal";

const Blooddata = ({ navigation }: any) => {

    const Render = ({ item }: any) => (
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
                width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 15
            }}></View>
        </View>
    )

    const Yes = ({ item }: any) => (
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
                width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 15
            }}></View>
        </View>
    )

    const domee = ({ item }: any) => (
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
                width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 15
            }}></View>
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


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Blood Pressure</Text>
                <View style={{ width: '10%' }}>

                </View>
            </View>
            <ScrollView>
                <Text style={styles.today}>Today</Text>
                <View>
                    <FlatList
                        data={today}
                        renderItem={Render}
                    />
                </View>
                <Text style={styles.yes}>Yesterday</Text>
                <View>
                    <FlatList
                        data={yesterday}
                        renderItem={Yes}
                    />
                </View>
                <Text style={styles.yes}>08-16-2023</Text>
                <View>
                    <FlatList
                        data={dome}
                        renderItem={domee}
                    />
                </View>
            </ScrollView>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{
                        backgroundColor: '#FBF4FF', marginBottom: 20, padding: 17, width: '95%', borderRadius: 30, alignItems: 'center', marginTop: 10
                    }}>
                    <Text style={{ color: '#702B92', fontSize: 18, fontFamily: 'Mulish-Bold' }}>ADD NEW</Text>
                </TouchableOpacity>
            </View>

            <Modal
                isVisible={isModalVisible}
                style={styles.model}
            >
                <View style={{ flex: 1 }}>
                    <View style={{ alignItems: 'center', marginTop: 25 }}>
                        <Text style={{ color: 'black', fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Blood Pressure Reading</Text>
                    </View>
                    <View style={{ marginStart: 15 }}>
                        <View style={styles.rate}>
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, }}>Systolic (mmHg)</Text>
                            <View style={{ height: 54, width: 90, borderColor: '#4A4A4A', borderWidth: 0.2, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                <Text style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18 }}>80</Text>
                            </View>
                        </View>
                        <View style={{
                            width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 15
                        }}>

                        </View>
                        <View style={styles.rate}>
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, }}>Diastolic (mmHg)</Text>
                            <View style={{ height: 54, width: 90, borderColor: '#4A4A4A', borderWidth: 0.2, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                <Text style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18 }}>120</Text>
                            </View>
                        </View>
                        <View style={{
                            width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 15
                        }}>

                        </View>
                        <View style={styles.rate}>
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, }}>Pulse Rate (mmHg)</Text>
                            <View style={{ height: 54, width: 90, borderColor: '#4A4A4A', borderWidth: 0.2, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                <Text style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18 }}>70</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
                            <TouchableOpacity
                                onPress={() => { setModalVisible(false) }}
                                style={{ borderWidth: 0.5, borderColor: '#4A4A4A', width: '45%', padding: 15, borderRadius: 30, alignItems: 'center' }}>
                                <Text style={{ color: '#702B92', fontFamily: 'Mulish-Bold' }}>CANCLE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { setModalVisible(false) }}
                                style={{ backgroundColor: '#702B92', width: '45%', padding: 15, borderRadius: 30, marginStart: 10, alignItems: "center" }}>
                                <Text style={{ color: 'white', fontFamily: 'Mulish-Bold' }}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default Blooddata

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
    today: { color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginStart: 15, marginTop: 20 },
    yes: { color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginStart: 15, marginTop: 15 },

    bottom: { flexDirection: 'row', marginTop: 20, width: '95%', justifyContent: 'space-between' },
    rate: { flexDirection: 'row', marginTop: 15, width: '95%', justifyContent: 'space-between', alignItems: 'center' },

    model: {
        position: 'absolute', backgroundColor: 'white', width: '100%', height: '50%', marginStart: 0, marginBottom: 0, bottom: 0, borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
})

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
    // {
    //     id: 3,
    //     name: 'Systolic :',
    //     tag: '<100 mmHg',
    //     name1: 'Diastolic :',
    //     tag1: '<80 mmHg',
    //     name2: 'Pulse Rate :',
    //     tag2: '70 bpm',
    //     time: '05.30 PM'
    // },
]

const yesterday = [
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

const dome = [
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