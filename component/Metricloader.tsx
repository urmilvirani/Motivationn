import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const Metricloader = () => {
    return (
        <FlatList
            data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
            renderItem={() => {
                return (
                    <View style={{ marginTop: 20, flexDirection: "row", width: '90%', justifyContent: "space-between", alignItems: "center", marginStart: 15 }}>
                        <View>
                            <View style={{ backgroundColor: '#EAEAEA', width: 100, height: 30, borderRadius: 10 }} />


                            <View style={{ backgroundColor: '#EAEAEA', width: 120, height: 30, borderRadius: 10, marginTop: 10 }} />
                            <View style={{ backgroundColor: '#EAEAEA', width: 120, height: 30, borderRadius: 10, marginTop: 5 }} />
                        </View>
                        <View style={{ backgroundColor: '#EAEAEA', width: 100, height: 30, borderRadius: 10 }} />




                    </View>
                )
            }}
        />
    )
}

export default Metricloader

const styles = StyleSheet.create({})