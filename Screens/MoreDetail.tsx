import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'


const MoreDetail = ({ route }) => {

    console.log(route?.params?.data.thumbnail_image);


    return (
        <View style={{ flex: 1 }}>
            <WebView source={{ uri: route?.params?.data.media }} />


        </View>
    )
}

export default MoreDetail

const styles = StyleSheet.create({})