import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button } from "../shared/Button";
import { Success } from "../../assets/images";
import { FinishStyles as styles } from "./Styles";
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
