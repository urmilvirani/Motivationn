import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, } from 'react'
import { Leftarrow } from '../assets/svg'
import { Edit } from '../assets/svg'
import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import webservices from '../Navigation/webservices';
import { useFocusEffect } from '@react-navigation/native';
import Ploder from '../component/Ploder';

const Profile = ({ navigation }) => {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);

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
            const name = await webservices('get_user_profile', 'POST')

            console.log(name.data.user.member_name);
            setUser(name.data.user)

        }
        catch (error) {
            console.log(error);

        }
        finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        try {
            const log = await webservices('logout', 'POST')
            console.log(log.message);

            await AsyncStorage.removeItem('authToken');
            // console.log('hiiiiii', response.message);


            navigation.navigate('Splash')

        } catch (error) {
            console.error('Error logging out:', error);

        }
    };

    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: 'white', }}>
            <View style={styles.purple}>
                <View style={{ flexDirection: "row", height: "55%" }}>
                    <View style={{ width: '5%' }}></View>
                    <View style={{ flexDirection: 'row', width: '90%', justifyContent: "space-between", alignItems: "center", }}>
                        <TouchableOpacity onPress={() => navigation.pop()}>
                            <Leftarrow />
                        </TouchableOpacity>
                        <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Profile</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Editprofile')}>
                            <Edit />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={{
                        width: 350, height: 1, backgroundColor: "rgba(234, 234, 234, 1)",
                    }}></View>
                </View>
                {loading ? (<Ploder />) : (<View style={{ flexDirection: "row" }}>

                    {user.profile_pic ?
                        (<Image source={{ uri: user.profile_pic }} style={{ width: 100, height: 100, backgroundColor: 'gray', marginTop: 15, marginStart: 15, borderRadius: 15 }} />)
                        :
                        (
                            <View style={{ width: 100, height: 100, backgroundColor: 'lightgray', marginTop: 15, marginStart: 15, borderRadius: 15, alignItems: 'center', justifyContent: "center" }}>
                                <Image source={require('../assets/image/Profile.png')} style={{ width: 50, height: 50 }} />
                            </View>
                        )
                    }


                    <View style={{ margin: 15 }}>
                        <Text style={{ color: "white", fontSize: 16, fontFamily: 'Mulish-Bold' }}>{user.first_name} {user.last_name}</Text>
                        <Text style={{ color: "white", fontSize: 14, fontFamily: 'Mulish-Regular' }}>{user.email}</Text>
                    </View>
                </View>)}
            </View>
            <View style={{ height: '80%', justifyContent: "flex-end", bottom: 30 }}>
                <TouchableOpacity style={styles.delete}>
                    <Image source={require('../assets/image/delete.png')} style={{ height: 24, width: 24 }} />
                    <Text style={{ color: 'black', fontSize: 16, marginStart: 5, fontFamily: 'Mulish-SemiBold' }}>Delete Account</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    // onPress={logout}
                    onPress={() => setModalVisible(true)}
                    style={styles.logout}>
                    <Image source={require('../assets/image/logout.png')} style={{ height: 24, width: 24 }} />
                    <Text style={{
                        color: 'rgba(244, 69, 69, 1)', fontSize: 16, marginStart: 5, fontFamily: 'Mulish-SemiBold'
                    }}>Logout</Text>
                </TouchableOpacity>
            </View>
            <Modal
                isVisible={isModalVisible}
                style={styles.modal}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{ color: 'black', fontFamily: 'Mulish-Bold', fontSize: 16, textAlign: 'center', marginTop: 15 }}>
                        Logout
                    </Text>
                    <Text style={{ color: 'black', fontFamily: 'Mulish-Regular', fontSize: 16, textAlign: 'center', marginTop: 15 }}>
                        Are you sure you want to Logout?
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: "center" }}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={{ width: '40%', borderWidth: 1, padding: 8, backgroundColor: 'white', borderRadius: 10 }}>
                            <Text style={{ color: 'black', textAlign: "center", fontFamily: 'Mulish-ExtraBold' }}> Cancle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity

                            onPress={logout}
                            style={{ width: '40%', borderWidth: 1, padding: 8, backgroundColor: 'black', marginStart: 20, borderRadius: 10 }}>
                            <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Mulish-ExtraBold' }}> Yes</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>

        </SafeAreaView >
    )
}

export default Profile

const styles = StyleSheet.create({
    purple: {
        backgroundColor: 'rgba(112, 43, 146, 1)',
        height: '20%',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        width: '100%',


    },
    delete: {

        flexDirection: 'row',
        marginStart: 15,
        backgroundColor: 'rgba(74, 74, 74, 0.05)',
        width: '92%',
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },

    logout: {
        marginTop: 10,
        flexDirection: 'row',
        marginStart: 15,
        backgroundColor: 'rgba(244, 69, 69, 0.05)',
        width: '92%',
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    modal: {
        position: 'absolute',
        backgroundColor: '#FBF4FF',
        height: '18%',
        width: '100%',
        marginStart: 0,
        bottom: 0,
        marginBottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    }
})