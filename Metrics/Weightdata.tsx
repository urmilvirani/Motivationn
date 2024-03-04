import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ScrollView, Appearance } from 'react-native'
import React, { useState } from 'react'
import { Leftarrow } from '../assets/svg'
import Modal from "react-native-modal";


const Heartdata = ({ navigation }: any) => {

    const Render = ({ item }: any) => (
        <View style={{ marginStart: 15, }}>
            <View style={{ flexDirection: "row", width: '95%', justifyContent: 'space-between', marginTop: 10, }}>
                <Text style={{ color: 'black', fontSize: 16, fontFamily: 'Mulish-Regular' }}>{'Plus rate :'} {item.name}  </Text>
                <Text style={{
                    color: '#4A4A4A', fontSize: 14, fontFamily: 'Mulish-Regular'
                }}>{item.time}</Text>

            </View>

        </View>
    )

    const Yes = ({ item }: any) => (
        <View style={{ marginStart: 15, }}>
            <View style={{ flexDirection: "row", width: '95%', justifyContent: 'space-between', marginTop: 10, }}>
                <Text style={{ color: 'black', fontSize: 16, fontFamily: 'Mulish-Regular' }}>{'Plus rate :'} {item.name}  </Text>
                <Text style={{
                    color: '#4A4A4A', fontSize: 14, fontFamily: 'Mulish-Regular'
                }}>{item.time}</Text>

            </View>

        </View>
    )

    const domee = ({ item }: any) => (
        <View style={{ marginStart: 15, }}>
            <View style={{ flexDirection: "row", width: '95%', justifyContent: 'space-between', marginTop: 10, }}>
                <Text style={{ color: 'black', fontSize: 16, fontFamily: 'Mulish-Regular' }}>{'Plus rate :'} {item.name}  </Text>
                <Text style={{
                    color: '#4A4A4A', fontSize: 14, fontFamily: 'Mulish-Regular'
                }}>{item.time}</Text>

            </View>

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


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Weight Logging</Text>
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
                    onPress={() => { setModalVisible(true) }}
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
                        <Text style={{ color: 'black', fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Weight Measurement</Text>
                    </View>
                    <View style={{ marginStart: 15 }}>
                        <View style={styles.bottom}>
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, }}>Date</Text>
                            <Text style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18 }}>08-18-2023</Text>
                        </View>
                        <View style={{
                            width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 15
                        }}>

                        </View>
                        <View style={styles.bottom}>
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, }}>Time</Text>
                            <Text style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18 }}>02.22 PM</Text>
                        </View>
                        <View style={{
                            width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 15
                        }}>

                        </View>
                        <View style={styles.rate}>
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, }}>Weight (kg)</Text>
                            <View style={{ height: 54, width: 90, borderColor: '#4A4A4A', borderWidth: 0.2, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                <Text style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18 }}>61</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 90 }}>
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
    today: { color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginStart: 15, marginTop: 20 },
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
    // {
    //     id: 2,
    //     name: '71 bpm',
    //     time: '01.15 PM'
    // },
    // {
    //     id: 3,
    //     name: '70 bpm',
    //     time: '12.16 PM'
    // },
    // {
    //     id: 4,
    //     name: '80 bpm',
    //     time: '12.00 PM'
    // },
    // {
    //     id: 5,
    //     name: '85 bpm',
    //     time: '11.00 AM'
    // },
    // {
    //     id: 6,
    //     name: '95 bpm',
    //     time: '10.30 PM'
    // },
]

const yesterday = [
    {
        id: 1,
        name: '72 bpm',
        time: '03.30 PM'
    },
    // {
    //     id: 2,
    //     name: '71 bpm',
    //     time: '01.15 PM'
    // },
    // {
    //     id: 3,
    //     name: '70 bpm',
    //     time: '12.16 PM'
    // },
    // {
    //     id: 4,
    //     name: '80 bpm',
    //     time: '12.00 PM'
    // },

]

const dome = [
    {
        id: 1,
        name: '72 bpm',
        time: '03.30 PM'
    },


]