import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../shared/Header";
import { Help, Send, Slogo } from "../../assets/svg";
import { AssistantStyles as styles } from "./Styles";

export default function Assistant({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.contbox1}>
        <Header
          onPress={() => navigation.navigate("report")}
          title="Assistant"
          headerStyle={styles.header}
        />
        <TouchableOpacity style={styles.logobox1}>
          <Help />
        </TouchableOpacity>
      </View>
      <View style={styles.contbox2}>
        <View style={styles.logobox}>
          <Slogo />
        </View>
        <View style={styles.textbox}>
          <Text style={styles.fahim}>
            Good Morning, Fahim. Choose one of the following options to get
            started.
          </Text>
          <TouchableOpacity style={styles.donatebox}>
            <Text style={styles.donate}>Check donate instruction</Text>
          </TouchableOpacity>
          <View style={styles.donatebox}>
            <Text style={styles.donate}>Check donate instruction</Text>
          </View>
          <View style={styles.donatebox1}>
            <Text style={styles.donate}>Check donate instruction</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.instructionbox}>
        <Text style={styles.check}>Check donate instruction</Text>
      </TouchableOpacity>
      <View style={styles.greatbox}>
        <View style={styles.logobox2}>
          <Slogo />
        </View>
        <View>
          <View style={styles.greatcont1}>
            <Text>That’s great, Fahim.</Text>
          </View>
          <View style={styles.greatcont2}>
            <Text style={styles.group}>
              Can you tell me the group of your blood?
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.bloodgroupbox}>
        <Text style={styles.check}>AB+</Text>
      </TouchableOpacity>
      <View style={styles.sendboox}>
        <TextInput
          placeholder="Write a message"
          placeholderTextColor="#C9C9C9"
        />
        <Send onPress={() => navigation.navigate("request")} />
      </View>
    </View>
  );
}
