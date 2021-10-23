import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import axios from 'axios';

export default function GroupDetails({ route, navigation }) {
    const { data } = route.params;
    const [instituteDetails, setInstituteDetails] = useState(null);
    const currentDetails = [];

    if (instituteDetails) {
        for (let x of instituteDetails) {
            if(x['CourseName']===data){
                currentDetails.push(x);
            }
        }
    }

    if(currentDetails){
        console.log('currentDetails');
        console.log(currentDetails);
    }

    function getInstitutedetails() {
        axios({
            url: " http://18.117.122.86:5000/getInstitutedetails",
            method: "GET",
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            }
        }).then(res => {
            setInstituteDetails(res.data);
        }).catch(e => console.log(e));
    }
    useEffect(() => {
        getInstitutedetails();
    }, []);

    return (
        <View>
            <Text>Welcome to {data}</Text>
        </View>
    )
}