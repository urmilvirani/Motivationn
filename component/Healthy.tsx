import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking } from 'react-native'
import React from 'react'
import { Play, Vector, Youtube } from '../assets/svg'
import { Download } from '../assets/svg'


const Youtube1 = () => {
    return (
        <TouchableOpacity style={{ alignItems: "center" }}>
            <View style={styles.view}>
                <Image source={require('../assets/image/image.png')} style={styles.image} />
                <View style={{ alignItems: "flex-end", width: '95%' }}>
                    <View style={styles.white}>
                        <View style={styles.red}>
                            <Play />
                        </View>
                    </View>
                </View>
                <Text style={{ color: "black", fontFamily: 'Mulish-Bold', fontSize: 18, marginStart: 10 }}>Fat Loss VS Weight Loss</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '45%', justifyContent: "space-between", marginStart: 10 }}>
                    <Text style={{ color: 'black', }}>12:58 mins</Text>
                    <View style={{ width: 5, height: 5, backgroundColor: 'gray', borderRadius: 10 }}></View>
                    <Text style={{ color: 'black', }}>1 year ago</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const Book = () => {
    return (
        <TouchableOpacity style={{ alignItems: 'center' }}>
            <View style={{ backgroundColor: '#F5F5F5', flexDirection: 'row', alignItems: "center", padding: 10, width: '95%', borderRadius: 10, marginTop: 10 }}>
                <View style={{ width: '10%' }}>
                    <Image source={require('../assets/image/Purplebook.png')} style={{ height: 30, width: 30 }} />
                </View>
                <Text style={{ color: "black", fontFamily: "Mulish-Bold", width: "85%" }}>Core</Text>
                <Vector />
            </View>
        </TouchableOpacity>


    )
}
const Image1 = () => {

    return (
        <TouchableOpacity style={{ alignItems: "center", marginTop: 10 }}>
            <Image source={require('../assets/image/Inspiration.png')} style={{ width: '95%', height: 388, borderRadius: 10 }} />
        </TouchableOpacity>

    )
}

const Pdf1 = () => {
    return (
        <TouchableOpacity style={{ alignItems: 'center' }}>
            <View style={{ backgroundColor: '#F5F5F5', flexDirection: 'row', alignItems: "center", padding: 10, width: '95%', borderRadius: 10, marginTop: 10 }}>
                <View style={{ width: '10%' }}>
                    <Image source={require('../assets/image/pdf.png')} style={{ height: 30, width: 30 }} />
                </View>
                <Text style={{ color: "black", fontFamily: "Mulish-Bold", width: "84%" }}>Healthy Men at All Ages</Text>
                <Download />
            </View>
        </TouchableOpacity>


    )
}

const Video = () => {
    return (
        <TouchableOpacity style={{ alignItems: "center" }}>
            <View style={styles.view}>
                <Image source={require('../assets/image/Beef.png')} style={styles.image} />
                <View style={{ alignItems: "flex-end", width: '95%' }}>
                    <View style={styles.white1}>
                        <View style={styles.purple}>
                            <Play />
                        </View>
                    </View>
                </View>
                <Text style={{ color: "black", fontFamily: 'Mulish-Bold', fontSize: 18, marginStart: 10 }}>Beef Stroganoff Recipe</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '40%', justifyContent: "space-between", marginStart: 10 }}>
                    <Text style={{ color: 'black', }}>22:44 mins</Text>
                    <View style={{ width: 5, height: 5, backgroundColor: 'gray', borderRadius: 10 }}></View>
                    <Text style={{ color: 'black', }}>Today</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}




export { Youtube1, Book, Image1, Pdf1, Video }

const styles = StyleSheet.create({
    white: {
        backgroundColor: '#F5F5F5',
        width: 55,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 125
    },

    red: {
        backgroundColor: '#F44545',
        height: 30,
        width: 40,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: 'center'
    },
    image: {
        height: 150,
        width: '99.50%',
        borderRadius: 10,
        position: 'absolute',
        marginStart: 5,
        marginTop: 5
    },
    view: {
        backgroundColor: '#F5F5F5',
        width: '95%',
        padding: 5,
        borderRadius: 10,
        height: 220,
        marginTop: 10

    },
    purple: {
        backgroundColor: '#702B92',
        height: 30,
        width: 35,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center'
    },
    white1: {
        backgroundColor: '#F5F5F5',
        width: 50,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 125
    },

})