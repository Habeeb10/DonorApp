import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const RequestInput = ({ placeholder, icon }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: 30 }}>{icon}</View>
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    alignSelf: "center",
    paddingHorizontal: 20,
    width: "90%",
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 10,
    height: 50,
  },
  textInput: {
    marginLeft: 10,
    fontSize: 14,
    color: "#7C7C7C",
  },
});
