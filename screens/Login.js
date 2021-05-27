import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Logo } from "../assets/images";
import { Button } from "../shared/Button";
import { Fillinput } from "../shared/Fillinput";
import { Lock, Message } from "../assets/svg";


export default function Login({navigation}) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <Image source={Logo}
        style={styles.logo}/>
        <View style={styles.box}>
          <Text style={{color:"#FF2156", marginTop:20, fontSize:30 }}>Dare</Text>
          <Text style={{marginTop:20, fontSize:30, color:"#272A2F"}}>To</Text>
          <Text style={{color:"#FF2156", marginTop:20, fontSize:30 }}>Donate</Text> 
        </View>
        <Fillinput icon={<Message/>} placeholder="Fahimekan28@gmail.com"/>
        <Fillinput icon={<Lock/>} placeholder="Fahimekan28@gmail.com"  />
        <Button title="LOG IN" style={styles.button} onPress={() => navigation.navigate("home")}/>
        <Text style={styles.password} onPress={() => navigation.navigate("reset")}>Forgot Password?</Text>
        <View style={styles.registerbox}>
            <Text style={styles.account}>Don’t have an account?</Text>
            <Text style={styles.register} onPress={() => navigation.navigate("register")}>Register Now.</Text>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
    account:{
        fontSize:18,
        fontWeight:"500",
        color:"#7E7E7E",
        
    },
    register:{
        fontSize:18,
        fontWeight:"500",
        color:"#FF2156",
    },  
    registerbox:{
        flexDirection:"row",
        marginTop:70,
        paddingHorizontal:80,
        
    },
    password:{
        marginTop:30,
        textAlign:"center",
        color:"#FF2156",
        fontSize:18,
        fontWeight:"400"
    },
  button:{
    marginTop:80, 
    width:"90%"
  },
  box:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'center',
    marginLeft:20,
    marginBottom:60,
  },
  logo:{
        width:150,
        height:150,
        resizeMode:"contain",
        alignSelf:"center",
        marginTop:70
    },
  container: {
    flex: 1,


  },
  
});