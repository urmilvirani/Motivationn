import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ScrollView, Appearance } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../assets/svg'
import webservices from '../Navigation/webservices'


const Blooddata = ({ navigation }: any) => {

    const [list, setList] = useState('')

    useEffect(() => {

        Data()
    }, [])

    const Data = async () => {
        try {

            const response = await webservices('blood_pressure/list', 'POST')
            console.log(response.data.list);

            setList(response?.data?.list)

        }
        catch (error) {
            console.log(error);

        }
    }


    const Render = ({ item }: any) => (

        <View style={{ marginStart: 15 }}>
            <Text style={styles.today}>{item.date}</Text>
            {item.list.map((heartData, index) => (
                <View key={index}>
                    <View style={{ width: '95%', marginTop: 10 }}>
                        {heartData.reading_details.map((detail, i) => (
                            <View key={i}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'black', fontFamily: 'Mulish-Regular' }}>{detail.title} :</Text>
                                    <Text style={{ color: 'black', fontFamily: 'Mulish-Regular' }}> {detail.value}</Text>

                                </View>

                            </View>
                        ))}
                        <View style={{
                            width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 15
                        }}></View>

                    </View>

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


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Blood Pressure</Text>
                <View style={{ width: '10%' }}>

                </View>
            </View>

            <View>
                <FlatList
                    data={list}
                    renderItem={Render}
                />
            </View>

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
    today: { color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginTop: 20 },
    yes: { color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginStart: 15, marginTop: 15 },

    bottom: { flexDirection: 'row', marginTop: 20, width: '95%', justifyContent: 'space-between' },
    rate: { flexDirection: 'row', marginTop: 15, width: '95%', justifyContent: 'space-between', alignItems: 'center' },

    model: {
        position: 'absolute', backgroundColor: 'white', width: '100%', height: '50%', marginStart: 0, marginBottom: 0, bottom: 0, borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
})

