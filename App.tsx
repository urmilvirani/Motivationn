import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Stackk } from './Navigation/Stackk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Signin from './Screens/Signin';
import BottomTab from './Navigation/BottomTab';
import Splash from './Screens/Splash';




const App = () => {

  return (
    <NavigationContainer>
      <Stackk />
    </NavigationContainer>
  )
}

export default App