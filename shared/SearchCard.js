import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";

export const SearchCard =({ group, onpress}) => {
    return(
        <TouchableOpacity style={styles.click} onpress={onpress}>
            <Text style={styles.group}>{group}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    group:{
        // marginTop:10
    },
    click:{
        height:40,
        width:65,
        backgroundColor:"#F6F6F6",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        // marginTop:20
        paddingHorizontal:20,
        marginTop:20
        
    



},
})