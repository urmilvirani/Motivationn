import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking } from 'react-native'
import React from 'react'
import { Leftarrow } from '../assets/svg'
import Modal from "react-native-modal";


const Weight = ({ navigation }) => {

    const Render = ({ item }) => (
        <View style={{ marginStart: 15, marginTop: 20, width: '92%', flexDirection: 'row', justifyContent: "space-between" }}>
            <Text style={{ color: 'black', fontSize: 16, fontFamily: 'Mulish-Regular' }}>{'Weight :'} {item.tag} </Text>
            <Text style={{
                color: '#4A4A4A', fontFamily: 'Mulish-Regular'
            }}>{item.time}</Text>
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


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Weight Logging</Text>
                <View style={{ width: '10%' }}>

                </View>
            </View>

            <View style={styles.avg}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: "black", fontFamily: 'Mulish-Bold', fontSize: 18 }}>Average Weight</Text>
                    <Image source={require('../assets/image/vajan.png')} style={{ width: 40, height: 40, position: 'absolute', marginStart: 110 }} />
                </View>
                <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 35, marginTop: 20 }}>61.82kg</Text>
            </View>
            <View style={styles.today}>
                <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 20, marginStart: 15, }}>Today</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Weightdata')}
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

export default Weight

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

    avg: { backgroundColor: '#FBF4FF', width: '46%', marginTop: 25, padding: 15, borderRadius: 15, marginStart: 15 },
    today: { marginTop: 20, flexDirection: 'row', alignItems: 'center', width: '96%', justifyContent: 'space-between' },

})

const today = [

    {
        id: 1,
        tag: '62.85 kg',
        time: '03.30 PM'
    },
]