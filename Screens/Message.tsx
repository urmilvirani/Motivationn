import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking, ScrollView, ImageBackground, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Mikee } from '../assets/svg'
import webservices from '../Navigation/webservices'
import { useFocusEffect } from '@react-navigation/native'
import Messageloader from '../component/Messageloader'


const Message = ({ navigation }) => {

    const [text, setText] = useState('')
    const [messages, setMessages] = useState([]);
    const scrollViewRef = useRef();
    const [loading, setLoading] = useState('')

    const data = new FormData()
    data.append('message', text)
    data.append('type', 'text')


    useEffect(() => {
        getChat()

    }, [])

    useFocusEffect(
        React.useCallback(() => {
            getChat();
        }, [])
    );


    const sendChat = async () => {
        try {
            const send = await webservices('chat/insert_chat_message', 'POST', data)
            console.log(send.message);
            setText('')
            getChat()


        }
        catch (error) {
            console.log(error);

        }
    }



    const getChat = async () => {
        try {

            const receive = await webservices('chat/get_chat_messages', 'POST')
            console.log(receive.data);
            setMessages(receive.data.list.reverse())
            scrollViewRef.current.scrollToEnd({ animated: true });


        }
        catch (error) {
            console.log(error);

        }

    }

    const formatCreatedAt = (createdAt) => {
        const date = new Date(createdAt);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        return date.toLocaleDateString('en-GB', options);
    };



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.purple}>
                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Motivation Centre</Text>
            </View>
            <Image source={require('../assets/image/Back.png')} style={{ height: '100%', width: '100%', position: 'absolute', }} />


            <ScrollView ref={scrollViewRef} style={{ paddingHorizontal: 10, bottom: 15, marginTop: 15, }}>
                {messages.map((message, index) => (
                    <View key={index}>
                        <View style={[styles.messageContainer, message.sender_id == message.sender_id ? styles.rightMessage : styles.leftMessage]}>

                            <Text style={styles.messageText}>{message.message}</Text>
                        </View>
                        <View style={{ alignItems: message.sender_id == message.sender_id ? 'flex-end' : 'flex-start', marginBottom: 10 }} >
                            <Text style={{ color: 'gray', fontSize: 10 }}>{formatCreatedAt(message.created_at)}</Text>
                        </View>

                    </View>
                ))}
            </ScrollView>


            <View style={{ alignItems: "center", }}>
                <View style={{
                    backgroundColor: '#EEEEEE', width: '92%', bottom: 15, borderRadius: 30, flexDirection: "row", alignItems: 'center',
                }}>
                    <TextInput
                        value={text}
                        onChangeText={(text) => setText(text)}
                        placeholder='Type a message...'
                        placeholderTextColor={'black'}
                        style={{ padding: 10, width: "87%", color: 'black' }}
                    />
                    <TouchableOpacity
                        onPress={sendChat}
                        style={{ backgroundColor: 'rgba(112, 43, 146, 1)', height: 42, width: 42, borderRadius: 30, alignItems: "center", justifyContent: 'center' }}>
                        <Image source={require('../assets/image/sennd.png')} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
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
        justifyContent: 'center',

    },
    messageContainer: {
        padding: 10,
        marginBottom: 5,
        maxWidth: '80%',
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginTop: 10


    },
    leftMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#EEEEEE',
    },
    rightMessage: {
        alignSelf: 'flex-end',
        backgroundColor: 'rgba(112, 43, 146, 1)',

    },
    messageText: {
        color: 'white',
    },

})