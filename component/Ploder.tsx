import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Ploder = () => {
    return (
        <View style={{ flexDirection: "row" }}>
            <View style={{ width: 100, height: 100, backgroundColor: '#EAEAEA', marginTop: 15, marginStart: 15, borderRadius: 15 }} />
            <View style={{ margin: 15 }}>
                <View style={{ backgroundColor: '#EAEAEA', height: 20, width: 100, borderRadius: 5 }} />
                <View style={{ backgroundColor: '#EAEAEA', height: 20, width: 150, borderRadius: 5, marginTop: 10 }} />
            </View>
        </View>
    )
}

export default Ploder

const styles = StyleSheet.create({})