import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SearchIcon, Uparrow } from "../assets/svg";

export const Searchinput = ({ placeholder, icon, style}) => {
  return (
    <View style={styles.container}>
       <View>{icon =<SearchIcon/>}</View>
     
      <TextInput style={styles.textInput} placeholder={placeholder} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    // marginHorizontal:14,
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#F8F8F8",
    alignSelf:'center',
    paddingHorizontal:20,
    width:'60%',
    marginTop:20,
    // marginLeft:20,
    borderRadius:10,
    height:50
  },
  textInput:{
    marginLeft:10,
    fontSize:20
  },
});
