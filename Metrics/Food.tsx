import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../assets/svg'
import { Plus } from '../assets/svg'
import { Calander } from '../assets/svg'
import Modal from "react-native-modal";
import webservices from '../Navigation/webservices'
import Metricloader from '../component/Metricloader'

const Food = ({ navigation }: any) => {

    const [loading, setLoading] = useState('')

    //model
    const [isModalVisible, setModalVisible] = useState(false);
    const [gm, setGm] = useState('')
    const [deletemodal, setDeletemodal] = useState('')

    //textinput
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')

    //used for Render(second flat list)
    const [list, setList] = useState('')

    //to show name in bootom seat
    const [foodie, setFoodie] = useState('')

    //meal_type_id 
    const [selectedMealTypeId, setSelectedMealTypeId] = useState(null);

    //select kg or gm
    const [selectkg, setSelectkg] = useState('')
    const [selectedHeartRateId, setSelectedHeartRateId] = useState('');

    //validation
    const [err, setErr] = useState('')
    const [error, setError] = useState('')


    useEffect(() => {

        food()

    }, [])


    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    const dateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    const date = `${day}/${month}/${year}`

    const data = {
        "datetime": dateTime,
        "meal_type_id": selectedMealTypeId,
        "items": [
            {
                "food_item": name,
                "food_value": quantity,
                "measurement_type_term": selectkg
            }
        ]
    };



    const save = async () => {
        try {
            if (!name) {
                setErr(true)
                return
            }
            else {
                setErr(false)
            }
            if (!quantity) {
                setError(true)
                return
            }
            else {
                setError(false)
            }

            const res = await webservices('food_logging/save', 'POST', data)
            console.log(res.message);
            setModalVisible(false)

        }
        catch (error) {
            console.log(error);

        }
    }

    const Delete = async () => {

        try {

            const data = new FormData()
            data.append('food_log_detail_id', selectedHeartRateId)
            const dele = await webservices('food_logging/delete', 'POST', data)
            console.log('hello', dele);

        }
        catch (error) {
            console.log(error);

        }
    }


    const food = async () => {
        try {
            setLoading(true)
            const response = await webservices('food_logging/list', 'POST')
            console.log(response.data.list);
            setList(response.data.list)

        }
        catch (error) {
            console.log(error);

        }
        finally {
            setLoading(false)
        }
    }


    const Render = ({ item }) => (
        <View style={{ marginStart: 15 }}>
            <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 18, marginTop: 20, }}> {item.date}</Text>
            {item.list.map((date, i) => (
                <View key={i} style={{ justifyContent: "space-between", marginTop: 10, }}>
                    {date.items && date.items.length > 0 ? (<Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 18, }}>{date.title}</Text>) : null}

                    {date.items.map((data, index) => (
                        <TouchableOpacity
                            onPress={() => {

                                setSelectedHeartRateId(data.food_log_detail_id)
                                setDeletemodal(true)
                            }}
                            key={index} style={{ marginTop: 10, width: '100%', }}>
                            <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: 'black' }}>{'Food Item :'} {data.food_item}</Text>
                                    <Text style={{ color: 'black' }}>{'Quantity :'} {data.food_item_value} {data.measurement_type_term}</Text>
                                </View>
                                <Text style={{ color: '#4A4A4A', fontSize: 14, fontFamily: 'Mulish-Regular' }}>{formatCreatedAt(data.created_at)}</Text>
                            </View>
                            <View style={{
                                width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 10
                            }}></View>
                        </TouchableOpacity>
                    ))}


                </View>))}
        </View>
    )

    const render = ({ item }) => (
        <View style={{ alignItems: "center" }}>
            <TouchableOpacity
                onPress={() => {
                    setFoodie(item.name)
                    setSelectedMealTypeId(item.id);
                    setModalVisible(true)
                }}
                style={styles.break}>
                <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, width: '95%' }}>{item.name}</Text>
                <Plus />
            </TouchableOpacity>
        </View>
    )

    const weightdata = ({ item }) => (
        <View>
            <TouchableOpacity onPress={() => {
                setSelectkg(item.name)
                setGm(false)
            }}>
                <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginTop: 5 }}>{item.name}</Text>
            </TouchableOpacity>
        </View>
    )

    const formatCreatedAt = (createdAt) => {
        const date = new Date(createdAt);
        const options = {
            hour: 'numeric',
            minute: 'numeric',

            hour12: true // Use 12-hour format
        };
        // Convert UTC timestamp to local time and return the formatted time
        return date.toLocaleTimeString('en-US', options);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.purple}>


                <TouchableOpacity
                    style={{ flexDirection: 'row', marginStart: 10 }}
                    onPress={() => navigation.pop()}>
                    <Leftarrow />
                </TouchableOpacity>


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Food Logging</Text>
                <View style={{ width: '10%' }}>

                </View>
            </View>

            <View>
                <FlatList
                    data={listt}
                    renderItem={render}

                />
            </View>

            {loading ? (<Metricloader />)
                :
                (<FlatList
                    data={list}
                    renderItem={Render}
                />
                )}

            <Modal
                isVisible={isModalVisible}
                style={styles.modal}

            >
                <View style={{ flex: 1 }}>


                    <View style={{ marginTop: 20, alignItems: "center" }}>

                        <Text style={{ color: 'black', fontSize: 18, fontFamily: "Mulish-ExtraBold", width: '40%', textAlign: 'center' }}>{foodie}</Text>

                    </View>
                    <View

                        // onPress={() => setDatevisible(true)}
                        style={{ flexDirection: 'row', marginStart: 15, marginTop: 10 }}>
                        <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 18, width: '30%' }}>{date}</Text>
                        <Calander />
                    </View>

                    <View style={{ alignItems: "center", marginTop: 20 }}>
                        <TextInput
                            onChangeText={(text) => setName(text)}
                            value={name}
                            placeholder='Banana'
                            placeholderTextColor={'black'}
                            style={{ borderWidth: 0.5, borderColor: 'lightgray', width: '92%', borderRadius: 10, padding: 10, color: 'black' }}
                        />
                        {err ? <Text style={{ color: "red", fontFamily: "Mulish-ExtraBold", marginTop: 0, fontSize: 12, width: '94%', marginStart: 10, }}>This field is required</Text> : null}
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                onChangeText={(text) => setQuantity(text)}
                                keyboardType='numeric'
                                placeholder='250 gm'
                                placeholderTextColor={'black'}
                                style={{ borderWidth: 0.5, borderColor: 'lightgray', width: '70%', borderRadius: 10, marginTop: 10, padding: 10, color: 'black' }}
                            />
                            <TouchableOpacity
                                onPress={() => setGm(true)}
                                style={{ borderWidth: 0.5, borderColor: 'lightgray', width: '20%', borderRadius: 10, marginTop: 10, padding: 10, alignItems: "center", justifyContent: "center", marginStart: 10 }}>
                                {selectkg ? (<Text style={{ color: 'black', fontSize: 18, fontFamily: 'Mulish-Bold' }}>{selectkg}</Text>)
                                    : (<Text style={{ color: 'black', fontSize: 18, fontFamily: 'Mulish-Bold' }}>GM</Text>)}
                            </TouchableOpacity>
                        </View>
                        {error ? <Text style={{ color: "red", fontFamily: "Mulish-ExtraBold", marginTop: 0, fontSize: 12, width: '94%', marginStart: 10, }}>This field is required</Text> : null}



                    </View>

                    <View style={{ alignItems: "center" }}>
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

            <Modal

                isVisible={gm}
                backdropOpacity={0}
                style={{
                    position: 'absolute',
                    height: '87%',
                    width: '93%',
                    justifyContent: "flex-end",
                    marginStart: 15,
                    alignItems: "flex-end"
                }}

            >
                <View style={{ backgroundColor: '#FBF4FF', height: '10.50%', width: '22%', alignItems: "center", borderRadius: 10 }}>
                    {/* <TouchableOpacity onPress={() => setGm(false)}>
                        <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginTop: 5 }}>GM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGm(false)}>
                        <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginTop: 10 }}>KG</Text>
                    </TouchableOpacity> */}
                    <FlatList
                        data={weight}
                        renderItem={weightdata}
                    />
                </View>
            </Modal>

            <Modal isVisible={deletemodal} style={styles.model}>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, textAlign: 'center', marginTop: 5 }}>
                        Delete !!
                    </Text>
                    <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, textAlign: 'center', marginTop: 5 }}>
                        Are you sure you want to Delete?
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: "center" }}>
                        <TouchableOpacity
                            onPress={() => setDeletemodal(false)}
                            style={{ width: '40%', borderWidth: 1, padding: 8, backgroundColor: 'white', borderRadius: 10 }}>
                            <Text style={{ color: 'black', textAlign: "center" }}> Cancle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity

                            onPress={() => {

                                Delete()
                                setDeletemodal(false)
                            }}
                            style={{ width: '40%', borderWidth: 1, padding: 8, backgroundColor: 'black', marginStart: 20, borderRadius: 10 }}>
                            <Text style={{ color: 'white', textAlign: 'center' }}> Delete</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Modal>


        </SafeAreaView >
    )
}

