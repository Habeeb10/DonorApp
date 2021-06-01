import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Logo } from "../../assets/images";
import { Button } from "../shared/Button";
import { Fillinput } from "../shared/Fillinput";
import User, { Blood, Location, Lock, Message, Phone } from "../../assets/svg";

export default function Register({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <Image source={Logo} style={styles.logo} />
      <View style={styles.box}>
        <Text style={{ color: "#FF2156", marginTop: 20, fontSize: 30 }}>
          Dare
        </Text>
        <Text style={{ marginTop: 20, fontSize: 30, color: "#272A2F" }}>
          To
        </Text>
        <Text style={{ color: "#FF2156", marginTop: 20, fontSize: 30 }}>
          Donate
        </Text>
      </View>
      <Fillinput icon={<User />} placeholder="Fahim Ekan" />
      <Fillinput icon={<Message />} placeholder="Fahimekan28@gmail.com" />
      <Fillinput icon={<Lock />} placeholder="********" />
      <Fillinput icon={<Phone />} placeholder="+8801628162522" />
      <Fillinput icon={<Blood />} placeholder="O+" />
      <Fillinput icon={<Location />} placeholder="Chittagong, BD." />
      <Button title="REGISTER" style={styles.button} />
      <View style={styles.registerbox}>
        <Text style={styles.account}>Already have an account?</Text>
        <Text
          style={styles.register}
          onPress={() => navigation.navigate("register")}
          onPress={() => navigation.navigate("login")}
        >
          Log in.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  account: {
    fontSize: 18,
    fontWeight: "500",
    color: "#7E7E7E",
  },
  register: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FF2156",
  },
  registerbox: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 50,
  },
  button: {
    marginTop: 40,
    width: "90%",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 70,
  },
  container: {
    flex: 1,
  },
});
