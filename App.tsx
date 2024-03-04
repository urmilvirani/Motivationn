import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Stackk } from './Navigation/Stackk';

const App = () => {
  return (
    <NavigationContainer>
      <Stackk />
    </NavigationContainer>
  )
}

export default App