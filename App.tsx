import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Stackk } from './Navigation/Stackk';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {




  return (
    <NavigationContainer>
      <Stackk />
    </NavigationContainer>
  )
}

export default App