import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const ReportCard = ({ label, litre, onpress, number }) => {
  return (
    <TouchableOpacity style={styles.click} onpress={onpress}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.litre}>{litre}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  number: {
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 30,
  },
  label: {
    color: "#B1B1B1",
    fontSize: 12,
    fontWeight: "500",
  },
  litre: {
    marginLeft: 5,
    marginTop: 5,
  },
  click: {
    height: 70,
    width: 107,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
