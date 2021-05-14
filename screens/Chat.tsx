import { RouteProp, useRoute } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Room from "../components/Room";
import { HomeStackParamsList } from "../types/homeStackParams";
import { GiftedChat } from "react-native-gifted-chat";

interface message{
  _id: number | string,
  text: string,
  createdAt: number | Date,
  user: {
    _id: number | string,
    name: string,
    avatar: string,
  }
}

export default function Chat() {
  const route = useRoute<RouteProp<HomeStackParamsList, "Chat">>();
  const [messages, setMessages] = useState<message[]>(route.params.messages.map(message=>({
    _id: message.id,
    text: message.body,
    createdAt: formatDate(message.insertedAt),
    user:{
      _id: message.user.id,
      name: `${message.user.firstName}`,
      avatar: message.user.profilePic,
    }
  })));

  return (
    <View style={styles.container}>
      <GiftedChat messages={messages} onSend={() => {}} user={{ _id: 1 }} />
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

function formatDate(dateString: string){
  let date = [...dateString];
  date[10] = 'T';
  return new Date(date.join(""));
}
