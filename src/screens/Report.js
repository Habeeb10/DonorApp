import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Header } from "../shared/Header";
import { Location } from "../../assets/svg";
import { Button } from "../shared/Button";
import { Tube } from "../../assets/images";
import { ReportCard } from "../shared/ReportCard";

const ReportList = [
  {
    number: 6,
    litre: "mmol/L",
    label: "Glucose",
  },
  {
    number: 6.2,
    litre: "mmol/L",
    label: "Cholesterol",
  },
  {
    number: 12,
    litre: "mmol/L",
    label: "Bilirubin",
  },
  {
    number: 3.6,
    litre: "ml/L",
    label: "RBC",
  },
  {
    number: 102,
    litre: "fl",
    label: "MCV",
  },
  {
    number: 276,
    litre: "bL",
    label: "Platelets",
  },
];

export default function Report({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <Header title="Report" headerStyle={styles.head} />
      <View style={styles.locationbox}>
        <Location />
        <Text style={styles.center}>Reseach Center</Text>
      </View>
      <Text style={styles.dhaka}>Dhaka Medical College, Dhaka.</Text>
      <Image source={Tube} style={styles.tube} />
      <View style={styles.mapbox}>
        {ReportList.map((item, index) => {
          return (
            <ReportCard
              key={index}
              number={item.number}
              litre={item.litre}
              label={item.label}
            />
          );
        })}
      </View>
      <Button
        title="Apply"
        style={styles.button}
        onPress={() => navigation.navigate("assistant")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mapbox: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 40,
  },
  tube: {
    marginTop: 50,
    width: 240,
    height: 210,
    alignSelf: "center",
    marginRight: 50,
  },
  button: {
    marginTop: 40,
    width: 188,
    height: 44,
  },
  dhaka: {
    color: "#7E7E7E",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 21,
    textAlign: "center",
    marginTop: 5,
  },
  center: {
    color: "#7E7E7E",
    fontWeight: "500",
    fontSize: 12,
    marginLeft: 5,
    lineHeight: 21,
  },
  head: {
    marginRight: 130,
  },
  locationbox: {
    flexDirection: "row",
    paddingHorizontal: 15,
    marginTop: 20,
    alignItems: "center",
    alignSelf: "center",
  },

  container: {
    flex: 1,
  },
});
