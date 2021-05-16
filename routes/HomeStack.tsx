import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import HomeHeader from "../components/HomeHeader";
import { HomeStackParamsList } from '../types/homeStackParams'

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={{ header: () => <HomeHeader /> }} >
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default HomeStackNavigator;
