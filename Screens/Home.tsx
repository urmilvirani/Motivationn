import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Health } from '../assets/svg'
import { Vector } from '../assets/svg'
import { Note } from '../assets/svg'
import { Mike } from '../assets/svg'
import { Headphone } from '../assets/svg'
import { Que } from '../assets/svg'
import { Book } from '../assets/svg'
import { Light } from '../assets/svg'
import webservices from '../Navigation/webservices'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import Homeprofile from '../component/Homeprofile'

const Home = ({ navigation }) => {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState('')

    useFocusEffect(
        React.useCallback(() => {
            profile();
            item()
            return () => {
                // Cleanup function (if needed)
            };
        }, [])
    );



    const profile = async () => {
        try {
            setLoading(true);
            const namee = await webservices('get_user_profile', 'POST', data)

            console.log('jjjjjjjjjjjjjjjjjjjjjjj', namee.data.user.profile_pic);

            setUser(namee.data.user)

        }
        catch (error) {
            console.log(error);

        }
        finally {
            setLoading(false); // Hide loader
        }
    }


    const item = async () => {
        try {
            const items = await webservices('category/get_categories', 'POST', data)

            const dataa = items.data.list
            setList(dataa)

        }
        catch (error) {
            console.log(error);


        }
    }

    const Touch = (item) => {

        navigation.navigate('Detail', { item })


    }

    const Render = ({ item }) => (


        <TouchableOpacity

            onPress={() => Touch(item)}
            // onPress={() => navigation.navigate('Detail', { userdata: item, })}
            style={styles.flat}>

            <View style={{ width: '27%' }}>
                <Image source={{ uri: item.category_image }} style={{ height: 34, width: 34 }} />
            </View>
            <Text style={{ color: 'black', width: '60%', paddingVertical: 5, fontFamily: "Mulish-Regular", fontSize: 14 }}>{item.category_name}</Text>
            <Vector />
        </TouchableOpacity>

    )

    return (


        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'white', height: '100%' }}>
                {loading ? <Homeprofile /> : (<View>
                    <View style={styles.purple}>


                        <View style={styles.upper}>
                            <View>

                                <Text style={{ fontFamily: 'Mulish-Regular', fontSize: 18 }}>Hello</Text>
                                <Text style={{ fontFamily: 'Mulish-Bold', fontSize: 24, color: 'white' }}>{user.first_name} {user.last_name}</Text>
                            </View>

                            <TouchableOpacity

                                onPress={() => navigation.navigate('Profile')}
                                style={{ backgroundColor: 'white', width: 54, height: 54, borderRadius: 12, alignItems: 'center', justifyContent: 'center' }}>


                                {user.profile_pic ?
                                    (<Image source={{ uri: user.profile_pic }} style={{ height: 54, width: 54, borderRadius: 12, }} />)
                                    :
                                    (<Image source={require('../assets/image/Profile.png')} style={{ width: 30, height: 30 }} />)}
                            </TouchableOpacity>
                        </View>
                    </View>



                    <View style={{ alignItems: "center", }}>

                        {list ? <FlatList
                            data={list}
                            renderItem={Render}
                            numColumns={2}
                        /> : null}
                    </View>


                    <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Mulish-Bold', marginStart: 15, marginTop: 10 }}>Metrics</Text>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Heartrate')}
                                style={styles.heart}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                                    <Image source={require('../assets/image/Heart.png')} style={{ height: 44, width: 44, marginStart: 10, marginTop: 10 }} />
                                    <Image source={require('../assets/image/Leftback.png')} style={{ width: 70, height: 60 }} />
                                </View>
                                <View style={{ marginStart: 10, marginBottom: 10 }}>
                                    <Text style={{
                                        color: 'rgba(74, 74, 74, 1)', fontFamily: 'Mulish-Regular', marginTop: 25, fontSize: 16
                                    }}>Heart Rate</Text>
                                    {/* <Text style={{
                                color: 'black', fontFamily: 'Mulish-Bold', fontSize: 18
                            }}>96 bpm</Text> */}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Blood')}
                                style={styles.heartt}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                                    <Image source={require('../assets/image/Heart1.png')} style={{ height: 44, width: 44, marginStart: 10, marginTop: 10 }} />
                                    <Image source={require('../assets/image/Leftcircle.png')} style={{ width: 70, height: 60 }} />
                                </View>
                                <View style={{ marginStart: 10, marginBottom: 10 }}>
                                    <Text style={{
                                        color: 'rgba(74, 74, 74, 1)', fontFamily: 'Mulish-Regular', marginTop: 25, fontSize: 16
                                    }}>Blood Pressure</Text>
                                    {/* <Text style={{
                                color: 'black', fontFamily: 'Mulish-Bold', fontSize: 18
                            }}>120/80 mmHg</Text> */}
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Weight')}
                                style={styles.heart}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                                    <Image source={require('../assets/image/weight.png')} style={{ height: 44, width: 44, marginStart: 10, marginTop: 10 }} />
                                    <Image source={require('../assets/image/Leftcircle.png')} style={{ width: 70, height: 60 }} />
                                </View>
                                <View style={{ marginStart: 10, marginBottom: 10 }}>
                                    <Text style={{
                                        color: 'rgba(74, 74, 74, 1)', fontFamily: 'Mulish-Regular', marginTop: 25, fontSize: 16
                                    }}>Weight Logging</Text>
                                    {/* <Text style={{
                                color: 'black', fontFamily: 'Mulish-Bold', fontSize: 18
                            }}>152.2 lbs</Text> */}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Food')}
                                style={styles.heartt}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                                    <Image source={require('../assets/image/fruit.png')} style={{ height: 44, width: 44, marginStart: 10, marginTop: 10 }} />
                                    <Image source={require('../assets/image/Leftback.png')} style={{ width: 70, height: 60 }} />
                                </View>
                                <View style={{ marginStart: 10, marginBottom: 10 }}>
                                    <Text style={{
                                        color: 'rgba(74, 74, 74, 1)', fontFamily: 'Mulish-Regular', marginTop: 25, fontSize: 16
                                    }}>Food Logging</Text>
                                    {/* <Text style={{
                                color: 'black', fontFamily: 'Mulish-Bold', fontSize: 18
                            }}>350 gm</Text> */}
                                </View>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>)}


                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity

                        style={styles.request}>
                        <Image source={require('../assets/image/phone.png')} style={{ width: 24, height: 24 }} />
                        <Text style={{ color: 'black', marginStart: 10, fontFamily: 'Mulish-Bold' }}>Request Callback</Text>
                    </TouchableOpacity>
                    <View style={styles.book}>
                        <Image source={require('../assets/image/assessment.png')} style={{ width: 24, height: 24 }} />
                        <Text style={{ color: 'black', marginStart: 10, fontFamily: 'Mulish-Bold' }}>Book Assessment</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default Home

