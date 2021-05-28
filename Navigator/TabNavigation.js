import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DonationRequest from "../screens/Donationrequest";
import Search from "../screens/Search";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="search" component={Search} />
      <Tab.Screen name="donationrequest" component={DonationRequest} />
    </Tab.Navigator>
  );
}
