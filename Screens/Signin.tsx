import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Eye } from '../assets/svg'
import { Facebook } from '../assets/svg'
import { Google } from '../assets/svg'
import { Apple } from '../assets/svg'
import { User } from '../assets/svg'
import { Tick } from '../assets/svg'
import webservices from '../Navigation/webservices'

const Signin = ({ navigation }) => {

    const [touch, SetTouch] = useState(1)

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [otpp, setOtpp] = useState('')

    const data = new FormData()
    data.append('first_name', first)
    data.append('last_name', last)
    data.append('social_type_term', 'email')
    data.append('email', email)
    data.append('password', pass)
    data.append('otp', otpp)
    data.append('username', email)

    const [isModalVisible, setModalVisible] = useState(false);
    const otp = async () => {

        await webservices('send_otp_without_auth', 'POST', data)
            .then((response) => {
                console.log(response.message)
                setModalVisible(true)
            })

    }


    return (
        <SafeAreaView style={{ backgroundColor: 'rgba(112, 43, 146, 1)', height: '100%', }}>

            <View style={{ position: 'absolute', }}>
                <Image source={require('../assets/image/Background.png')} style={{ width: 428, height: 496, }} />
            </View>

            <View style={{ alignItems: "center", }}>

                <Image source={require('../assets/image/Motivation1.png')} style={{ width: 127, height: 80, marginTop: 40 }} />
                <Text style={{ fontFamily: 'Mulish-Bold', fontSize: 16, color: 'white', marginTop: 10, width: 350, textAlign: 'center' }}>{touch == 1 ? 'Sign' : 'Register'}in for Empowering</Text>
                <Text style={{ fontFamily: 'Mulish-Bold', fontSize: 16, color: 'white', marginBottom: 45, width: 350, textAlign: "center" }}> Your Health Journey</Text>
            </View>

            <View style={styles.white}>
                <View style={styles.sign}>
                    <TouchableOpacity style={styles.signin}
                        onPress={() => SetTouch(1)}
                    >
                        <View style={[styles.touch, { backgroundColor: touch == 1 ? '#ffff' : 'lightgray' }]}>

                            <Text style={{ color: 'black', }}>Sign In</Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signin}
                        onPress={() => SetTouch(2)}
                    >
                        <View style={[styles.touch, { backgroundColor: touch == 2 ? '#ffff' : 'lightgray' }]}  >

                            <Text style={{ color: 'black' }}>Register</Text>

                        </View>
                    </TouchableOpacity>

                </View>

                {touch == 1 && <View style={{ alignItems: "center" }}>
                    <View style={{ borderWidth: 1, borderColor: 'lightgray', width: '92%', borderRadius: 10, marginTop: 25, }}>
                        <TextInput
                            style={{ fontFamily: 'Mulish-Regular', color: 'black', padding: 10 }}
                            placeholder='Enter your Email Address'
                            placeholderTextColor={'black'}
                        />
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'lightgray', width: '92%', borderRadius: 10, marginTop: 15, flexDirection: 'row', alignItems: "center" }}>
                        <TextInput
                            style={{ fontFamily: 'Mulish-Regular', width: '90%', padding: 10, color: 'black' }}
                            placeholder='Enter Password'
                            placeholderTextColor={'black'}
                        />
                        <Eye />
                    </View>



                    <TouchableOpacity
                        style={{ width: '92%', alignItems: "flex-end", marginTop: 10, }}
                        onPress={() => navigation.navigate('Forgot')}
                    >
                        <Text style={{ color: 'black', fontFamily: 'Mulish-Regular' }}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.purple}
                        onPress={() => navigation.replace('BottamTab')}
                    >
                        <Text style={{ color: 'white', fontFamily: 'Mulish-Bold' }}>SIGN IN</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginTop: 20, alignItems: "center", width: '70%', justifyContent: "space-between" }}>
                        <View style={{ width: 80, height: 1, backgroundColor: 'lightgray' }}></View>
                        <Text style={{ color: 'lightgray', fontFamily: 'Mulish-Regular' }}> Or sign in with </Text>
                        <View style={{ width: 80, height: 1, backgroundColor: 'lightgray' }}></View>
                    </View>

                    <View style={{ flexDirection: 'row', width: '92%', justifyContent: 'space-between', marginTop: 25, }}>
                        <TouchableOpacity style={{ borderWidth: 0.5, borderColor: 'lightgray', width: '46%', justifyContent: "center", alignItems: "center", borderRadius: 30, padding: 15 }}>
                            <Facebook />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderWidth: 0.5, borderColor: 'lightgray', width: '46%', justifyContent: "center", alignItems: "center", borderRadius: 30, }}>
                            <Google />
                        </TouchableOpacity>
                        {/* <View style={{ borderWidth: 0.5, borderColor: 'lightgray', width: '32%', justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
                            <Apple />
                        </View> */}
                    </View>
                    <TouchableOpacity style={{ borderWidth: 0.5, borderColor: 'lightgray', width: '92%', justifyContent: "center", alignItems: "center", borderRadius: 30, padding: 15, marginTop: 15 }}>
                        <Apple />
                    </TouchableOpacity>



                </View>}

                {touch == 2 &&
                    <View >
                        <View style={{ alignItems: "center" }}>
                            <TextInput
                                style={{ fontFamily: 'Mulish-Regular', borderWidth: 0.5, borderColor: 'gray', borderRadius: 10, marginTop: 25, padding: 10, color: 'black', width: '92%' }}
                                placeholder='Enter First Name'
                                placeholderTextColor={'black'}
                                onChangeText={(text) => setFirst(text)}
                            />
                            <TextInput
                                style={{ fontFamily: 'Mulish-Regular', borderWidth: 0.5, borderColor: 'gray', borderRadius: 10, marginTop: 15, padding: 10, color: 'black', width: '92%' }}
                                placeholder='Enter Last Name'
                                placeholderTextColor={'black'}
                                onChangeText={(text) => setLast(text)}
                            />
                            <TextInput
                                style={{ fontFamily: 'Mulish-Regular', borderWidth: 0.5, borderColor: 'gray', borderRadius: 10, marginTop: 15, padding: 10, color: 'black', width: '92%' }}
                                placeholder='Enter Email '
                                placeholderTextColor={'black'}
                                onChangeText={(text) => setEmail(text)}
                            />
                            <View style={styles.pass}>
                                <TextInput
                                    style={{ fontFamily: 'Mulish-Regular', width: '90%', padding: 10, color: 'black' }}
                                    placeholder='Enter Password '
                                    placeholderTextColor={'black'}
                                    onChangeText={(text) => setPass(text)}
                                />
                                <Eye />
                            </View>
                            <View style={styles.pass}>
                                <TextInput
                                    style={{ fontFamily: 'Mulish-Regular', width: '90%', padding: 10, color: 'black' }}
                                    placeholder='Confirm Password '
                                    placeholderTextColor={'black'}
                                />
                                <Eye />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, width: 240, justifyContent: 'space-between', alignItems: 'center', marginStart: 15 }}>
                            <TouchableOpacity style={{ borderWidth: 0.5, borderColor: 'purple', width: 15, height: 15, }}

                            >
                                <View style={{ backgroundColor: 'green', height: 15, width: 15, alignItems: 'center', justifyContent: 'center' }}>
                                    <Tick />
                                </View>
                            </TouchableOpacity>
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular' }}>I accept Terms and Conditions...</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={styles.purple}>
                                <Text style={{ color: 'white', fontFamily: 'Mulish-Bold', }}>REGISTER ACCOUNT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>}

            </View>
        </SafeAreaView >

    )
}

export default Signin

const styles = StyleSheet.create({

    white: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 30,
        height: '100%',


    },
    sign: {
        backgroundColor: 'lightgray',
        width: '92%',
        marginTop: 20,
        flexDirection: 'row',
        height: 50,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginStart: 15
    },
    signin: {
        width: '50%',
        alignItems: "center",
        justifyContent: 'center',

        height: '90%',


    },
    touch: {

        height: '95%',
        width: '96%',
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center'
    },

    guest: {
        width: 350,
        borderWidth: 0.5,
        borderColor: 'lightgray',
        padding: 10,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 15
    },

    purple: {
        backgroundColor: 'rgba(112, 43, 146, 1)',
        width: '92%',
        padding: 17,
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 30
    },
    pass: {
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '92%'
    },

})