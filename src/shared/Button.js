import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ title, onPress, style, titleStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.container, style]}
    >
      <Text style={[styles.button, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 50,
    backgroundColor: "#FF2156",
    borderRadius: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "500",
  },
});
