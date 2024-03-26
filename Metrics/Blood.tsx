import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../assets/svg'
import Modal from "react-native-modal";
import webservices from '../Navigation/webservices';
import Metricloader from '../component/Metricloader';


const Blood = ({ navigation }: any) => {


    const [getdata, SetGetdata] = useState('')
    const [todays, setTodays] = useState('')
    const [systolic, setSystolic] = useState('')
    const [diastolic, setDiastolic] = useState('')
    const [pulse, setPulse] = useState('')
    const [isModalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState('')

    useEffect(() => {
        blood()

    }, [])
    const blood = async () => {
        try {
            setLoading(true)
            const response = await webservices('blood_pressure/get_details', 'POST')
            console.log(response.data);
            SetGetdata(response?.data)

            const res = await webservices('blood_pressure/list', 'POST')
            const today = new Date().toISOString().slice(0, 10);
            const todaysData = res.data.list.filter(item => item.date === today);
            setTodays(todaysData)
        }
        catch (error) {
            console.log(error);

        }
        finally {
            setLoading(false)
        }
    }

    const save = async () => {
        try {

            const data = {
                "data": [
                    {
                        "term_id": 20,
                        "value": systolic
                    },
                    {
                        "term_id": 21,
                        "value": diastolic
                    },
                    {
                        "term_id": 22,
                        "value": pulse
                    }
                ]
            };

            const res = await webservices('blood_pressure/save', 'POST', data)
            console.log(res);
            setModalVisible(false)

        }
        catch (error) {

        }
    }


    const Render = ({ item }) => (

        <View style={{ marginStart: 15 }}>

            {item.list.map((heartData: any, index: number) => (
                <View key={index}>
                    <View style={{ width: '95%', marginTop: 10 }}>
                        {heartData.reading_details.map((detail: any, i: number) => (
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

        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.purple}>


                <TouchableOpacity
                    style={{ flexDirection: 'row', marginStart: 10 }}
                    onPress={() => navigation.pop()}>
                    <Leftarrow />
                </TouchableOpacity>


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Blood Pressure </Text>
                <View style={{ width: '10%', }}>
                    <Image source={require('../assets/image/info.jpg')} style={{ width: 20, height: 20 }} />
                </View>
            </View>

            <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <View style={styles.avg}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: "black", width: '76%', fontFamily: 'Mulish-Bold', fontSize: 18 }}>Average BP</Text>
                            <Image source={require('../assets/image/Heartbreake.png')} style={{ width: 40, height: 40 }} />
                        </View>
                        <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 28, marginTop: 20 }}>{getdata.average_systolic}/{getdata.average_diastolic}</Text>
                    </View>
                    <View style={styles.std}>

                        <Text style={{ color: "black", fontFamily: 'Mulish-Bold', fontSize: 18, marginTop: 5 }}>Standard Limits</Text>

                        <Text style={{ color: "black", fontFamily: 'Mulish-SemiBold', fontSize: 14, marginTop: 5 }}>{'Systolic :'} {getdata.blood_pressure_systolic}</Text>
                        <Text style={{ color: "black", fontFamily: 'Mulish-SemiBold', fontSize: 14, marginTop: 5 }}>{'Diastolic :'} {getdata.blood_pressure_diastolic}</Text>

                        <Text style={{ color: "black", fontFamily: 'Mulish-SemiBold', fontSize: 14, marginTop: 5 }}>{'Pulse Rate :'} {getdata.blood_pressure_pulserate} </Text>


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
            {loading ? (<Metricloader />)
                :
                (<FlatList
                    data={todays}
                    renderItem={Render}
                />)}
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
                                <TextInput
                                    keyboardType='numeric'
                                    maxLength={4}
                                    style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18, textAlign: 'center' }}
                                    onChangeText={(text) => setSystolic(text)} />
                            </View>
                        </View>
                        <View style={{
                            width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 15
                        }}>

                        </View>
                        <View style={styles.rate}>
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, }}>Diastolic (mmHg)</Text>
                            <View style={{ height: 54, width: 90, borderColor: '#4A4A4A', borderWidth: 0.2, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                <TextInput
                                    keyboardType='numeric'
                                    maxLength={4}
                                    style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18, textAlign: 'center' }}
                                    onChangeText={(text) => setDiastolic(text)}
                                />
                            </View>
                        </View>
                        <View style={{
                            width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 15
                        }}>

                        </View>
                        <View style={styles.rate}>
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, }}>Pulse Rate (mmHg)</Text>
                            <View style={{ height: 54, width: 90, borderColor: '#4A4A4A', borderWidth: 0.2, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                <TextInput
                                    keyboardType='numeric'
                                    maxLength={4}
                                    style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18, textAlign: 'center' }}
                                    onChangeText={(text) => setPulse(text)}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
                            <TouchableOpacity
                                onPress={() => { setModalVisible(false) }}
                                style={{ borderWidth: 0.5, borderColor: '#4A4A4A', width: '45%', padding: 15, borderRadius: 30, alignItems: 'center' }}>
                                <Text style={{ color: '#702B92', fontFamily: 'Mulish-Bold' }}>CANCLE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={save}
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
    rate: { flexDirection: 'row', marginTop: 15, width: '95%', justifyContent: 'space-between', alignItems: 'center' },

    model: {
        position: 'absolute', backgroundColor: 'white', width: '100%', height: '50%', marginStart: 0, marginBottom: 0, bottom: 0, borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },

})



