import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../assets/svg'
import Modal from "react-native-modal";
import webservices from '../Navigation/webservices';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Metricloader from '../component/Metricloader';
import Weightinfo from '../Information/Weightinfo';


const Weight = ({ navigation }) => {

    const [get, setGet] = useState('')
    const [weigh, setweigh] = useState('')
    const [todays, setTodays] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [loading, setLoading] = useState('')


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimeConfirm = (time) => {
        setSelectedTime(time);
        hideTimePicker();
    };

    useEffect(() => {
        weightapi()

    }, [])


    const weightapi = async () => {
        try {
            setLoading(true)
            const heart = await webservices('weight_measurement/get_details', 'POST')
            console.log(heart.data);
            setGet(heart.data)


            const response = await webservices('weight_measurement/list', 'POST')
            console.log(response.data.list);
            // setTodays(response?.data?.list)


            // setTodays(response?.data?.list);
            const today = new Date().toISOString().slice(0, 10);
            const todaysData = response.data.list.filter(item => item.date === today);
            setTodays(todaysData)

        }
        catch (error) {
            console.log(error);

        }
        finally {
            setLoading(false)
        }
    }

    const setWeight = async () => {
        try {

            const year = selectedDate.getFullYear();
            const month = String(selectedDate.getMonth() + 1).padStart(2, '0'); // Month starts from 0
            const day = String(selectedDate.getDate()).padStart(2, '0');

            // Format the time as HH:mm:ss
            const hours = String(selectedTime.getHours()).padStart(2, '0');
            const minutes = String(selectedTime.getMinutes()).padStart(2, '0');
            const seconds = String(selectedTime.getSeconds()).padStart(2, '0');

            // Construct the date and time string
            const dateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;


            const data = new FormData()
            data.append('weight', weigh)
            data.append('datetime', dateTime)
            const save = await webservices('weight_measurement/save', "POST", data)
            console.log('saved', save.message);
            // setPulse(save)
            setModalVisible(false)

        }
        catch (error) {
            console.log(error);

        }
    }



    const Render = ({ item }: any) => (

        <View>

            {
                item.list.map((heartdata, index) => (
                    <View key={index} style={{ marginStart: 15, }}>
                        <View style={{ flexDirection: "row", width: '95%', justifyContent: 'space-between', marginTop: 10 }}>
                            <Text style={{ color: 'black', fontSize: 16, fontFamily: 'Mulish-Bold' }}>{'Weight :'} {heartdata.weight}{'kg'}  </Text>
                            {/* <Text style={{
                                color: '#4A4A4A', fontSize: 14, fontFamily: 'Mulish-Regular'
                            }}>{item.time}</Text> */}

                        </View>
                        <View style={{
                            width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 10
                        }}></View>
                    </View>))
            }
        </View>


    )


    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.purple}>


                <TouchableOpacity
                    style={{ flexDirection: 'row', marginStart: 10 }}
                    onPress={() => navigation.pop()}>
                    <Leftarrow />
                </TouchableOpacity>


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Weight Logging</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Weightinfo')}
                    style={{ width: '10%' }}>
                    <Image source={require('../assets/image/info.jpg')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
            </View>

            <View style={styles.avg}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: "black", fontFamily: 'Mulish-Bold', fontSize: 18 }}>Average Weight</Text>
                    <Image source={require('../assets/image/vajan.png')} style={{ width: 40, height: 40, position: 'absolute', marginStart: 110 }} />
                </View>
                <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 35, marginTop: 20 }}>{get.average_weight}{'kg'}</Text>
            </View>
            <View style={styles.today}>
                <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 20, marginStart: 15, }}>Today</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Weightdata')}
                >
                    <Text style={{ color: '#702B92', fontFamily: 'Mulish-Bold', fontSize: 14 }}>view data</Text>
                </TouchableOpacity>
            </View>

            {loading ? (<Metricloader />)
                : (<FlatList
                    data={todays}
                    renderItem={Render}
                />)}
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
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleTimeConfirm}
                        onCancel={hideTimePicker}
                    />
                    <View style={{ marginStart: 15 }}>
                        <View style={styles.bottom}>
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, }}>Date</Text>
                            {/* <Text style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18 }}>08-18-2023</Text> */}

                            <TouchableOpacity onPress={showDatePicker}>
                                <Text style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18 }}>
                                    {selectedDate.toLocaleDateString()}
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 15
                        }}>

                        </View>
                        <View style={styles.bottom}>
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, }}>Time</Text>
                            {/* <Text style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18 }}>02.22 PM</Text> */}

                            <TouchableOpacity onPress={showTimePicker}>
                                <Text style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18 }}>
                                    {selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{
                            width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 15
                        }}>

                        </View>
                        <View style={styles.rate}>
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, }}>Weight (kg)</Text>
                            <View style={{ height: 54, width: 90, borderColor: '#4A4A4A', borderWidth: 0.2, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                <TextInput
                                    keyboardType='numeric'
                                    maxLength={4}
                                    style={{ color: '#4A4A4A', fontFamily: 'Mulish-Bold', fontSize: 18, textAlign: "center" }}
                                    onChangeText={(text) => setweigh(text)}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 90 }}>
                            <TouchableOpacity
                                onPress={() => { setModalVisible(false) }}
                                style={{ borderWidth: 0.5, borderColor: '#4A4A4A', width: '45%', padding: 15, borderRadius: 30, alignItems: 'center' }}>
                                <Text style={{ color: '#702B92', fontFamily: 'Mulish-Bold' }}>CANCLE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={setWeight}
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
    bottom: { flexDirection: 'row', marginTop: 20, width: '95%', justifyContent: 'space-between' },
    rate: { flexDirection: 'row', marginTop: 20, width: '95%', justifyContent: 'space-between', alignItems: 'center' },

    model: {
        position: 'absolute', backgroundColor: 'white', width: '100%', height: '50%', marginStart: 0, marginBottom: 0, bottom: 0, borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },

})

