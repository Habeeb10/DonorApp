import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Logo } from "../assets/images";
import { Button } from "../shared/Button";
import OTPInputView from "@twotalltotems/react-native-otp-input"


export default function Verify({navigation}) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <OTPInputView
       style={{width:'70%', height:190, alignSelf:"center", marginTop:150}}
       pinCount={4}
 
/>
      <Text style={styles.code}>Resend Code 49 Sec</Text>
      <Button title="Verify" style={styles.but}  onPress={() => navigation.navigate("finish")}/>
    </View>
  );
}

const styles = StyleSheet.create({  
    code:{
        fontSize:16,
        fontWeight:"500",
        lineHeight:26,
        color:"#FF2156",
        marginLeft:260,
        marginBottom:10
    },  
  logo:{
        width:200,
        height:200,
        resizeMode:"contain",
        alignSelf:"center",
        marginTop:70
    },
  container: {
    flex: 1,


  },
  
});