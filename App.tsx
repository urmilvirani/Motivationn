import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Stackk } from './Navigation/Stackk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Signin from './Screens/Signin';




const App = () => {

  // useEffect(() => {

  //   const checkLoggedIn = async () => {
  //     try {

  //       const authToken = await AsyncStorage.getItem('authToken');
  //       console.log(authToken);

  //       if (authToken) {



  //         navigation.navigate('BottamTab');
  //       }
  //     } catch (error) {
  //       console.error('Error checking login status:', error);
  //     }
  //   };

  //   checkLoggedIn();
  // }, []);





  return (
    <NavigationContainer>
      <Stackk />
    </NavigationContainer>
  )
}

export default App