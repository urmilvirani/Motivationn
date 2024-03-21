import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Stackk } from './Navigation/Stackk';

import { LogBox } from 'react-native';



const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <NavigationContainer>
      <Stackk />
    </NavigationContainer>
  )
}

export default App