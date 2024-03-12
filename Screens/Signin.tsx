import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Eye } from '../assets/svg'
import { Facebook } from '../assets/svg'
import { Google } from '../assets/svg'
import { Apple } from '../assets/svg'
import { User } from '../assets/svg'
import { Tick } from '../assets/svg'
import webservices from '../Navigation/webservices'
import Modal from "react-native-modal";
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage'
import OtpInputs from 'react-native-otp-inputs'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const Signin = ({ navigation }) => {

    //conditions
    const [touch, SetTouch] = useState(1)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [isTextVisible, setIsTextVisible] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);

    //text inputs
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmpass, setConfirmpass] = useState('')
    const [otp2, setOtp2] = useState()

    //validation for register
    const [errfirst, setErrfirst] = useState('')
    const [errlast, setErrlast] = useState('')
    const [erremail, setErremail] = useState('')
    const [errpass, setErrpass] = useState('')
    const [errconfirm, setErrconfirm] = useState('')

    //validation for login
    const [logemail, setLogemail] = useState('')
    const [logpass, setLogpass] = useState('')

    //otp
    // const [f1, setF1] = useState('')
    // const [f2, setF2] = useState('')
    // const [f3, setF3] = useState('')
    // const [f4, setF4] = useState('')

    //append
    const data = new FormData()
    data.append('first_name', first)
    data.append('last_name', last)
    data.append('social_type_term', 'email')
    data.append('email', email)
    data.append('password', pass)
    data.append('otp', otp2)
    data.append('username', email)
    data.append('authentication_type', 'email')

    // hide and show password
    const toggleTextVisibility = () => {
        setIsTextVisible(!isTextVisible);
    };


    const login = async () => {

        if (!/\S+@\S+\.\S+/.test(email)) {
            setLogemail(true)
        }
        else {
            setLogemail(false)
        }

        if (pass.length < 6) {
            setLogpass(true)
        }
        else {
            setLogpass(false)
        }
        if (!email || !pass) {
            return false
        }

        try {
            const response = await webservices('user_login', 'POST', data)
            await AsyncStorage.setItem('token', response?.data?.auth_token)
            console.log(response.message);

        }
        catch (error) {
            console.log('login error', error);
            Alert.alert('Error', 'User not Exist')

        }

    }


    // for register new user
    const otp = async () => {

        if (!first.trim()) {
            setErrfirst(true)

        }
        else {
            setErrfirst(false)
        }
        if (!last.trim()) {
            setErrlast(true)
        }
        else {
            setErrlast(false)

        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setErremail(true)
        }
        else {
            setErremail(false)
        }

        if (pass.length < 6) {
            setErrpass(true)
        }
        else {
            setErrpass(false)
        }
        if (confirmpass.length < 6) {
            setErrconfirm(true)
        }
        else {
            setErrconfirm(false)
        }

        if (!first || !last || !email || !pass || !confirmpass) {
            return false
        }
        // if (pass !== confirmpass) {
        //     setConfirmpass(true)
        // }
        // else {
        //     setErrfirst(false)
        // }
        if (!toggleCheckBox) {
            Alert.alert('Error', 'accept terms and condition ')
            return;
        }


        //otp send
        await webservices('send_otp_without_auth', 'POST', data)
            .then((response) => {
                console.log(response.data.otp)
                setModalVisible(true)
                // setOtp1(response.data.otp)
            })
            .catch((error) => {
                console.log(error);


            })

    }

    const verify = async () => {

        await webservices('verify_otp', 'POST', data)
            .then((response) => {
                console.log(response.message)
                // navigation.navigate('Home')

            })


        // await webservices('user_signup', 'POST', data)
        //     .then((response) => {
        //         console.log(response.data)

        //     })
    }

    const fir = useRef();
    const second = useRef();
    const third = useRef();
    const four = useRef();



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

                {touch == 1 && <View style={{ marginStart: 15 }}>
                    <View style={{ borderWidth: 1, borderColor: 'lightgray', width: '95%', borderRadius: 10, marginTop: 25, }}>
                        <TextInput
                            style={{ fontFamily: 'Mulish-Regular', color: 'black', padding: 10 }}
                            placeholder='Enter your Email Address'
                            placeholderTextColor={'black'}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    {logemail ? <Text style={{ color: "red" }}>Enter your valid Email*</Text> : null}

                    <View style={{ borderWidth: 1, borderColor: 'lightgray', width: '95%', borderRadius: 10, marginTop: 15, flexDirection: 'row', alignItems: "center" }}>
                        <TextInput
                            style={{ fontFamily: 'Mulish-Regular', width: '90%', padding: 10, color: 'black' }}
                            placeholder='Enter Password'
                            placeholderTextColor={'black'}
                            onChangeText={(text) => setPass(text)}

                            secureTextEntry={!isTextVisible}
                        />
                        <TouchableOpacity onPress={toggleTextVisibility}>
                            <Eye name={isTextVisible ? 'off' : 'on'} />
                        </TouchableOpacity>
                    </View>
                    {logpass ? <Text style={{ color: "red" }}>Enter Password*</Text> : null}



                    <TouchableOpacity
                        style={{ width: '95%', alignItems: "flex-end", marginTop: 10, }}
                        onPress={() => navigation.navigate('Forgot')}
                    >
                        <Text style={{ color: 'black', fontFamily: 'Mulish-Regular' }}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.purple}
                        // onPress={() => navigation.replace('BottamTab')}
                        onPress={login}
                    >
                        <Text style={{ color: 'white', fontFamily: 'Mulish-Bold' }}>SIGN IN</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: "center" }}>
                        <View style={{ flexDirection: 'row', marginTop: 20, alignItems: "center", width: '70%', justifyContent: "space-between" }}>
                            <View style={{ width: 80, height: 1, backgroundColor: 'lightgray' }}></View>
                            <Text style={{ color: 'lightgray', fontFamily: 'Mulish-Regular' }}> Or sign in with </Text>
                            <View style={{ width: 80, height: 1, backgroundColor: 'lightgray' }}></View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between', marginTop: 25, }}>
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
                    <TouchableOpacity style={{ borderWidth: 0.5, borderColor: 'lightgray', width: '95%', justifyContent: "center", alignItems: "center", borderRadius: 30, padding: 15, marginTop: 15 }}>
                        <Apple />
                    </TouchableOpacity>



                </View>}

                {touch == 2 &&

                    <View >

                        <View style={{ marginStart: 15 }}>
                            <TextInput
                                style={{ fontFamily: 'Mulish-Regular', borderWidth: 0.5, borderColor: 'gray', borderRadius: 10, marginTop: 20, padding: 10, color: 'black', width: '95%' }}
                                placeholder='Enter First Name'
                                placeholderTextColor={'black'}
                                onChangeText={(text) => setFirst(text)}

                            />
                            {errfirst ? <Text style={{ color: "red" }}>Enter your first name*</Text> : null}
                            <TextInput
                                style={{ fontFamily: 'Mulish-Regular', borderWidth: 0.5, borderColor: 'gray', borderRadius: 10, marginTop: 10, padding: 10, color: 'black', width: '95%' }}
                                placeholder='Enter Last Name'
                                placeholderTextColor={'black'}
                                onChangeText={(text) => setLast(text)}
                            />
                            {errlast ? <Text style={{ color: "red" }}>Enter your last name*</Text> : null}
                            <TextInput
                                style={{ fontFamily: 'Mulish-Regular', borderWidth: 0.5, borderColor: 'gray', borderRadius: 10, marginTop: 10, padding: 10, color: 'black', width: '95%' }}
                                placeholder='Enter Email '
                                placeholderTextColor={'black'}
                                onChangeText={(text) => setEmail(text)}
                            />
                            {erremail ? <Text style={{ color: "red" }}>Enter your valid Email*</Text> : null}
                            <View style={styles.pass}>
                                <TextInput
                                    style={{ fontFamily: 'Mulish-Regular', width: '90%', padding: 10, color: 'black' }}
                                    placeholder='Enter Password '
                                    placeholderTextColor={'black'}
                                    onChangeText={(text) => setPass(text)}
                                    secureTextEntry={!isTextVisible}
                                />
                                <TouchableOpacity onPress={toggleTextVisibility}>
                                    <Eye name={isTextVisible ? 'off' : 'on'} />
                                </TouchableOpacity>
                            </View>
                            {errpass ? <Text style={{ color: "red" }}>Enter Password*</Text> : null}
                            <View style={styles.pass}>
                                <TextInput
                                    style={{ fontFamily: 'Mulish-Regular', width: '90%', padding: 10, color: 'black' }}
                                    placeholder='Confirm Password '
                                    placeholderTextColor={'black'}
                                    onChangeText={(text) => setConfirmpass(text)}
                                    secureTextEntry={!isTextVisible}
                                />
                                <TouchableOpacity onPress={toggleTextVisibility}>
                                    <Eye name={isTextVisible ? 'off' : 'on'} />
                                </TouchableOpacity>
                            </View>
                            {errconfirm ? <Text style={{ color: "red" }}>Enter confirm password*</Text> : null}
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, width: 240, justifyContent: 'space-between', alignItems: 'center', marginStart: 15 }}>

                            <CheckBox
                                style={{ borderWidth: 1, borderColor: 'black' }}
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                tintColor='black'
                                onTintColor='black'
                            />
                            <Text style={{ color: 'black', fontFamily: 'Mulish-Regular' }}>I accept Terms and Conditions...</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={otp}
                                style={styles.purple}>
                                <Text style={{ color: 'white', fontFamily: 'Mulish-Bold', }}>REGISTER ACCOUNT</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                }

            </View>
            <Modal
                isVisible={isModalVisible}
                style={styles.modal}
            >
                <View style={{ flex: 1 }}>

                    <Text style={{ color: 'black', fontFamily: 'Mulish-ExtraBold', fontSize: 20, textAlign: 'center', marginTop: 15 }}> Enter OTP</Text>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, textAlign: 'center', marginTop: 10, width: '75%', }}>Please enter four digit code sent
                            to your email {email} </Text>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%', }}>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: 'black', width: '15%', borderRadius: 15, color: 'black', height: '100%', textAlign: 'center', fontSize: 20 }}
                                placeholderTextColor={'black'}
                                keyboardType='numeric'
                                maxLength={4}
                                // ref={fir}

                                onChangeText={(text) =>
                                    setOtp2(text)
                                    // text && second.current.focus()
                                }

                            />
                            {/* <TextInput
                                style={{ borderWidth: 1, borderColor: 'black', width: '15%', borderRadius: 15, color: 'black', height: '100%', textAlign: 'center', fontSize: 20 }}
                                placeholderTextColor={'black'}
                                maxLength={1}
                                keyboardType='numeric'
                                ref={second}
                                onChangeText={(text) => {
                                    setOtp2(text)
                                    text ? third.current.focus() : fir.current.focus()
                                }}
                            />
                            <TextInput
                                style={{ borderWidth: 1, borderColor: 'black', width: '15%', borderRadius: 15, color: 'black', height: '100%', textAlign: 'center', fontSize: 20 }}
                                placeholderTextColor={'black'}
                                maxLength={1}
                                keyboardType='numeric'
                                onChangeText={(text) => {
                                    setOtp2(text)
                                    text ? four.current.focus() : second.current.focus()
                                }}
                                ref={third}
                            />
                            <TextInput
                                style={{ borderWidth: 1, borderColor: 'black', width: '15%', borderRadius: 15, color: 'black', height: '100%', textAlign: 'center', fontSize: 20 }}
                                placeholderTextColor={'black'}
                                maxLength={1}
                                keyboardType='numeric'
                                onChangeText={(text) => {
                                    setOtp2(text)
                                    !text && third.current.focus()
                                }}
                                ref={four} */}
                            />
                        </View>
                    </View>
                    {/* <View style={{ alignItems: "center" }}>
                        <OTPInputView
                            style={{ width: '80%', height: 100, borderRadius: 30 }}
z                            pinCount={4}
                            autoFocusOnLoad
                        />
                    </View> */}

                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10 }}>
                        <Text style={{ color: 'black', fontFamily: "Mulish-Regular", marginStart: 15, }}>Didn’t receive code? </Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'rgba(112, 43, 146, 1)' }}>Resend</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity
                            onPress={verify}
                            style={styles.purple}>
                            <Text style={{ color: 'white', fontFamily: 'Mulish-Bold', }}>VERIFY</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </Modal>
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
        width: '95%',
        padding: 17,
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 30
    },
    pass: {
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%'
    },
    modal: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        height: '40%',
        marginStart: 0,
        marginBottom: 0,
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,

    }
})