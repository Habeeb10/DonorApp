import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export const DonorCard = ({
  bloodgroup,
  identity,
  address,
  onPress,
  icon,
  icon2,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.normal}>
        <Image resizeMode="contain" style={styles.image} source={icon} />
        <View>
          <Text style={styles.identity}>{identity}</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={{ marginTop: 10, marginRight: 5 }}>{icon2}</View>
            <Text style={styles.address}>{address}</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>{bloodgroup}</View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  address: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "500",
    color: "#7E7E7E",
    width: 148,
  },
  identity: {
    fontSize: 16,
    fontWeight: "500",
    color: "#272A2F",
    marginTop: 20,
  },
  image: {
    width: 85,
    height: 70,
    marginTop: 10,
  },

  normal: {
    height: 90,
    width: 345,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "space-between",
    marginTop: 20,
    flexDirection: "row",
    paddingHorizontal: 10,
    marginLeft: 20,
  },
});
