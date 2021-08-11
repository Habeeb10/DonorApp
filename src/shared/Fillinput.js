import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const Fillinput = ({ placeholder, icon, onchange, value }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: 30 }}>{icon}</View>
      <View
        style={{
          width: 2,
          height: 50,
          backgroundColor: "#D6D6D6",
          marginLeft: 8,
        }}
      ></View>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onchange}
        value={value}
        keyboardType="default"
      />
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
    width: "85%",
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 10,
  },
  textInput: {
    marginLeft: 20,
    fontSize: 12,
    paddingRight: 20,
  },
});
