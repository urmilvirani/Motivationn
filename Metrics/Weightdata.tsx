import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ScrollView, Appearance } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Leftarrow } from '../assets/svg'
import webservices from '../Navigation/webservices'



const Heartdata = ({ navigation }: any) => {

    const [weightt, setweightt] = useState('')

    useEffect(() => {
        weight()

    }, [])

    const weight = async () => {
        try {
            const response = await webservices('weight_measurement/list', 'POST')
            console.log(response.data.list);
            setweightt(response?.data?.list)
        }
        catch (error) {
            console.log(error);

        }
    }




    const Render = ({ item }: any) => (
        <View style={{ marginStart: 15, }}>
            <Text style={styles.today}>{item.date}</Text>

            {item.list.map((weightData, index) => (
                <View key={index}>
                    <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ color: 'black', fontSize: 16, fontFamily: 'Mulish-Regular' }}>{'Weight: '} {weightData.weight} {'kg'}</Text>
                        {/* <Text style={{ color: '#4A4A4A', fontSize: 14, fontFamily: 'Mulish-Regular' }}>{heartData.datetime}</Text> */}
                    </View><View style={{
                        width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 10
                    }}></View>
                </View>
            ))}

        </View>
    )

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

            <View>
                <FlatList
                    data={weightt}
                    renderItem={Render}
                />
            </View>

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
    today: { color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginTop: 20 },
    yes: { color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginStart: 15, marginTop: 15 },


})

