import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Header } from "../shared/Header";
import {Searchinput} from "../shared/Searchinput";
import { SearchIcon, Uparrow } from "../assets/svg";
import { SearchCard } from "../shared/SearchCard";


const SearchList = [
    {
        group: "A+",
    },
    {
        group: "A-",
    },
    {
        group: "B+",
    },
    {
        group: "B-",
    },
    {
        group: "0+",
    },
    {
        group: "AB+",
    },
    {
        group: "AB-",
    },
    
    
];

export default function Search() {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
     <Header title="Search"  headerStyle={styles.head}/>
     <Searchinput icon={SearchIcon} style={styles.search} placeholder="Search" />
     <TextInput placeholder="Filters" style={styles.filters} />
     <View style={styles.cont}> 
     <Uparrow/>    
     <TextInput placeholder="Blood Type" style={styles.filters}/>
     </View>
     
     <View style={styles.box}>
     {SearchList.map((item, index) => {
                return(
                    <SearchCard
                    key={index}
                    group={item.group}
                    />
                )
            
                })} 
     </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
    head:{
        marginRight:180
    },
    filters:{
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderWidth:1,
        borderColor:"#EDEDED",
    },
    cont:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:1,
        borderTopWidth:1,
        borderColor:"#EDEDED",
    },
    box:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between",
        paddingHorizontal:25,
        marginTop:20
    }, 
    but:{
        marginTop:20
    },
    success:{
        width:230,
        height:230,
        resizeMode:"contain",
        alignSelf:"center",
        marginTop:100
    },
    code:{
        fontSize:16,
        fontWeight:"500",
        lineHeight:26,
        color:"#FF2156",
        marginLeft:260,
        marginBottom:10
    },  
  container: {
    flex: 1,


  },
  
});