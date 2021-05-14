import { RouteProp, useRoute } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Room from "../components/Room";
import { HomeStackParamsList } from "../types/homeStackParams";

interface props{
}

export default function Chat({ }: props) {

  const route = useRoute<RouteProp<HomeStackParamsList, 'Chat'>>()

  return (
    <View style={styles.container}>
      <Text>Chat page {route.params.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F0F8FF",
    paddingTop: 18,
  },
});
