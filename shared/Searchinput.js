import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SearchIcon, Uparrow } from "../assets/svg";

export const Searchinput = ({ placeholder, icon, style }) => {
  return (
    <View style={styles.container}>
      <View>{(icon = <SearchIcon />)}</View>

      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    alignSelf: "center",
    paddingHorizontal: 20,
    width: "76%",
    marginTop: 20,
    height: 35,
  },
  textInput: {
    marginLeft: 10,
    fontSize: 15,
  },
});
