import React from 'react';
import { StyleSheet, Button, TouchableOpacity, StatusBar, Text, View,SafeAreaView, Dimensions } from 'react-native';
// import useStatusBar from '../hooks/useStatusBar';
import { isUserLoggedIn } from '../constants/userDetails';
// import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { Divider, Input } from 'react-native-elements';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
export default function LoginScreen({ navigation }) {
    // useStatusBar('dark-content');
// alert(window['width']*4.37/100);
    return (
        <SafeAreaView style={styles.container} >
            {/* <StatusBar
                animated={true}
                backgroundColor="#ED722E"
                // barStyle={statusBarStyle}
                // showHideTransition={statusBarTransition}
                // hidden={hidden}
                 /> */}
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.logInText}>Log In</Text>
            <View style={styles.logInContent}>
            <Text style={styles.email}>Email</Text>
            <View style={styles.emailplaceholder}>
            <Input
                placeholder = "Enter email"
            />
            </View>
            <Text style={styles.password}>Password</Text>
            <View style={styles.passwordplaceholder}>
            <Input
                placeholder = "Enter email"
            />
            </View>
            <View style={styles.button}>
            <Button
                onPress={validation}
                title="Log In"
                color="#ED722E"
                // accessibilityLabel="Learn more about this purple button"
                />
            </View>
            </View>
        </SafeAreaView>
    );
}

function validation(){
    if(isUserLoggedIn){
        navigation.navigate('Home');
    }
}

const styles = StyleSheet.create({
    container: {
        width: screen['width'],
        height: screen['height'],
        left: 0,
        // top: window['height']*13.16/100,
        backgroundColor: '#ED722E'
    },
    common: {

    },
    welcome: {
        position: 'absolute',
        // width: window['width']*(19.32/100),
        // height: window['height']*2.455/100,
        // left: window['width']*9.66/100,
        left: window['width']*50/100-88/2 - 123,
        top: window['height']*14.28/100,
        // font-family: Inter;
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 22,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    logInText: {
        position: 'absolute',
        // width: window['width']*21.25/100,
        // height: window['height']*5.5/100,
        left: window['width']*50/100-88/2 - 123,
        top: window['height']*18.41/100,
        // font-family: Inter;
        fontStyle: 'normal',
        fontWeight: "600",
        fontSize: 30,
        lineHeight: 36,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    logInContent: {
        position: 'absolute',
        width: window['width'],
        height: window['height']*59.15/100,
        left: 0,
        top: window['height']*31.80/100,
        backgroundColor: '#FFFFFF',
        // borderRadius: 50,
        borderTopEndRadius: 50,
        borderTopStartRadius: 50
    },
    email:{
        position: 'absolute',
        width: 53,
        height: 24,
        left: window['width']*9.17/100,
        top: window['height']*7.9/100,
        // font-family: Inter;
        fontStyle: 'normal',
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        color: '#000000',
        alignItems:'flex-end',
        display:'flex'

    },
    emailplaceholder:{
        // position: 'absolute',
        // width: window['width'],
        height: window['height']*5.5/100,
        left: window['width']*8/100,
        top: window['height']*13.16/100,
        // font-family: Inter;
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        // textAlign: 'center',
        color: '#FFFFFF',
        // backgroundColor:'#FFFFFF',
        // alignItems:'flex-end',
        display:'flex'

    },
    password:{
        position: 'absolute',
        // width: window['width']*21.25/100,
        height: window['height']*2.75/100,
        left: window['width']*9.17/100,
        top: window['height']*21.42/100,
        // font-family: Inter;
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#000000',
        alignItems:'flex-end',
        display:'flex'
    },
    passwordplaceholder:{
        // position: 'absolute',
        // width: window['width'],
        height: window['height']*5.5/100,
        left: window['width']*8/100,
        top: window['height']*21.16/100,
        // font-family: Inter;
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        // textAlign: 'center',
        color: '#FFFFFF',
        // backgroundColor:'#FFFFFF',
        // alignItems:'flex-end',
        display:'flex'

    },
    line:{
        borderColor:'blue',
        position:'absolute',
        top:window['height']*30 /100
    },
    button: {
        position: 'absolute',
        width: window['width']*83.57/100,
        height: 50,
        left: window['width']*8/100,
        top: window['height']*41.4/100,
        borderRadius: 5
    } 

});