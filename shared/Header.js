import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Back } from "../assets/svg";

export const Header = ({ icon, title, onpress, headerStyle }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onpress={onpress} style={styles.touch}>
        {(icon = <Back />)}
      </TouchableOpacity>
      <Text style={[styles.title, headerStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  touch: {
    width: 40,
    height: 40,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  container: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 70,
    flexDirection: "row",
  },
  title: {
    color: "#272A2F",
    fontSize: 22,
    fontWeight: "500",
    lineHeight: 33,
    alignSelf: "center",
    marginRight: 100,
  },
});
