import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";

export const HomeCard =({ icon, title, onpress}) => {
    return(
        <TouchableOpacity style={styles.click} onpress={onpress}>
            {icon}
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    title:{
        marginTop:10
    },
    click:{
        height:120,
        width:"30%",
        backgroundColor:"white",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
    



},
})