export default Food

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

    break: {
        flexDirection: "row",
        backgroundColor: '#FBF4FF',
        width: '95%',
        padding: 17,
        borderRadius: 15,
        marginTop: 10,


    },

    scroll: { marginStart: 15, marginTop: 15 },
    modal: {
        position: 'absolute',
        backgroundColor: 'white',
        height: '39%',
        width: '100%',
        marginStart: 0,
        bottom: 0,
        marginBottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    model: {
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

const listt = [
    {
        id: 28,
        name: 'Breakfast'
    },
    {
        id: 54,
        name: 'Breakfast Snack'
    },
    {
        id: 55,
        name: 'Lunch'
    },
    {
        id: 56,
        name: 'Lunch Snack'
    },
    {
        id: 57,
        name: 'Dinner'
    },
    {
        id: 58,
        name: 'Dinner Snack'
    },
]

const weight = [
    {
        id: 1,
        name: 'GM'
    },
    {
        id: 2,
        name: 'KG'
    }
]




// const calculateLastFiveDates = () => {


//     const today = new Date();
//     const dates = [];
//     for (let i = 0; i < 5; i++) {
//         const date = new Date(today);
//         date.setDate(today.getDate() - i);
//         const year = date.getFullYear();
//         const month = String(date.getMonth() + 1).padStart(2, '0');
//         const day = String(date.getDate()).padStart(2, '0');
//         dates.push({ date: `${year}-${month}-${day}`, year, month, day });
//     }
//     // setLastFiveDates(dates);

// }; 

{/* <Modal
                isVisible={datevisible}
                backdropOpacity={0}
                style={{
                    position: 'absolute',
                    height: '87%',
                    width: '35%',
                    justifyContent: "flex-end",
                    marginStart: 15




                }} >
                <View style={{ backgroundColor: '#FBF4FF', borderRadius: 5, alignItems: "center", height: '25%', justifyContent: 'space-between' }}>

                    {lastFiveDates.map((dateObj, index) => (
                        <TouchableOpacity key={index} onPress={() => {
                            setDatee(dateObj.date)
                            setDatevisible(false)

                        }}>
                            <Text style={{ color: 'black', fontSize: 18, fontFamily: 'Mulish-Bold' }}>{dateObj.date}</Text>
                        </TouchableOpacity>
                    ))}



                </View>
            </Modal> */}
const [lastFiveDates, setLastFiveDates] = useState([]);
const [datevisible, setDatevisible] = useState('')
const [datee, setDatee] = useState('')