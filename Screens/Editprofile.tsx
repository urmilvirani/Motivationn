import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ScrollView, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import { Leftarrow } from '../assets/svg'
import { Camera } from '../assets/svg'


const Editprofile = ({ navigation }) => {
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
                <View style={{ alignItems: "center", marginTop: 25, }}>
                    <Image source={require('../assets/image/Profile1.png')} style={{ height: 150, width: 150 }} />
                </View>

                <View style={styles.camera}>
                    <Camera />
                </View>



            </View>

            <ScrollView>
                <View style={{ marginTop: 90, alignItems: "center" }}>
                    <TextInput
                        placeholder='Melisa'
                        placeholderTextColor={'black'}
                        style={{
                            color: 'black', borderWidth: 1, borderColor: 'rgba(234, 234, 234, 1)', width: '92%', borderRadius: 10, padding: 15
                        }}
                    />
                    <TextInput
                        placeholder='jacob'
                        placeholderTextColor={'black'}
                        style={{
                            color: 'black', borderWidth: 1, borderColor: 'rgba(234, 234, 234, 1)', width: '92%', borderRadius: 10, marginTop: 15, padding: 15
                        }}
                    />
                    <TextInput
                        placeholder='melisajac12@gmail.com'
                        placeholderTextColor={'black'}
                        style={{
                            color: 'black', borderWidth: 1, borderColor: 'rgba(234, 234, 234, 1)', width: '92%', borderRadius: 10, marginTop: 15, padding: 15
                        }}
                    />
                </View>
            </ScrollView>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.save}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
    }
})