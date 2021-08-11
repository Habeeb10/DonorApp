import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { BloodGroup } from "../../assets/svg";
import { DonationCard } from "../shared/DonationCard";
import { Header } from "../shared/Header";
import { DonationStyles as styles } from "./Styles";

const DonationList = [
  {
    icon: <BloodGroup />,
    title: "Name",
    fullname: "Amir Hamza",
    location: "Location",
    place: "Hertford British Hospital",
    time: "5 min ago",
    donate: "Donate",
  },
  {
    icon: <BloodGroup />,
    title: "Name",
    fullname: "Abdul Qader",
    location: "Location",
    place: "Apollo Hospital",
    time: "16 min ago",
    donate: "Donate",
  },
  {
    icon: <BloodGroup />,
    title: "Name",
    fullname: "Irfan Hasan",
    location: "Location",
    place: "Square Hospital",
    time: "45 min ago",
    donate: "Donate",
  },
  {
    icon: <BloodGroup />,
    title: "Name",
    fullname: "Ertugrul Gazi",
    location: "Location",
    place: "Popular Hospital",
    time: "59 min ago",
    donate: "Donate",
  },
];

export default function DonationRequest({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <Header
        title="Donation Request"
        headerStyle={styles.header}
        onPress={() => navigation.navigate("home")}
      />
      <View style={styles.box}>
        {DonationList.map((item, index) => {
          return (
            <DonationCard
              key={index}
              icon={item.icon}
              title={item.title}
              fullname={item.fullname}
              location={item.location}
              place={item.place}
              time={item.time}
              donate={item.donate}
              onPress={() => navigation.navigate("report")}
            />
          );
        })}
      </View>
    </View>
  );
}
