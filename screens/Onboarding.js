import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Logo } from "../assets/images";
import { Button } from "../shared/Button";
import { pink } from "../common/colors";


export default function Onboarding({navigation}) {
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
        <Text style={styles.need}>You can donate for ones in need and request blood if you need.</Text>
      <Button title="LOG IN" style={styles.button} titleStyle={styles.login} onPress={() => navigation.navigate("login")}/>
      <Button title="REGISTER" style={styles.but}  onPress={() => navigation.navigate("register")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  login:{
    color:pink
  },
  but:{
    marginTop:20,   
  },
  button:{
    marginTop:20,
    backgroundColor:"#ffffff",
    borderWidth:1,
    borderColor:"#FF2156",
  },
  box:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'center',
    marginLeft:20
  
  },
  need:{
    fontSize:20,
    fontWeight:"500",
    width:300,
    textAlign:"center",
    marginTop:60,
    color:"#7E7E7E",
    alignSelf:"center",
    marginBottom:20,
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