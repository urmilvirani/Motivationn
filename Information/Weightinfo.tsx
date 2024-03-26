import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../assets/svg'

const Weightinfo = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.purple}>


                <TouchableOpacity
                    style={{ flexDirection: 'row', marginStart: 10 }}
                    onPress={() => navigation.pop()}>
                    <Leftarrow />
                </TouchableOpacity>


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>Weight Logging</Text>
                <View style={{ width: '10%' }}>

                </View>
            </View>

            <View style={{ flexDirection: 'row', width: '85%', marginStart: 15, marginTop: 10 }}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>Weight logging is the practice of regularly recording one's body weight. It is often
                    used for various health and fitness-related purposes.
                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>People log their weight to keep a record of changes in their body weight over time. This
                    can help setting and achieving weight-related goals.
                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>Weight Logging can be an essential part of monitoring one's health. It can help individuals and healthcare
                    professionals keep an eye on weight changes that may indicate underlying health issues or trends related to nutrition and lifestyle.
                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>For those aiming to manage or change their body weight, weight logging can  be a motivational tool. It helps individuals track their progress
                    and make adjustments to their diet and exercise routines accordingly.
                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>It is particularly useful for those working on weight management, such as weight loss or
                    muscle gain. Weight logs can help determine if strategies are effective.
                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>He frequency of weight logging can vary. Some People log their weight daily, while others do import PropTypes from 'prop-types'
                    weekly or monthly. The choice depends on personal preferences and goals.
                </Text>
            </View>
            <View style={styles.view}>
                <Text style={{ color: 'red', fontSize: 30 }}>* </Text>
                <Text style={{ color: 'black', fontFamily: 'Mulish-SemiBold' }}>Regular weight logging can help individuals identify trends and patterns in their weight fluctuations, such as daily variations,
                    weekly trends, or monthly changes.
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default Weightinfo

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
    view: { flexDirection: 'row', width: '85%', marginStart: 15, marginTop: 20 }
})