import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as Colors from "../common/colors";
import AppIntroSlider from "react-native-app-intro-slider";
import { Slide1, Slide2 } from "../../assets/images";

const slides = [
  {
    key: 1,
    image: Slide1,
    topic: "Find Blood Donors",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu tristique tristique quam in.",
  },
  {
    key: 2,
    image: Slide2,
    topic: "Post A Blood Request",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu tristique tristique quam in.",
  },
];

export default function Welcome({ navigation }) {
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.topic}>{item.topic}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <Text style={{ color: "black", marginTop: 9, fontSize: 18 }}>Done</Text>
    );
  };

  const _renderNextButton = () => {
    return (
      <Text style={{ color: "black", marginTop: 9, fontSize: 18 }}>Next</Text>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style={"dark"} />
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        dotStyle={{ backgroundColor: "#E0E0E0" }}
        activeDotStyle={{ backgroundColor: "#FF2156", width: 30 }}
        onDone={() => navigation.navigate("onboarding")}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#7E7E7E",
    width: 290,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 20,
  },
  topic: {
    marginTop: 30,
    color: "#272A2F",
    marginBottom: 5,
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 36,
  },
  image: {
    width: 280,
    height: 265,
    marginTop: 100,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  slide: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
