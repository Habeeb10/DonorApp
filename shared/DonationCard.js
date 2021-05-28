import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { color } from "react-native-reanimated";

export const DonationCard = ({
  icon,
  location,
  title,
  fullname,
  place,
  time,
  donate,
}) => {
  return (
    <View style={styles.normal}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.full}>{fullname}</Text>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.place}>{place}</Text>
        </View>
        <View style={{ marginTop: 5 }}>{icon}</View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.donate}>{donate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    color: "#7E7E7E",
    fontSize: 13,
    // marginTop: 10,
  },
  donate: {
    color: "#FF2156",
    fontSize: 15,
    fontWeight: "500",
  },
  title: {
    marginTop: 10,
    color: "#7E7E7E",
    fontSize: 13,
  },

  location: {
    color: "#7E7E7E",
    fontSize: 13,
  },
  place: {
    color: "#272A2F",
    fontWeight: "500",
    fontSize: 13,
  },
  full: {
    marginBottom: 10,
    color: "#272A2F",
    fontWeight: "500",
    fontSize: 13,
  },

  normal: {
    height: 125,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "space-between",
    // alignItems:"center",
    marginTop: 20,
    // flexDirection:"row"
    paddingHorizontal: 20,
    // marginTop: 40,
  },
});
