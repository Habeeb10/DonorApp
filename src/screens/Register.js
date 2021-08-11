import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Logo } from "../../assets/images";
import { Button } from "../shared/Button";
import { Fillinput } from "../shared/Fillinput";
import User, { Blood, Location, Lock, Message, Phone } from "../../assets/svg";

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonumber] = useState("");
  const [location, setLocation] = useState("");
  const [bloodgroup, setBloodgroup] = useState("");
  const handleRegister = () => {
    if (
      !email ||
      !username ||
      !password ||
      !phonenumber ||
      !location ||
      !bloodgroup
    ) {
      return Alert.alert("Warning", "Fill in your details");
    } else navigation.navigate("login");
  };
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
      <Fillinput
        icon={<User />}
        placeholder="Fahim Ekan"
        value={username}
        onchange={setUsername}
      />
      <Fillinput
        icon={<Message />}
        placeholder="Fahimekan28@gmail.com"
        value={email}
        onchange={setEmail}
      />
      <Fillinput
        icon={<Lock />}
        placeholder="******"
        value={password}
        onchange={setPassword}
      />
      <Fillinput
        icon={<Phone />}
        placeholder="+8801628162522"
        value={phonenumber}
        onchange={setPhonumber}
      />
      <Fillinput
        icon={<Blood />}
        placeholder="O+"
        value={bloodgroup}
        onchange={setBloodgroup}
      />
      <Fillinput
        icon={<Location />}
        placeholder="Chittagong, BD."
        value={location}
        onchange={setLocation}
      />
      <Button title="REGISTER" style={styles.button} onPress={handleRegister} />
      <View style={styles.registerbox}>
        <Text style={styles.account}>Already have an account?</Text>
        <Text
          style={styles.register}
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
