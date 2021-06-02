import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Blood,
  Hospital,
  Location,
  Note,
  Phone,
  Rightarrow,
} from "../../assets/svg";
import { Button } from "../shared/Button";
import { Header } from "../shared/Header";
import { RequestInput } from "../shared/RequestInput";
import { Pana } from "../../assets/images";

export default function Request({ navigation }) {
  const [modalState, setModalState] = useState(false);
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.contbox}>
        <Header title="Create A Request" headerStyle={styles.header} />
      </View>
      <RequestInput icon={<Location />} placeholder="City" />
      <RequestInput icon={<Hospital />} placeholder="Hospital" />
      <RequestInput icon={<Blood />} placeholder="Blood Type" />
      <RequestInput icon={<Phone />} placeholder="Mobile" />
      <RequestInput icon={<Note />} placeholder="Add a note" />
      <Button
        title="Request"
        style={styles.button}
        onPress={() => setModalState(true)}
        // onPress={() => navigation.navigate("finddonor")}
      />
      {modalState && (
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Image resizeMode="contain" source={Pana} style={styles.pana} />
            <Text style={styles.successfully}>
              Blood is successfully requested.
            </Text>
            <TouchableOpacity
              style={styles.bot}
              onPress={() => setModalState(false)}
            >
              <Rightarrow />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: "#E0E6ED",
    width: "10%",
    height: 5,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 3,
  },
  successfully: {
    fontSize: 18,
    fontWeight: "500",
    color: "#263238",
    marginTop: 40,
    width: 200,
    textAlign: "center",
    alignSelf: "center",
  },
  pana: {
    marginTop: 50,
    width: 240,
    height: 210,
    alignSelf: "center",
  },
  bot: {
    borderRadius: 20,
    height: 40,
    width: 40,
    backgroundColor: "#FF2156",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  modalBox: {
    position: "absolute",
    top: 201,
    backgroundColor: "white",
    height: 495,
    width: 374,
    borderRadius: 20,
    alignItems: "center",
  },
  modalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "#414141",
  },
  button: {
    marginTop: 130,
    width: 170,
    height: 44,
    borderRadius: 8,
  },
  contbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "orange",
    marginBottom: 60,
  },
  header: {
    marginLeft: 60,
    fontSize: 20,
  },
  container: {
    flex: 1,
    // paddingTop: 20,
  },
});