const styles = StyleSheet.create({
    purple: {
        backgroundColor: 'rgba(112, 43, 146, 1)',
        height: '13%',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        width: '100%'
    },

    upper: {
        flexDirection: 'row',
        width: 350,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginStart: 15,
        marginTop: 25
    },

    list: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "center",
        marginTop: 10
    },

    heart: {
        borderWidth: 0.5,
        borderColor: 'lightgray',
        width: '45%',

        justifyContent: 'space-between',
        borderRadius: 10
    },
    heartt: {
        borderWidth: 0.5,
        borderColor: 'lightgray',
        width: '45%',

        justifyContent: 'space-between',
        borderRadius: 10,
        marginStart: 10
    },
    request: {
        borderWidth: 1,
        borderColor: 'rgba(112, 43, 146, 0.8)',
        width: '45%',
        backgroundColor: 'rgba(112, 43, 146, 0.08)',
        flexDirection: 'row',
        padding: 10,
        alignItems: "center",
        borderRadius: 10
    },
    book: {
        borderWidth: 1,
        borderColor: 'rgba(112, 43, 146, 0.8)',
        width: '45%',
        backgroundColor: 'rgba(112, 43, 146, 0.08)',
        flexDirection: 'row',
        padding: 10,
        alignItems: "center",
        borderRadius: 10,
        marginStart: 5
    },
    flat: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        marginStart: 10,
        width: '46%',
        borderRadius: 10,
        padding: 7,
        marginTop: 10,
    },

})

const data = [

    {
        id: 1,
        name: 'Healthy Meal Plan',
        image: require('../assets/image/health.png'),

    },
    {
        id: 2,
        name: 'Weekly Workbook & Assist',
        image: require('../assets/image/book.png')
    },

    {
        id: 5,
        name: 'Exercise & Pilates',
        image: require('../assets/image/Girll.png')
    },
    {
        id: 6,
        name: 'Recipes Ideas',
        image: require('../assets/image/Notebook.png')
    },
    {
        id: 7,
        name: 'Daily Inspiration',
        image: require('../assets/image/light.png')
    },
    {
        id: 8,
        name: 'Podcasts',
        image: require('../assets/image/Mik.png')
    },

]