import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./queries/apolloClient";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./routes/HomeStack";
import LoginStackNavigator from "./routes/LoginStack";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(true);

  if (isLoading)
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