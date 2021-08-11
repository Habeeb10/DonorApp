import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Button } from "../shared/Button";
import OTPInputView from "@twotalltotems/react-native-otp-input";

export default function Verify({ navigation }) {
  const [otpcode, setOtpcode] = useState("");
  const handleVerify = () => {
    if (!otpcode) {
      return Alert.alert("Warning", "Enter otp sent to your phone");
    } else navigation.navigate("finish");
  };
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <OTPInputView
        style={{
          width: "70%",
          height: 190,
          alignSelf: "center",
          marginTop: 150,
        }}
        pinCount={4}
        code={otpcode}
        onCodeChanged={setOtpcode}
        codeInputFieldStyle={styles.underlineStyleBase}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
        placeholderTextColor="black"
      />
      <Text style={styles.code}>Resend Code 49 Sec</Text>
      <Button title="Verify" style={styles.but} onPress={handleVerify} />
    </View>
  );
}

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 50,
    height: 45,
    borderBottomWidth: 1,
    color: "black",
    fontSize: 18,
  },

  code: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 26,
    color: "#FF2156",
    marginLeft: 220,
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 70,
  },
  container: {
    flex: 1,
  },
});
