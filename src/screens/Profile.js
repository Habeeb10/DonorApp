import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Switch,
} from "react-native";
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

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
  },
  blood: {
    fontSize: 10,
    color: "#7C7C7C",
    fontWeight: "500",
    lineHeight: 26,
  },
  group: {
    fontSize: 30,
    color: "#272A2F",
  },
  groupbox: {
    width: 102,
    height: 102,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginTop: 35,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  text: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFFFFF",
    marginLeft: 10,
  },
  requestbox: {
    flexDirection: "row",
    width: 158,
    height: 45,
    backgroundColor: "#FF2156",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  callbox: {
    flexDirection: "row",
    width: 158,
    height: 45,
    backgroundColor: "#689593",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  deskbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 31,
    paddingHorizontal: 25,
  },
  bangladesh: {
    color: "#7C7C7C",
    fontSize: 12,
    fontWeight: "400",
  },
  locationbox: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
    alignItems: "center",
  },
  fahim: {
    color: "#272A2F",
    fontWeight: "500",
    fontSize: 30,
    textAlign: "center",
    marginTop: 25,
  },
  fahimekan: {
    width: 89,
    height: 89,
    alignSelf: "center",
    marginTop: 15,
  },
  contbox1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    marginLeft: 110,
  },
  container: {
    flex: 1,
  },
});
