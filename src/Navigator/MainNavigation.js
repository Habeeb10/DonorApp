import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Onboarding from "../screens/Onboarding";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Reset from "../screens/Reset";
import Verify from "../screens/Verify";
import Finish from "../screens/Finish";
import Home from "../screens/Home";
import DonationRequest from "../screens/Donationrequest";
import Search from "../screens/Search";
import MyTabs from "./TabNavigation";
import Report from "../screens/Report";
import Assistant from "../screens/Assistant";
import Request from "../screens/Request";
import Splashscreen from "../screens/splash/splash";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="reset" component={Reset} />
        <Stack.Screen name="verify" component={Verify} />
        <Stack.Screen name="finish" component={Finish} />
        <Stack.Screen name="home" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
