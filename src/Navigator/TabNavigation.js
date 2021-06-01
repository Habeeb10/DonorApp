import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DonationRequest from "../screens/Donationrequest";
import Search from "../screens/Search";
import Home from "../screens/Home";
import Report from "../screens/Report";
import Assistant from "../screens/Assistant";
import Request from "../screens/Request";
import { HomeIcon, LineChart, SearchIcon, UserIcon } from "../../assets/svg";
import Profile from "../screens/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import FindDonor from "../screens/FindDonor";

const Tab = createBottomTabNavigator();
const DonationStack = createStackNavigator();

function DonationStackScreen() {
  return (
    <DonationStack.Navigator headerMode={false}>
      <DonationStack.Screen
        name="donationrequest"
        component={DonationRequest}
      />
      <DonationStack.Screen name="search" component={Search} />
      <DonationStack.Screen name="report" component={Report} />
      <DonationStack.Screen name="assistant" component={Assistant} />
      <DonationStack.Screen name="request" component={Request} />
      <DonationStack.Screen name="finddonor" component={FindDonor} />
    </DonationStack.Navigator>
  );
}

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "home") {
            return <HomeIcon color={focused ? "red" : "#9586A8"} />;
          } else if (route.name === "search") {
            return <SearchIcon color={focused ? "red" : "#B2B2B2"} />;
          } else if (route.name === "donationrequest") {
            return <LineChart color={focused ? "red" : "#9586A8"} />;
          } else if (route.name === "profile") {
            return <UserIcon color={focused ? "red" : "#9586A8"} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "#9586A8",
      }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="search" component={Search} />
      <Tab.Screen name="donationrequest" component={DonationStackScreen} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}
