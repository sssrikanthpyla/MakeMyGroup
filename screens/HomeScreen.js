import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Pressable, Button, FlatList, SectionList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
    const renderItem = ({ item }) => {
        const backgroundColor = item === selectedId ? "#000000" : "#FCE4D7";
        const color = item === selectedId ? 'white' : 'red';
        return (
            <TouchableOpacity onPress={() => {
                console.log(item);
                navigation.navigate('Groupdetails', {data:item});
            }} style={styles.item}>
                <Text style={styles.title}>{item}</Text>
            </TouchableOpacity>
        );
    }

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={(item) => {
            if(item){
                navigation.navigate('Groupdetails', {item});
            }
        }} style={[styles.item, backgroundColor]}>
            <Text style={[styles.title, textColor]}>{item}</Text>
        </TouchableOpacity>
    );
    const [selectedId, setSelectedId] = useState(null);
    const [enginnering, setEnginnering] = useState(null);
    const [management, setManagement] = useState(null);
    const [medicine, setMedicine] = useState(null);

    const setValues = () => {
        axios({
            url: " http://18.117.122.86:5000/categories",
            method: "GET",
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            }
        }).then(res => {
            // console.log(res.data);
            setEnginnering(res.data.Enginnering);
            setManagement(res.data.Management);
            setMedicine(res.data.Medicine);
        }).catch(e => console.log(e));
    }

    // axios({
    //     url: " http://18.117.122.86:5000/getInstitutedetails",
    //     method: "GET",
    //     headers: {
    //         Accept: "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         "Content-Type": "application/json",
    //     }
    // }).then(res => {
    //     console.log(res.data);
    // }).catch(e => console.log(e));

    useEffect(() => {
        setValues();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#ED722E"
            // barStyle={statusBarStyle}
            // showHideTransition={statusBarTransition}
            // hidden={hidden} 
            />
            <View style={styles.logoContainer}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Notifications')}>
                    <Icon type="ionicon" name="notifications" size={20} color='white' />
                </TouchableOpacity>
                <View style={styles.logoArea}>
                    <Text style={styles.logoText} onPress={() => navigation.navigate('Home')}>Logo</Text>
                </View>
            </View>
            <View style={styles.dataView}>
                <Text style={styles.data}>Select a course you want to learn we will create or put you in a group so that you can avail group discount.</Text>
            </View>
            <Text style={styles.mode}>Mode Of Delivery</Text>
            <View style={styles.bothView}>
                <Text style={styles.bothText}>Both</Text>
            </View>
            <View style={styles.offlineView}>
                <Text style={styles.offlineText}>Offline</Text>
            </View>
            <View style={styles.onlineView}>
                <Text style={styles.onlineText}>Online</Text>
            </View>
            <View>
                <Text style={styles.engineeringText}>Engineering</Text>
            </View>
            <FlatList
                horizontal
                style={styles.enggFlatList}
                // showsHorizontalScrollIndicator={false}
                data={enginnering}
                renderItem={renderItem}
                // keyExtractor={item => item}
                // extraData={selectedId}
            />
            <View style={styles.managementText}>
                <Text>Management</Text>
            </View>
            <FlatList
                horizontal
                style={styles.manageFlatList}
                // showsHorizontalScrollIndicator={false}
                data={management}
                renderItem={renderItem}
                keyExtractor={item => item}
                extraData={selectedId}
            />
            <View style={styles.medicineText}>
                <Text>Medicine</Text>
            </View>
            <FlatList
                horizontal
                style={styles.MedicineFlatList}
                // showsHorizontalScrollIndicator={false}
                data={medicine}
                renderItem={renderItem}
                keyExtractor={item => item}
                extraData={selectedId}
            />
        </SafeAreaView >
    )
}

// const enginnering = ["Java", "Python", "Data scince", "C++", "Java1", "Python1", "Data scince1", "C++1", "java2"];

const styles = StyleSheet.create({
    container: {
        width: 414,
        // height: 896
    },
    icon: {
        position: 'absolute',
        right: 40,
        top: 13,
    },
    logoContainer: {
        position: 'absolute',
        width: 414,
        height: 43,
        left: 0,
        top: 0,
        backgroundColor: '#ED722E'
    },
    logoArea: {
        position: 'absolute',
        width: 145.77,
        height: 42,
        left: 109,
        top: 0,
        backgroundColor: '#C4C4C4'
    },
    logoText: {
        position: 'absolute',
        width: 35.3,
        height: 21.6,
        left: 54,
        top: 8.4,
        color: '#000000'
    },
    dataView: {
        position: 'absolute',
        width: 414,
        height: 100,
        left: 0,
        top: 74,
        backgroundColor: 'rgba(196, 196, 196, 0.13)',
    },
    data: {
        position: 'absolute',
        width: 344,
        height: 60,
        left: 38,
        top: 20,
        color: 'rgba(45,55,72,0.84)'
    },
    mode: {
        position: 'absolute',
        width: 121,
        height: 181,
        left: 30,
        top: 226,
        color: '#000000'
    },
    bothView: {
        position: 'absolute',
        width: 71,
        height: 35,
        left: 165,
        top: 217,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.34)'
    },
    bothText: {
        position: 'absolute',
        width: 42.77,
        height: 16,
        left: 14.5,
        top: 10,
        color: 'rgba(0,0,0,0.48)',
    },
    offlineView: {
        position: 'absolute',
        width: 82.91,
        height: 35,
        left: 233.11,
        top: 217,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.34)'
    },
    offlineText: {
        position: 'absolute',
        width: 50.3,
        height: 16,
        left: 15,
        top: 10,
        color: 'rgba(0,0,0,0.48)',
    },
    onlineView: {
        position: 'absolute',
        width: 83,
        height: 35,
        left: 315,
        top: 217,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.34)'
    },
    onlineText: {
        position: 'absolute',
        width: 50,
        height: 16,
        left: 17,
        top: 10,
        color: 'rgba(0,0,0,0.48)',
    },
    engineeringText: {
        position: 'absolute',
        width: 88,
        height: 19,
        left: 33,
        top: 292,
        fontSize: 15,
        color: '#000000'
    },
    title: {
        left: 0,
        top: 30,
        fontSize: 32,
        fontSize: 16,
        textAlign: 'center',
        // display: 'flex',
        alignItems: 'flex-end',
        letterSpacing: -0.02
    },
    item: {
        width: 140,
        height: 90,
        margin: 10,
        borderRadius: 15
    },
    enggFlatList: {
        top: 307,
        width: 414,
        left: 30,
        borderRadius: 15

    },
    managementText: {
        left: 33,
        top: 317,
    },
    manageFlatList: {
        top: 315,
        left: 30,
        borderRadius: 15

    },
    medicineText: {
        left: 33,
        top: 322,

    },
    MedicineFlatList: {
        top: 324,
        left: 30,
        borderRadius: 15

    },

});