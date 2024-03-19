import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Leftarrow } from '../assets/svg'
import { Book, Image1, Youtube1, Pdf1, Video } from '../component/Healthy'
import webservices from '../Navigation/webservices'
import LoadingSkeleton from '../component/Skeleton'


const Detail = ({ route, navigation }) => {
    const [detailList, setDetailList] = useState('')
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        video()
    }, [])

    const data = new FormData()
    data.append('category_id', route?.params?.item.category_id)

    const video = async () => {
        try {
            setLoading(true)
            const Data = await webservices('category/get_items', 'POST', data)
            console.log(Data.data.list);
            setDetailList(Data?.data?.list)
        }
        catch (error) {
            console.log(error);

        }
        finally {
            setLoading(false)
        }
    }


    return (

        <SafeAreaView style={{ height: '100%', backgroundColor: 'white' }}>


            <View style={styles.purple}>


                <TouchableOpacity
                    style={{ flexDirection: 'row', marginStart: 10 }}
                    onPress={() => navigation.pop()}>
                    <Leftarrow />
                </TouchableOpacity>


                <Text style={{ color: "white", fontFamily: 'Mulish-ExtraBold', fontSize: 18 }}>{route?.params?.item.category_name}</Text>
                <View style={{ width: '10%' }}>

                </View>
            </View>
            {loading ? <LoadingSkeleton /> :
                (<View>
                    {
                        detailList.length > 0 && <FlatList
                            data={detailList}
                            renderItem={({ item }) => <DetailComponent item={item} navigation={navigation} />}
                        />
                    }
                </View>
                )}
        </SafeAreaView>

    )
}

const DetailComponent = ({ item, navigation }: any) => {


    if (item.media_type_term == "youtube") {
        return < Youtube1 data={item} navigation={navigation} />
    }
    if (item.media_type_term == "core") {
        return <Book />
    }
    if (item.media_type_term == 'image') {
        return <Image1 />
    }
    if (item.media_type_term == 'pdf') {
        return <Pdf1 data={item} navigation={navigation} />
    }
    if (item.media_type_term == 'video') {
        return <Video />
    }




    // return <Text style={{ color: "black", marginTop: 20 }}>{item.media_type_term}</Text>



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

