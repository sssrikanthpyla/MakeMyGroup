import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import WelcomeScreen from '../screens/WelcomeScreen';
// import RegisterScreen from '../screens/RegisterScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen'
import ForgetPasswordScreen from '../screens/ForgetPasswordScree';
// import ForgetPasswordScreen from '../screens/ForgetPasswordScree';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="SignUp" screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="LogIn" component={LoginScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      {/* <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} /> */}
      {/* <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
    </Stack.Navigator>
  );
}
