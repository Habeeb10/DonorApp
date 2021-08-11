import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Navigator from "./src/Navigator/MainNavigation";
import Splashscreen from "./src/screens/splash/splash";

export default function App() {
  const [isVisible, setVisible] = useState(true);
  const showScreen = () => {
    setVisible(false);
  };

  useEffect(() => {
    setTimeout(function () {
      showScreen();
    }, 10000);
  });

  return (
    <View style={styles.MainContainer}>
      {isVisible === true ? <Splashscreen /> : <Navigator />}
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

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
    backgroundColor: "#FF2156",
    flex: 1,
  },
});
