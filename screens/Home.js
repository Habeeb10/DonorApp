import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../shared/Button";
import { Together } from "../assets/images";
import { Apps, Assistant, BloodGroup, Campaign, Donates, FindDonor, Notification, OrderBlood, Report } from "../assets/svg";
import { HomeCard } from "../shared/HomeCard";
import { HomeCard2 } from "../shared/DonationCard";

const HomeList = [
    {
        icon: <FindDonor />,
        title: "Find Donors",
       
    },
    {
        icon: <Donates />,
        title: "Donates",
    },
    {
        icon: <OrderBlood />,
        title: "Order Bloods",
    },
    {
        icon: <Assistant />,
        title: "Assistant",
    },
    {
        icon: <Report />,
        title: "Report",
    },
    {
        icon: <Campaign />,
        title: "Campaign",
    },
    
];

export default function Home({navigation}) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.iconbox}>
          <Apps/>
          <Notification/>
      </View>
      <Image source={Together}
        style={styles.success}/>
        <View style={styles.box}>
            {HomeList.map((item, index) => {
                return(
                    <HomeCard 
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    />
                )
            
                })} 
        </View>
        <Text style={styles.request}>Donation Request</Text>
        <View>
       
        </View>
          
    </View>
  );
}

const styles = StyleSheet.create({ 
    request:{
        fontWeight:"500",
        fontSize:18,
        lineHeight:26,
        color:"#272A2F",
        marginTop:20,
        marginLeft:30,
        
    },
    box:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between",
        paddingHorizontal:25,
    

    
    }, 
    iconbox:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:60,
        paddingHorizontal:30
    },
    success:{
        width:300,
        height:250,
        resizeMode:"contain",
        alignSelf:"center",
    },  
  container: {
    flex: 1,


  },
  
});