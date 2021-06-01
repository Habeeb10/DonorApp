import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../shared/Header";
import { Help, Send, Slogo } from "../../assets/svg";

export default function Assistant({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.contbox1}>
        <Header title="Assistant" headerStyle={styles.header} />
        <View style={styles.logobox1}>
          <Help />
        </View>
      </View>
      <View style={styles.contbox2}>
        <View style={styles.logobox}>
          <Slogo />
        </View>
        <View style={styles.textbox}>
          <Text style={styles.fahim}>
            Good Morning, Fahim. Choose one of the following options to get
            started.
          </Text>
          <TouchableOpacity style={styles.donatebox}>
            <Text style={styles.donate}>Check donate instruction</Text>
          </TouchableOpacity>
          <View style={styles.donatebox}>
            <Text style={styles.donate}>Check donate instruction</Text>
          </View>
          <View style={styles.donatebox1}>
            <Text style={styles.donate}>Check donate instruction</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.instructionbox}>
        <Text style={styles.check}>Check donate instruction</Text>
      </TouchableOpacity>
      <View style={styles.greatbox}>
        <View style={styles.logobox2}>
          <Slogo />
        </View>
        <View>
          <View style={styles.greatcont1}>
            <Text>That’s great, Fahim.</Text>
          </View>
          <View style={styles.greatcont2}>
            <Text style={styles.group}>
              Can you tell me the group of your blood?
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.bloodgroupbox}>
        <Text style={styles.check}>AB+</Text>
      </TouchableOpacity>
      <View style={styles.sendboox}>
        <TextInput
          placeholder="Write a message"
          placeholderTextColor="#C9C9C9"
        />
        <Send onPress={() => navigation.navigate("request")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sendboox: {
    width: 344,
    height: 56,
    backgroundColor: "white",
    marginLeft: 25,
    marginTop: 20,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingHorizontal: 20,
  },
  bloodgroupbox: {
    width: 92,
    height: 56,
    backgroundColor: "#FF2156",
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 270,
    alignItems: "center",
    justifyContent: "center",
  },
  group: {
    width: 259,
    marginLeft: 50,
    lineHeight: 25,
    color: "#272A2F",
  },
  greatcont2: {
    width: 250,
    height: 55,
    backgroundColor: "#E5E5E5",
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 5,
  },
  greatcont1: {
    width: 150,
    height: 47,
    backgroundColor: "#E5E5E5",
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  greatbox: {
    flexDirection: "row",
    marginTop: 15,
  },
  check: {
    fontSize: 18,
    fontWeight: "500",
    color: "#F5F5F5",
  },
  instructionbox: {
    width: 281,
    height: 56,
    backgroundColor: "#FF2156",
    borderRadius: 10,
    marginTop: 33,
    marginLeft: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  donatebox1: {
    width: 260,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E9E9E9",
    height: 50,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  donatebox: {
    width: 260,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#E9E9E9",
    height: 50,
  },
  donate: {
    color: "#FF2156",
    fontWeight: "500",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
  },
  fahim: {
    color: "#272A2F",
    fontSize: 14,
    fontWeight: "500",
    width: 220,
    marginLeft: 25,
    marginTop: 5,
    lineHeight: 25,
    marginBottom: 10,
  },
  contbox2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contbox1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logobox1: {
    alignItems: "center",
    justifyContent: "center",
    height: 44,
    width: 44,
    borderRadius: 10,
    backgroundColor: "#FF2156",
    marginTop: 70,
    marginRight: 20,
  },
  logobox2: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: "#FF2156",
    marginLeft: 20,
    marginTop: 10,
  },
  logobox: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: "#FF2156",
    marginTop: 70,
    marginLeft: 20,
  },
  textbox: {
    width: 260,
    height: 230,
    backgroundColor: "#E5E5E5",
    marginTop: 20,
    marginRight: 50,
    borderRadius: 8,
  },
  header: {
    marginLeft: 80,
  },
  container: {
    flex: 1,
  },
});
