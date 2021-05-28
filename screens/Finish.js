import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../shared/Button";
import { Success } from "../assets/images";

export default function Finish({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <Image source={Success} style={styles.success} />
      <Button
        title="Finish"
        style={styles.but}
        onPress={() => navigation.navigate("home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  but: {
    marginTop: 20,
  },
  success: {
    width: 230,
    height: 230,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 100,
  },
  code: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 26,
    color: "#FF2156",
    marginLeft: 260,
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
});
