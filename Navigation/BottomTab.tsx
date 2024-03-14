import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { HOME, Message, Shop } from './Stackk';
import { Homee } from '../assets/svg';
import { Shopi } from '../assets/svg';
import { Messagee } from '../assets/svg';
import Shop from '../Screens/Shop';
import Message from '../Screens/Message';
import Home from '../Screens/Home';
import { Home1 } from '../assets/svg';
import { Home2 } from '../assets/svg';
import { Shop1 } from '../assets/svg';
import { Shop2 } from '../assets/svg';
import { Message1 } from '../assets/svg';
import { Message2 } from '../assets/svg';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Tab = createBottomTabNavigator();
const BottomTab = () => {




    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',

            tabBarStyle: { backgroundColor: 'rgba(112, 43, 146, 1)', borderRadius: 30, height: 70, },


        }}>
            <Tab.Screen name="HOME" component={Home} options={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ color, size, focused }) => (focused ? <Home1 /> : <Home2 />),




            }}

            />
            <Tab.Screen name="Shop" component={Shop} options={{

                tabBarIcon: ({ color, size, focused }) => (focused ? <Shop1 /> : <Shop2 />)
            }}
            />
            <Tab.Screen name="Message" component={Message} options={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({ color, size, focused }) => (focused ? <Message2 /> : <Message1 />)
            }}
            />


        </Tab.Navigator>


    )
}

export default BottomTab
