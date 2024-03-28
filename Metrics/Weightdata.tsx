import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ScrollView, Appearance } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Leftarrow } from '../assets/svg'
import webservices from '../Navigation/webservices'
import Modal from "react-native-modal";
import Metricloader from '../component/Metricloader';


const Heartdata = ({ navigation }: any) => {

    const [weightt, setweightt] = useState('')
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedHeartRateId, setSelectedHeartRateId] = useState('');
    const [loading, setLoading] = useState('')

    useEffect(() => {
        weight()

    }, [])

    const weight = async () => {
        try {
            setLoading(true)
            const response = await webservices('weight_measurement/list', 'POST')
            console.log(response.data.list);
            setweightt(response?.data?.list)
        }
        catch (error) {
            console.log(error);

        }
        finally {
            setLoading(false)
        }
    }
    const Delete = async () => {

        try {

            const data = new FormData()
            data.append('weight_measurement_id', selectedHeartRateId)
            const dele = await webservices('weight_measurement/delete', 'POST', data)
            console.log('hello', dele);
            weight()
        }
        catch (error) {
            console.log(error);

        }
    }
    const formatCreatedAt = (createdAt) => {
        const date = new Date(createdAt);
        const options = { hour: '2-digit', minute: '2-digit', hour12: true };
        // Return only the formatted time part
        return date.toLocaleTimeString('en-US', options);
    };


    const Render = ({ item }: any) => (
        <View style={{ marginStart: 15, }}>
            <Text style={styles.today}>{item.date}</Text>

            {item.list.map((weightData, index) => (
                <View key={index}>
                    <TouchableOpacity
                        onPress={() => {

                            setSelectedHeartRateId(weightData.weight_measurement_id);
                            setModalVisible(true)
                        }}
                        style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ color: 'black', fontSize: 16, fontFamily: 'Mulish-Regular' }}>{'Weight: '} {weightData.weight} {'kg'}</Text>
                        <Text style={{ color: '#4A4A4A', fontSize: 14, fontFamily: 'Mulish-Regular' }}>{formatCreatedAt(weightData.datetime)}</Text>
                    </TouchableOpacity><View style={{
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

            {loading ? (<Metricloader />)
                :
                (<View>
                    <FlatList
                        data={weightt}
                        renderItem={Render}
                    />
                </View>
                )}

            <Modal isVisible={isModalVisible} style={styles.modal}>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, textAlign: 'center', marginTop: 5 }}>
                        Delete !!
                    </Text>
                    <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, textAlign: 'center', marginTop: 5 }}>
                        Are you sure you want to Delete?
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: "center" }}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={{ width: '40%', borderWidth: 1, padding: 8, backgroundColor: 'white', borderRadius: 10 }}>
                            <Text style={{ color: 'black', textAlign: "center" }}> Cancle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity

                            onPress={() => {

                                Delete()
                                setModalVisible(false)
                            }}
                            style={{ width: '40%', borderWidth: 1, padding: 8, backgroundColor: 'black', marginStart: 20, borderRadius: 10 }}>
                            <Text style={{ color: 'white', textAlign: 'center' }}> Delete</Text>
                        </TouchableOpacity>
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
    today: { color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginTop: 20 },
    yes: { color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginStart: 15, marginTop: 15 },
    modal: {
        position: 'absolute',
        backgroundColor: '#FBF4FF',
        height: '13%',
        width: '100%',
        marginStart: 0,
        bottom: 0,
        marginBottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    }


})

