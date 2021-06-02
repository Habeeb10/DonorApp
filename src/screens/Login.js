import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import { Logo } from "../../assets/images";
import { Button } from "../shared/Button";
import { Fillinput } from "../shared/Fillinput";
import { Lock, Message } from "../../assets/svg";
import { LoginStyles as styles } from "./Styles";

export default function Login({ navigation }) {
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
      <Fillinput icon={<Message />} placeholder="Fahimekan28@gmail.com" />
      <Fillinput icon={<Lock />} placeholder="Fahimekan28@gmail.com" />
      <Button
        title="LOG IN"
        style={styles.button}
        onPress={() => navigation.navigate("home")}
      />
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
