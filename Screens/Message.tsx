import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ScrollView, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import { Leftarrow } from '../assets/svg'
import { Plus } from '../assets/svg'
import { Mikee } from '../assets/svg'
import Modal from "react-native-modal";

const Message = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.purple}>
                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Motivation Centre</Text>
            </View>
            <Image source={require('../assets/image/Back.png')} style={{ height: '100%', width: '100%', position: 'absolute' }} />
            <ScrollView>

            </ScrollView>
            <View style={{ alignItems: "center" }}>
                <View style={{
                    backgroundColor: '#EEEEEE', width: '92%', bottom: 15, borderRadius: 30, flexDirection: "row", alignItems: 'center'
                }}>
                    <TextInput
                        placeholder='Type a message...'
                        placeholderTextColor={'black'}
                        style={{ padding: 10, width: "87%", color: 'black' }}
                    />
                    <View style={{ backgroundColor: 'rgba(112, 43, 146, 1)', height: 42, width: 42, borderRadius: 30, alignItems: "center", justifyContent: 'center' }}>
                        <Mikee />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Message

const styles = StyleSheet.create({
    purple: {
        backgroundColor: 'rgba(112, 43, 146, 1)',
        height: '8%',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },

})