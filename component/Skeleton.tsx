import React from 'react';
import { View, Text, FlatList } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LoadingSkeleton = () => {
    return (


        <FlatList
            data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
            renderItem={() => {
                return (
                    <View style={{ height: 70, width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '#EAEAEA', width: 30, height: 30, borderRadius: 30 }}>

                        </View>
                        <View style={{ backgroundColor: '#EAEAEA', width: '70%', height: 30, borderRadius: 15, marginStart: 20 }}>

                        </View>

                    </View>
                )
            }}
        />


    );
};

export default LoadingSkeleton