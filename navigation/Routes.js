import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { isUserLoggedIn } from '../constants/userDetails';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

export default function Routes() {
  let user = isUserLoggedIn;

  // useEffect(() => {
  //     user = isUserLoggedIn;
  //     if(user){
  //       return (
  //         <AppStack />
  //       );
  //     }
  // }, []);
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
