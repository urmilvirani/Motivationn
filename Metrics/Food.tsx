import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../assets/svg'
import { Plus } from '../assets/svg'
import { Calander } from '../assets/svg'
import Modal from "react-native-modal";
import webservices from '../Navigation/webservices'

const Food = ({ navigation }) => {


    const [isModalVisible, setModalVisible] = useState(false);
    const [banana, setBanana] = useState(false);
    // const [gram, setGram] = useState(false);
    const [name, setName] = useState(false);
    // const [quntity, setQuantity] = useState(false);
    const [list, setList] = useState('')



    useEffect(() => {

        food()
    }, [])

    const food = async () => {
        try {
            const response = await webservices('food_logging/list', 'POST')
            console.log(response.data.list);
            setList(response.data.list)

        }
        catch (error) {
            console.log(error);

        }
    }


    const Render = ({ item }) => (
        <View style={{ marginStart: 15 }}>
            <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 18, marginTop: 20 }}> {item.date}</Text>
            {item.list.map((date, i) => (
                <View key={i} style={{ justifyContent: "space-between", marginTop: 10, }}>
                    <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 18, }}>{date.title}</Text>

                    {date.items.map((data, index) => (
                        <View key={index} style={{ marginTop: 10 }}>
                            <Text style={{ color: 'black' }}>{'Food Item :'} {data.food_item}</Text>
                            <Text style={{ color: 'black' }}>{'Quantity :'} {data.food_item_value}{'gm'}</Text>
                            <View style={{
                                width: '95%', height: 1, backgroundColor: '#EAEAEA', marginTop: 10
                            }}></View>
                        </View>
                    ))}


                </View>))}
        </View>
    )

    const Lunch = ({ item }) => (
        <View>
            <View style={{ flexDirection: 'row', width: '92%', justifyContent: "space-between", marginTop: 10 }}>
                <View>
                    <Text style={{ color: 'black' }}>{'Food item :'} {item.item}</Text>
                    <Text style={{ color: 'black', marginTop: 5 }}>{'Quantity :'} {item.quantity}</Text>
                </View>
                <Text style={{ color: 'black' }}>{item.time}</Text>
            </View>

        </View>
    )

    const Dinner = ({ item }) => (
        <View>
            <View style={{ flexDirection: 'row', width: '92%', justifyContent: "space-between", marginTop: 10 }}>
                <View>
                    <Text style={{ color: 'black' }}>{'Food item :'} {item.item}</Text>
                    <Text style={{ color: 'black', marginTop: 5 }}>{'Quantity :'} {item.quantity}</Text>
                </View>
                <Text style={{ color: 'black' }}>{item.time}</Text>
            </View>
            <View style={{ width: '92%', height: 1, backgroundColor: 'lightgray', marginTop: 10 }}></View>
        </View>
    )


    const Touch = () => {

        setBanana(current => !current);
        setName(current => !current);
        setBanana(true)
        setName(true)
    }

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
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}

                    style={styles.break}>
                    <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, width: '95%' }}>Breakfast</Text>
                    <Plus />
                </TouchableOpacity>
                <View style={styles.dinner}>
                    <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, width: '95%' }}>Lunch</Text>
                    <Plus />
                </View>
                <View style={styles.dinner}>
                    <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, width: '95%' }}>Dinner</Text>
                    <Plus />
                </View>

            </View>

            {/* <ScrollView style={styles.scroll}> */}

            <FlatList
                data={list}
                renderItem={Render}
            />
            {/* <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, marginTop: 10 }}>Lunch</Text> */}
            {/* <FlatList
                data={lunch}
                renderItem={Lunch}
            />
            <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, marginTop: 10 }}>Dinner</Text>
            <FlatList
                data={dinner}
                renderItem={Dinner}
            />
            <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 18, marginTop: 15 }}>Yesterday</Text>
            <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, marginTop: 10 }}>Breakfast</Text>
            <FlatList
                data={Breakfast}
                renderItem={Render}
            />
            <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, marginTop: 10 }}>Lunch</Text>
            <FlatList
                data={lunch}
                renderItem={Lunch}
            />
            <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, marginTop: 10 }}>Dinner</Text>
            <FlatList
                data={dinner}
                renderItem={Dinner}
            />
            <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 18, marginTop: 15 }}>08-16-2023</Text>
            <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, marginTop: 10 }}>Breakfast</Text>
            <FlatList
                data={Breakfast}
                renderItem={Render}
            />
            <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, marginTop: 10 }}>Lunch</Text>
            <FlatList
                data={lunch}
                renderItem={Lunch}
            />
            <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, marginTop: 10 }}>Dinner</Text>
            <FlatList
                data={dinner}
                renderItem={Dinner}
            /> */}
            {/* </ScrollView> */}

            <Modal
                isVisible={isModalVisible}
                style={styles.modal}
            >
                <View style={{ flex: 1 }}>


                    <View style={{ marginTop: 20, flexDirection: "row", alignItems: 'center' }}>
                        <View style={{ width: "35%" }}></View>
                        <Text style={{ color: 'black', fontSize: 18, fontFamily: "Mulish-ExtraBold", width: '40%' }}>Add Breakfast</Text>
                        <TouchableOpacity
                            onPress={Touch}
                            style={{
                                flexDirection: 'row', alignItems: "center", backgroundColor: '#FBF4FF', padding: 8, borderRadius: 20, width: '21%', justifyContent: "center"
                            }}>
                            <Plus />
                            <Text style={{ color: '#702B92', fontFamily: 'Mulish-Bold' }}>ADD</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginStart: 15, marginTop: 10 }}>
                        <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 18, width: '17%' }}>Today</Text>
                        <Calander />
                    </View>
                    <ScrollView>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <TextInput

                                // onChangeText={(text) => setBanana(text)}
                                placeholder='Banana'
                                placeholderTextColor={'black'}
                                style={{ borderWidth: 0.5, borderColor: 'lightgray', width: '92%', borderRadius: 10, padding: 10 }}
                            />
                            <TextInput
                                placeholder='250 gm'
                                placeholderTextColor={'black'}
                                style={{ borderWidth: 0.5, borderColor: 'lightgray', width: '92%', borderRadius: 10, marginTop: 10, padding: 10 }}
                            />
                            {banana && <TextInput
                                placeholder='Food item name'
                                placeholderTextColor={'black'}
                                style={{ borderWidth: 0.5, borderColor: 'lightgray', width: '92%', borderRadius: 10, marginTop: 10, padding: 10 }}
                            />}
                            {name && <TextInput
                                placeholder='Quantity (gm/kg)'
                                placeholderTextColor={'black'}
                                style={{ borderWidth: 0.5, borderColor: 'lightgray', width: '92%', borderRadius: 10, marginTop: 10, padding: 10 }}
                            />}



                        </View>
                    </ScrollView>
                    <View style={{ alignItems: "center" }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
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

    dinner: {
        flexDirection: "row",
        backgroundColor: '#FBF4FF',
        width: '92%',
        padding: 17,
        borderRadius: 15,
        marginTop: 10
    },

    break: {
        flexDirection: "row",
        backgroundColor: '#FBF4FF',
        width: '92%',
        padding: 17,
        borderRadius: 15,
        marginTop: 20
    },

    scroll: { marginStart: 15, marginTop: 15 },
    modal: {
        position: 'absolute',
        backgroundColor: 'white',
        height: '60%',
        width: '100%',
        marginStart: 0,
        bottom: 0,
        marginBottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    }
})

const Breakfast = [
    {
        id: 1,

        item: 'Banana',
        quantity: '250 gm',
        time: '09:00 AM'
    },
    {
        id: 2,

        item: 'Apple',
        quantity: '100 gm',
        time: '09:15 AM'
    },

]

const lunch = [
    {
        id: 1,

        item: 'Rice',
        quantity: '250 gm',
        time: '01:15 PM'
    },


]

const dinner = [
    {
        id: 1,

        item: 'Rice',
        quantity: '150 gm',
        time: '08:30 PM'
    },
    {
        id: 2,

        item: 'Fruits',
        quantity: '200 gm',
        time: '08:30 PM'
    },

]