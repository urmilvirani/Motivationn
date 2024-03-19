import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const Homeprofile = () => {
    return (
        <View>
            <View style={{ height: 70, width: '95%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginStart: 20 }}>
                    <View style={{ backgroundColor: 'lightgray', height: 20, width: 70, borderRadius: 5, marginTop: 20 }}></View>
                    <View style={{ backgroundColor: 'lightgray', height: 20, width: 150, borderRadius: 5, marginTop: 10 }}></View>
                </View>
                <View style={{ backgroundColor: 'lightgray', width: 54, height: 54, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}></View>


            </View>

            <FlatList
                data={[1, 1, 1, 1, 1, 1, 1, 1]}
                numColumns={2}
                renderItem={() => {
                    return (
                        <View style={{ height: 70, width: '50%', flexDirection: 'row', alignItems: 'center', marginStart: 10, marginTop: 20 }}>
                            <View style={{ backgroundColor: 'lightgray', width: 50, height: 50, borderRadius: 30 }}>

                            </View>
                            <View style={{ width: '100%', marginStart: 10 }}>
                                <View style={{ backgroundColor: 'lightgray', width: '45%', height: 20, borderRadius: 5, }}>

                                </View>
                                <View style={{ backgroundColor: 'lightgray', width: '55%', height: 20, borderRadius: 5, marginTop: 5 }}>

                                </View>
                            </View>

                        </View>
                    )
                }}
            />

            <View style={{ height: 30, width: '20%', backgroundColor: 'lightgray', marginStart: 15, borderRadius: 5, marginTop: 10 }}></View>
            <FlatList
                data={[1, 1, 1, 1]}
                numColumns={2}
                renderItem={() => {
                    return (
                        <View style={{ width: '50%', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ height: 80, width: '80%', alignItems: 'center', marginTop: 15, backgroundColor: 'lightgray', borderRadius: 10 }}></View>

                        </View>
                    )
                }}
            />
        </View>


    )
}

export default Homeprofile

const styles = StyleSheet.create({})