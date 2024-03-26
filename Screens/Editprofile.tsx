import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ScrollView, ImageBackground, TextInput, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../assets/svg'
import { Camera } from '../assets/svg'
import { Cancel } from '../assets/svg'
import { err } from 'react-native-svg'
import webservices from '../Navigation/webservices'
import Modal from 'react-native-modal'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import Editloader from '../component/Editloader'

const Editprofile = ({ navigation }) => {

    //show user's detail
    const [user, setUser] = useState('')
    const [profileImg, setProfileImg] = useState('')

    //for update the name
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')



    //for open modal
    const [isModalVisible, setModalVisible] = useState(false);

    const [loading, setLoading] = useState(true);





    useFocusEffect(
        React.useCallback(() => {
            profile();
            return () => {
                // Cleanup function (if needed)
            };
        }, [])
    );



    const profile = async () => {
        try {
            setLoading(true)
            const profileData = await webservices('get_user_profile', 'POST')

            console.log('hiiiii', profileData.data.user.profile_pic);

            setProfileImg(profileData.data.user.profile_pic)
            setUser(profileData.data.user)
        }
        catch (error) {
            console.log(error);

        }
        finally {
            setLoading(false)
        }
    }


    const editprofile = async () => {

        try {

            const data = new FormData()

            data.append('first_name', first)
            data.append('last_name', last)
            data.append('email', email)
            data.append('profile_pic', {
                uri: profileImg,
                type: 'image/jpg',
                name: 'photo.jpg',
            });

            const response = await webservices('update_user_profile', 'POST', data)
            if (response && response.status) {
                console.log(response.message);
                Alert.alert(response.message)
                setEmail(response.data.user.email)

                const res = await webservices('get_user_profile', 'POST', data)
                if (response && response.status) {
                    console.log(res.message);

                }
                else {
                    console.log('hello', res.message);

                }
            }


        }
        catch (error) {
            console.log(error);

        }



    }

    const selectImage = async () => {

        await launchImageLibrary({ mediaType: 'photo' }, response => {
            if (!response.didCancel && !response.error) {
                console.log(response.assets[0].uri);

                setProfileImg(response.assets[0].uri);
            }
            else {
                // Handle cancellation or errors
                console.log('Image selection cancelled or encountered an error.');
            }

        });

    }




    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.purple}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 30 }}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', marginStart: 10 }}
                        onPress={() => navigation.pop()}>
                        <Leftarrow />
                    </TouchableOpacity>


                    <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Edit Profile</Text>
                    <View style={{ width: '10%' }}>

                    </View>
                </View>
            </View >
            {loading ? (<Editloader />)
                :
                (<View style={{ position: "absolute", width: '100%', alignItems: 'center', height: "35%", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        style={{ alignItems: "center", marginTop: 25, height: 150, width: 150, borderRadius: 80 }}>


                        {profileImg ?
                            (<Image source={{ uri: profileImg }} style={{ height: 150, width: 150, borderRadius: 80 }} />)
                            :
                            (<View style={{ backgroundColor: 'lightgray', height: 150, width: 150, borderRadius: 80, alignItems: "center", justifyContent: "center" }}>
                                <Image source={require('../assets/image/Profile.png')} style={{ height: 70, width: 70, }} />
                            </View>)
                        }





                    </TouchableOpacity>
                </View>)}





            <ScrollView>
                <View style={{ marginTop: 100, alignItems: "center" }}>
                    <TextInput
                        placeholder={user.first_name}
                        placeholderTextColor={'black'}
                        style={{
                            color: 'black', borderWidth: 1, borderColor: 'rgba(234, 234, 234, 1)', width: '92%', borderRadius: 10, padding: 15
                        }}
                        onChangeText={(text) => setFirst(text)}
                    />
                    <TextInput
                        placeholder={user.last_name}
                        placeholderTextColor={'black'}
                        style={{
                            color: 'black', borderWidth: 1, borderColor: 'rgba(234, 234, 234, 1)', width: '92%', borderRadius: 10, marginTop: 15, padding: 15
                        }}
                        onChangeText={(text) => setLast(text)}
                    />
                    <View style={{ borderWidth: 1, borderColor: 'rgba(234, 234, 234, 1)', width: '92%', borderRadius: 10, marginTop: 15, padding: 20 }} >
                        <Text style={{ color: "black" }}>{user.email}</Text>
                    </View>

                </View>

            </ScrollView>
            <View style={{ alignItems: "center" }}>

                <TouchableOpacity
                    onPress={editprofile}
                    style={styles.save}>

                    <Text style={{ color: 'white', textAlign: 'center' }}>SAVE</Text>
                </TouchableOpacity>
            </View>
            <Modal
                isVisible={isModalVisible}
                style={styles.modal}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{ color: 'black', marginTop: 20, fontSize: 18, fontFamily: 'Mulish-Bold', marginStart: 20 }}>Upload Photo</Text>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        {/* <TouchableOpacity
                            // onPress={() => selectImage('camera')}
                            style={{ borderWidth: 1, borderColor: 'gray', width: '14%', padding: 10, borderRadius: 10, alignItems: "center", justifyContent: "center", marginStart: 20 }}>
                            <Camera />
                        </TouchableOpacity> */}
                        <TouchableOpacity

                            onPress={selectImage}
                            style={{ borderWidth: 1, borderColor: 'gray', width: '14%', padding: 10, borderRadius: 10, alignItems: "center", justifyContent: "center", marginStart: 20 }}>
                            {/* <Camera /> */}
                            <Image source={require('../assets/image/gallary.jpeg')} style={{ height: 25, width: 30, }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        style={{ position: 'absolute', width: '98%', alignItems: 'flex-end', bottom: 100, }}>
                        <Cancel />
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView >
    )
}

export default Editprofile

const styles = StyleSheet.create({
    purple: {
        backgroundColor: 'rgba(112, 43, 146, 1)',
        height: '20%',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        width: '100%',


    },
    camera: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 25,
        height: 35,
        width: 35,
        borderColor: 'red',
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        top: 180,
        marginStart: 230


    },

    save: {
        backgroundColor: 'rgba(112, 43, 146, 1)',
        bottom: 30,
        padding: 17,
        width: '92%',
        borderRadius: 30
    },

    modal: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        height: '15%',
        marginStart: 0,
        marginBottom: 0,
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,

    },

    cameraa: {
        backgroundColor: 'rgba(112, 43, 146, 1)', width: '80%', padding: 10, borderRadius: 20
    },

    cameraaa: {
        backgroundColor: 'rgba(112, 43, 146, 1)', width: '80%', padding: 10, borderRadius: 20, marginTop: 10
    },

    back: {
        backgroundColor: 'gray', width: '80%', padding: 10, borderRadius: 20, marginTop: 10
    }



})