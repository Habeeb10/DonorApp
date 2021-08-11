import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ProfileCard = ({ onPress, icon, title, toggle }) => {
  return (
    <View>
      <View onPress={onPress} style={styles.normal}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View>{icon}</View>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>

        <View
          style={{
            marginLeft: 110,
            alignSelf: "center",
            backgroundColor: "#FF2156",
            borderRadius: 50,
            width: 60,
            // height: 20,
            // justifyContent: "center",
          }}
        >
          {toggle}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: "500",
    color: "#7C7C7C",
    // marginTop: 20,
    marginLeft: 10,
  },
  image: {
    width: 85,
    height: 70,
    marginTop: 10,
  },

  normal: {
    height: 45,
    width: 345,
    backgroundColor: "white",
    // justifyContent: "space-between",
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
    marginLeft: 20,
    alignItems: "center",
  },
});
