import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const SearchCard = ({ group, onpress }) => {
  return (
    <TouchableOpacity style={styles.click} onpress={onpress}>
      <Text style={styles.group}>{group}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  group: {
    fontSize: 10,
  },
  click: {
    height: 30,
    width: 50,
    backgroundColor: "#E5E5E5",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
  },
});
