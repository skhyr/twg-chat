import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import { View } from "react-native";

const Stack = createStackNavigator();

const LoginStackNavigator = () => (
  <Stack.Navigator screenOptions={{ header: () => <View></View> }} >
    <Stack.Screen name="Login" component={Login}  />
  </Stack.Navigator>
);

export default LoginStackNavigator;
