import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Together } from "../../assets/images";
import { HomeStyles as styles } from "./Styles";
import {
  Apps,
  Assistant,
  Campaign,
  Donates,
  FindDonor,
  Notification,
  OrderBlood,
  Report,
} from "../../assets/svg";
import { HomeCard } from "../shared/HomeCard";

const HomeList = [
  {
    icon: <FindDonor />,
    title: "Find Donors",
  },
  {
    icon: <Donates />,
    title: "Donates",
  },
  {
    icon: <OrderBlood />,
    title: "Order Bloods",
  },
  {
    icon: <Assistant />,
    title: "Assistant",
  },
  {
    icon: <Report />,
    title: "Report",
  },
  {
    icon: <Campaign />,
    title: "Campaign",
  },
];

export default function Home({ navigation }) {
  return (
    <View stytle={styles.container}>
      <StatusBar style={"dark"} />
      <View style={styles.iconbox}>
        <TouchableOpacity>
          <Apps onPress={() => navigation.navigate("login")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Notification />
        </TouchableOpacity>
      </View>

      <Image source={Together} style={styles.success} />
      <View style={styles.box}>
        {HomeList.map((item, index) => {
          return (
            <HomeCard
              key={index}
              icon={item.icon}
              title={item.title}
              onpress={item.onPress}
            />
          );
        })}
      </View>
    </View>
  );
}
