import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Signin from '../Screens/Signin';
import Register from '../Screens/Forgot';
import Forgot from '../Screens/Forgot';
import Home from '../Screens/Home';
import BottomTab from './BottomTab';
import Shop from '../Screens/Shop';
import Message from '../Screens/Message';
import Healthplan from '../Screens/Healthplan';
import Weekly from '../Screens/Weekly';
import Exercise from '../Screens/Exercise';
import Recipes from '../Screens/Recipes';
import Daily from '../Screens/Daily';
import Product from '../Screens/Product';
import Exer from '../Screens/Exer';
import Pilates from '../Screens/Pilates';
import Recipeidea from '../Screens/Recipeidea';
import Recipeidea1 from '../Screens/Recipeidea1';
import Weekspecial from '../Screens/Weekspecial';
import Recipevideo from '../Screens/Recipevideo';
import Profile from '../Screens/Profile';
import Detail from '../Screens/Detail';

import Heartrate from '../Metrics/Heartrate';

import Blood from '../Metrics/Blood';
import Weight from '../Metrics/Weight';
import Heartdata from '../Metrics/Heartdata';
import Blooddata from '../Metrics/Blooddata';
import Weightdata from '../Metrics/Weightdata';
import Food from '../Metrics/Food';
import Editprofile from '../Screens/Editprofile';




const Stack = createNativeStackNavigator();
const Stackk = () => {
    return (

        <Stack.Navigator>


            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
            <Stack.Screen name="Forgot" component={Forgot} options={{ headerShown: false }} />
            <Stack.Screen name="BottamTab" component={BottomTab} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Shop" component={Shop} options={{ headerShown: false }} />
            <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
            <Stack.Screen name="Heartrate" component={Heartrate} options={{ headerShown: false }} />
            <Stack.Screen name="Blood" component={Blood} options={{ headerShown: false }} />
            <Stack.Screen name="Weight" component={Weight} options={{ headerShown: false }} />
            <Stack.Screen name="Heartdata" component={Heartdata} options={{ headerShown: false }} />
            <Stack.Screen name="Blooddata" component={Blooddata} options={{ headerShown: false }} />
            <Stack.Screen name="Weightdata" component={Weightdata} options={{ headerShown: false }} />
            <Stack.Screen name="Food" component={Food} options={{ headerShown: false }} />
            <Stack.Screen name="Editprofile" component={Editprofile} options={{ headerShown: false }} />





        </Stack.Navigator>

    )
}

// const HOME = () => {
//     return (
//         <Stack.Navigator>

//             <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
//         </Stack.Navigator>
//     )
// }

// const Shop = () => {
//     return (
//         <Stack.Navigator>

//             <Stack.Screen name="Shop" component={Shop} options={{ headerShown: false }} />
//         </Stack.Navigator>
//     )
// }
// const Message = () => {
//     return (
//         <Stack.Navigator>

//             <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
//         </Stack.Navigator>
//     )
// }

export { Stackk }