import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ScrollView, ImageBackground, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../assets/svg'
import { Camera } from '../assets/svg'
import { err } from 'react-native-svg'
import webservices from '../Navigation/webservices'
import Modal from 'react-native-modal'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Editprofile = ({ navigation }) => {

    //show user's detail
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [mail, setMail] = useState('')


    //for update the name
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')



    //for open modal
    const [isModalVisible, setModalVisible] = useState(false);



    const data = new FormData()
    data.append('first_name', first)
    data.append('last_name', last)
    data.append('email', email)
    data.append('profile_pic', profilee)



    useEffect(() => {

        profile();

    }, [])


    const profile = async () => {
        try {

            const name = await webservices('get_user_profile', 'POST')

            console.log(name.data.user.member_name);
            setName(name.data.user.first_name)
            setSurname(name.data.user.last_name)
            setEmail(name.data.user.email)
            setMail(name.data.user.email)
        }
        catch (error) {
            console.log(error);

        }
    }

    const editprofile = async () => {

        try {
            const response = await webservices('update_user_profile', 'POST', data)
            console.log(response.message);
            setEmail(response.data.user.email)

            const res = await webservices('get_user_profile', 'POST', data)

            console.log(res.message);

        }
        catch (error) {
            console.log(error);

        }
    }

    const [profilee, setProfilee] = useState('')
    const selectimage = () => {
        let option = {
            mediaType: 'photo',
            maxWidth: 200,
            maxHeight: 300,
            includeBase: true
        }
        launchImageLibrary(option, (response) => {
            if (response.didCancel) {
                console.log('user cancelled pic');
                return
            }
            else if (response.error) {
                console.log(response.error);
                return
            }

            console.log('image', response.assets[0]);
            setProfilee(response.assets[0])

        })
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
                <View style={{ alignItems: 'center', }}>
                    <TouchableOpacity
                        onPress={selectimage}
                        style={{ alignItems: "center", marginTop: 25, backgroundColor: 'gray', height: 150, width: 150, borderRadius: 80 }}>
                        {profilee ?
                            (<Image source={{ uri: profilee.uri }} style={{ height: 150, width: 150, borderRadius: 80 }} />)
                            :
                            (<Text style={{ color: 'white', marginTop: 70, fontSize: 18 }}>Upload Image</Text>)
                        }
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity
                    style={{ position: 'absolute' }}

                >
                    <View

                        style={styles.camera}>
                        <Camera />
                    </View>
                </TouchableOpacity> */}


            </View>

            <ScrollView>
                <View style={{ marginTop: 90, alignItems: "center" }}>
                    <TextInput
                        placeholder={name}
                        placeholderTextColor={'black'}
                        style={{
                            color: 'black', borderWidth: 1, borderColor: 'rgba(234, 234, 234, 1)', width: '92%', borderRadius: 10, padding: 15
                        }}
                        onChangeText={(text) => setFirst(text)}
                    />
                    <TextInput
                        placeholder={surname}
                        placeholderTextColor={'black'}
                        style={{
                            color: 'black', borderWidth: 1, borderColor: 'rgba(234, 234, 234, 1)', width: '92%', borderRadius: 10, marginTop: 15, padding: 15
                        }}
                        onChangeText={(text) => setLast(text)}
                    />
                    <View style={{ borderWidth: 1, borderColor: 'rgba(234, 234, 234, 1)', width: '92%', borderRadius: 10, marginTop: 15, padding: 20 }} >
                        <Text style={{ color: "black" }}>{mail}</Text>
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
                <View style={{ alignItems: "center" }}>
                    <View style={styles.cameraa}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Camera</Text>
                    </View>
                    <TouchableOpacity

                        style={styles.cameraaa}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Albums</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                        style={styles.back}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Back</Text>
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
        borderColor: 'rgba(254, 254, 254, 1)',
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 180,
        marginStart: 210


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
        height: '25%',
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