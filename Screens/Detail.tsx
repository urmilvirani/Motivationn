import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking } from 'react-native'
import React from 'react'
import { Leftarrow } from '../assets/svg'
import { Vector } from '../assets/svg'
import { Youtube } from '../assets/svg'
import { Play } from '../assets/svg'
import { useRoute } from '@react-navigation/native'

import { Book, Image1, Youtube1, Pdf1, Video } from '../component/Healthy'

import Pdf from 'react-native-pdf'

const Detail = ({ route, navigation }) => {

    // console.log(route.params.id)


    return (

        <SafeAreaView style={{ height: '100%', backgroundColor: 'white' }}>
            <View style={styles.purple}>


                <TouchableOpacity
                    style={{ flexDirection: 'row', marginStart: 10 }}
                    onPress={() => navigation.pop()}>
                    <Leftarrow />
                </TouchableOpacity>


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>{route.params.name}</Text>
                <View style={{ width: '10%' }}>

                </View>
            </View>

            <FlatList
                data={arr}
                renderItem={({ item }) => <DetailComponent item={item} navigation={navigation} />}
            />

        </SafeAreaView>

    )
}

const DetailComponent = ({ item, navigation }) => {



    if (item.type == "youtube") {
        return < Youtube1 />
    }
    if (item.type == "core") {
        return <Book />
    }
    if (item.type == 'image') {
        return <Image1 />
    }
    if (item.type == 'pdf') {
        return <Pdf1 />
    }
    if (item.type == 'video') {
        return <Video />
    }




    return <Text style={{ color: "black", marginTop: 20 }}>{item.type}</Text>



}

export default Detail

const styles = StyleSheet.create({

    purple: {
        backgroundColor: 'rgba(112, 43, 146, 1)',
        height: '8%',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },

})


const arr = [



    {
        title: 'Youtube',
        type: 'youtube'
    },


    {
        title: 'image',
        type: 'image'
    },
    {
        title: 'Core',
        type: 'core'
    },
    {
        title: 'pdf',
        type: 'pdf'
    },
    {
        title: 'Video',
        type: 'video'
    }


]

