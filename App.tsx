import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./queries/apolloClient";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./routes/HomeStack";
import LoginStackNavigator from "./routes/LoginStack";
import { useFonts } from "expo-font";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(false);

  const [fontsLoaded] = useFonts({
    "Poppins-100": require("./assets/fonts/Poppins/Poppins-Thin.ttf"),
    "Poppins-200": require("./assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    "Poppins-300": require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    "Poppins-400": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-500": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    "Poppins-600": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-700": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-800": require("./assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
    "Poppins-900": require("./assets/fonts/Poppins/Poppins-Black.ttf"),
    "SFCompactText": require("./assets/fonts/SFCompactText.ttf"),
  });

  if (isLoading || !fontsLoaded)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );

  return (
      <ApolloProvider client={apolloClient}>
        <NavigationContainer>
            {token ? <HomeStackNavigator /> : <LoginStackNavigator />}
        </NavigationContainer>
      </ApolloProvider>
  );
}