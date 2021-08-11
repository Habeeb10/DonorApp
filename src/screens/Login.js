import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { Logo } from "../../assets/images";
import { Button } from "../shared/Button";
import { Fillinput } from "../shared/Fillinput";
import { Lock, Message } from "../../assets/svg";
import { LoginStyles as styles } from "./Styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (!email || !password) {
      return Alert.alert("Warning", "Enter your details");
    } else navigation.navigate("home");
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
        icon={<Message />}
        placeholder="Fahimekan28@gmail.com"
        value={email}
        onchange={setEmail}
      />
      <Fillinput
        icon={<Lock />}
        placeholder="Fahimekan28@gmail.com"
        value={password}
        onchange={setPassword}
      />
      <Button title="LOG IN" style={styles.button} onPress={handleLogin} />
      <Text
        style={styles.password}
        onPress={() => navigation.navigate("reset")}
      >
        Forgot Password?
      </Text>
      <View style={styles.registerbox}>
        <Text style={styles.account}>Don’t have an account?</Text>
        <Text
          style={styles.register}
          onPress={() => navigation.navigate("register")}
        >
          Register Now.
        </Text>
      </View>
    </View>
  );
}
