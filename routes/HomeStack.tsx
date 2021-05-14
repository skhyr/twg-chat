import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import HomeHeader from "../components/HomeHeader";

const Stack = createStackNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={{ header: () => <HomeHeader /> }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default HomeStackNavigator;
