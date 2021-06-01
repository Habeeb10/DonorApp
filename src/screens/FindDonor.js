import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Header } from "../shared/Header";
import { Searchinput } from "../shared/Searchinput";
import * as Images from "../../assets/images";
import {
  Blood0pos,
  BloodAB,
  BloodApos,
  BloodBneg,
  Ellipse,
  Location,
  SearchIcon,
} from "../../assets/svg";
import { DonorCard } from "../shared/DonorCard";

const DonorList = [
  {
    icon: Images.Hassan,
    identity: "Yasin Hossain",
    icon2: <Location />,
    address: "Mohammedpur, Dhaka",
    bloodgroup: <BloodApos />,
  },
  {
    icon: Images.Sami,
    identity: "Mohammed Sami",
    icon2: <Location />,
    address: "Mirpur 10, Dhaka",
    bloodgroup: <BloodAB />,
  },
  {
    icon: Images.Rahim,
    identity: "Rahimun Islam",
    icon2: <Location />,
    address: "Chittagong",
    bloodgroup: <BloodBneg />,
  },
  {
    icon: Images.Rumana,
    identity: "Rumana",
    icon2: <Location />,
    address: "Lakshmipur",
    bloodgroup: <Blood0pos />,
  },
  {
    icon: Images.Ahmed,
    identity: "Jubayer Ahmed",
    icon2: <Location />,
    address: "Mohammedpur, Dhaka",
    bloodgroup: <BloodApos />,
  },
];

export default function FindDonor({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <Header title="Find Donor" headerStyle={styles.head} />
      <View style={styles.searchbox}>
        <Searchinput
          icon={SearchIcon}
          style={styles.search}
          placeholder="Search"
        />
        <View
          style={{
            backgroundColor: "#FF2156",
            width: 35,
            height: 35,
            marginTop: 20,
            borderRadius: 8,
            marginLeft: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ellipse />
        </View>
      </View>
      <ScrollView style={styles.base}>
        {DonorList.map((item, index) => {
          return (
            <DonorCard
              key={index}
              icon={item.icon}
              identity={item.identity}
              address={item.address}
              icon2={item.icon2}
              bloodgroup={item.bloodgroup}
              onPress={() => navigation.navigate("profile")}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    // backgroundColor: "#E5E5E5",
    // flexDirection: "row",
    // height: 100,
    // alignItems: "center",
    // justifyContent: "space-between",
    // paddingRight: 30,
  },
  searchbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  head: {
    marginRight: 140,
    fontSize: 17,
  },

  container: {
    flex: 1,
  },
});
