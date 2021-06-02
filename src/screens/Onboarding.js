import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import { Logo } from "../../assets/images";
import { Button } from "../shared/Button";
import { pink } from "../common/colors";
import { OnboardingStyles as styles } from "./Styles";

export default function Onboarding({ navigation }) {
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
      <Text style={styles.need}>
        You can donate for ones in need and request blood if you need.
      </Text>
      <Button
        title="LOG IN"
        style={styles.button}
        titleStyle={styles.login}
        onPress={() => navigation.navigate("login")}
      />
      <Button
        title="REGISTER"
        style={styles.but}
        onPress={() => navigation.navigate("register")}
      />
    </View>
  );
}
