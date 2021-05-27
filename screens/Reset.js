import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Logo } from "../assets/images";
import { Button } from "../shared/Button";
import { Fillinput } from "../shared/Fillinput";
import { Lock, Message } from "../assets/svg";


export default function Reset({navigation}) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <View style={{marginTop:200}}>
      <Fillinput icon={<Message/>} placeholder="Fahimekan28@gmail.com"/>
        <Text style={styles.password}>Your password reset will be send in your registered email address.</Text>
        <Button title="Send" style={styles.button} onPress={() => navigation.navigate("verify")}/>
      </View>
        
        
        
        
    </View>
  );
}

const styles = StyleSheet.create({
    password:{
        fontSize:20,
        fontWeight:"500",
        width:300,
        textAlign:"center",
        marginTop:80,
        color:"#7E7E7E",
        alignSelf:"center"
    },
  button:{
    marginTop:30, 
    width:"90%"
  },
  container: {
    flex: 1,


  },
  
});