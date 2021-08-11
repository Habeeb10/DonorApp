import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button } from "../shared/Button";
import { Fillinput } from "../shared/Fillinput";
import { Message } from "../../assets/svg";

export default function Reset({ navigation }) {
  const [email, setEmail] = useState("");
  const handleRest = () => {
    if (!email) {
      return Alert.alert("Warning", "Enter your Email");
    } else navigation.navigate("verify");
  };
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <View style={{ marginTop: 200 }}>
        <Fillinput
          icon={<Message />}
          placeholder="Fahimekan28@gmail.com"
          value={email}
          onchange={setEmail}
        />
        <Text style={styles.password}>
          Your password reset will be send in your registered email address.
        </Text>
        <Button title="Send" style={styles.button} onPress={handleRest} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  password: {
    fontSize: 16,
    fontWeight: "500",
    width: 300,
    textAlign: "center",
    marginTop: 80,
    color: "#7E7E7E",
    alignSelf: "center",
  },
  button: {
    marginTop: 30,
    width: "90%",
  },
  container: {
    flex: 1,
  },
});
