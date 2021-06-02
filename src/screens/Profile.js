import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View, Image, Switch } from "react-native";
import { Header } from "../shared/Header";
import {
  Call,
  Diary,
  Event,
  Get,
  Invite,
  Location,
  Request,
  Signout,
} from "../../assets/svg";
import { Fahim } from "../../assets/images";
import { ProfileCard } from "../shared/ProfileCard";
import { ProfileStyles as styles } from "./Styles";

const ProfileList = [
  {
    icon: <Event />,
    title: "Available for donate",
    toggle: <Switch />,
  },
  {
    icon: <Invite />,
    title: "Invite a friend",
  },
  {
    icon: <Get />,
    title: "Get help",
  },
  {
    icon: <Signout />,
    title: "Sign out",
  },
];

export default function Profile({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.contbox1}>
        <Header title="Profile" headerStyle={styles.header} />
        <Diary style={{ marginTop: 70, marginRight: 20 }} />
      </View>
      <Image resizeMode="contain" source={Fahim} style={styles.fahimekan} />
      <Text style={styles.fahim}>Fahim Ekan</Text>
      <View style={styles.locationbox}>
        <Location />
        <Text style={styles.bangladesh}>Chittagong, Bangladesh</Text>
      </View>
      <View style={styles.deskbox}>
        <TouchableOpacity style={styles.callbox}>
          <Call />
          <Text style={styles.text}>Call Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.requestbox}>
          <Request />
          <Text style={styles.text}>Request</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <View style={styles.groupbox}>
          <Text style={styles.group}>A+</Text>
          <Text style={styles.blood}>Blood Type</Text>
        </View>
        <View style={styles.groupbox}>
          <Text style={styles.group}>05</Text>
          <Text style={styles.blood}>Donated</Text>
        </View>
        <View style={styles.groupbox}>
          <Text style={styles.group}>02</Text>
          <Text style={styles.blood}>Requested</Text>
        </View>
      </View>
      <View>
        {ProfileList.map((item, index) => {
          return (
            <ProfileCard
              key={index}
              icon={item.icon}
              title={item.title}
              toggle={item.toggle}
            />
          );
        })}
      </View>
    </View>
  );
}
