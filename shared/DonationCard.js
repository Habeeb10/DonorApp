import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { color } from "react-native-reanimated";

export const DonationCard =({ icon, location, title, fullname, place,time, donate}) => {
    return(
        <View style={styles.normal}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.full}>{fullname}</Text>
                <Text style={styles.location}>{location}</Text>
                <Text style={styles.place}>{place}</Text>
                </View>
                <View style={{marginTop:10}}>{icon}</View>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={styles.time}>{time}</Text>
                <Text style={styles.donate}>{donate}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    donate:{
        color:"#FF2156",
        fontSize:14,
        fontWeight:"500"
    },
    title:{
        marginTop:10,
        color:"#7E7E7E"
    },
    time:{
        marginBottom:20,
        color:"#7E7E7E"
    },
    location:{
        color:"#7E7E7E"
    },
    place:{
        color:"#272A2F",
        fontWeight:"500",
        fontSize:16  
    },
    full:{
        marginBottom:10,
        color:"#272A2F",
        fontWeight:"500",
        fontSize:16
    },
    
    normal:{
        height:130,
        width:"100%",
        backgroundColor:"white",
        borderRadius:10,
        justifyContent:"space-between",
        // alignItems:"center",
        marginTop:20,
        // flexDirection:"row"
        paddingHorizontal:20,
        // marginTop:40
    



},
})