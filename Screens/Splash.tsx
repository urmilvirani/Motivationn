import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Threearrow } from '../assets/svg'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Splash = ({ navigation }) => {

    useEffect(() => {
        const getAuthToken = async () => {
            try {
                const authToken = await AsyncStorage.getItem('authToken');
                if (authToken !== null) {
                    // authToken is retrieved successfully
                    console.log('Auth Token:', authToken);
                    navigation.replace('BottamTab')

                    // Now you can use the authToken for making authenticated API calls or any other purpose
                } else {
                    // No authToken found, handle this case accordingly
                    console.log('No Auth Token found');
                }
            } catch (error) {
                console.log('Error retrieving Auth Token:', error);
                // Handle error, maybe show an alert to the user
                Alert.alert('Error', 'Failed to retrieve Auth Token');
            }
        };

        getAuthToken();
    }, []);

    return (
        <View>



            <View style={styles.line}>
                <Image source={require('../assets/image/Line.png')} style={{ height: 700, width: 370, }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={require('../assets/image/mike.png')} style={{ height: 72, width: 60, marginTop: 70 }} />
                <Image source={require('../assets/image/dot.png')} style={{ height: 8, width: 8, marginTop: 40 }} />
                <Image source={require('../assets/image/setting.png')} style={{ height: 58, width: 58, marginTop: 80, marginRight: 25 }} />
            </View>
            <View style={{ alignItems: "center" }}>
                <Image source={require('../assets/image/girl.png')} style={{ height: 90, width: 90, }} />
            </View>
            <Image source={require('../assets/image/dot.png')} style={styles.dot} />
            <View style={{ alignItems: "center" }}>
                <Image source={require('../assets/image/motivation.png')} style={{ height: 156, width: 247, marginTop: 40 }} />
            </View>
            <View style={styles.girl2}>
                <Image source={require('../assets/image/dot.png')} style={{ height: 6, width: 6, marginStart: 75 }} />
                <Image source={require('../assets/image/girl2.png')} style={{ height: 72, width: 72, marginEnd: 50 }} />
            </View>
            <Image source={require('../assets/image/food.png')} style={styles.food} />
            <View style={styles.bottom}>
                <View >
                    <Text style={{ color: '#4A4A4A', fontFamily: 'Mulish-Regular', fontSize: 18 }}>Elevate Your</Text>
                    <Text style={{ color: '#702B92', fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Wellness Voyage</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Signin')}
                    style={styles.explore}>
                    <Text style={{ color: '#702B92', fontFamily: 'Mulish-Bold', fontSize: 16 }}>EXPLORE  </Text>
                    <Threearrow />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Splash

const styles = StyleSheet.create({
    line: {
        alignItems: 'center',
        position: 'absolute'
    },

    dot: {
        height: 6,
        width: 6,
        marginStart: 262
    },

    girl2: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },

    food: {
        height: 58,
        width: 58,
        marginStart: 90
    },
    bottom: {
        marginTop: 70,
        flexDirection: 'row',
        marginStart: 15,
        justifyContent: 'space-between'
    },

    explore: {
        backgroundColor: 'rgba(112, 43, 146, 0.1)',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    }
})