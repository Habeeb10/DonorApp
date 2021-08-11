import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

export default function Splashscreen() {
  return (
    <View style={styles.SplashScreen_RootView}>
      <StatusBar style={"dark"} />
      <View style={styles.SplashScreen_ChildView}>
        <Image
          source={require("../../../assets/images/Logo.png")}
          style={{ width: 250, height: 250, resizeMode: "contain" }}
        />

        <Text
          style={{
            marginTop: 20,
            color: "#FF2156",
            fontSize: 33,
            fontWeight: "600",
            lineHeight: 49,
          }}
        >
          Dare To Donate
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SplashScreen_RootView: {
    justifyContent: "center",
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  SplashScreen_ChildView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
});
