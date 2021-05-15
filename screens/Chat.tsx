import { RouteProp, useRoute } from "@react-navigation/core";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomeStackParamsList } from "../types/homeStackParams";
import { GiftedChat } from "react-native-gifted-chat";
import { Message } from "../types/api";
import { useMutation } from "@apollo/client";
import { SEND_MESSAGE } from "../queries/sendMessage";

interface giftedMessage {
  _id: number | string;
  text: string;
  createdAt: number | Date;
  user: {
    _id: number | string;
    name: string;
    avatar: string;
  };
}

export default function Chat() {
  const route = useRoute<RouteProp<HomeStackParamsList, "Chat">>();
  const [messages, setMessages] = useState<Message[]>(route.params.messages);
  const [sendMessage, { data }] = useMutation(SEND_MESSAGE);

  const onSend = useCallback((newMessagesGifted: giftedMessage[] = []) => {
    newMessagesGifted.forEach((gm) =>{
      sendMessage({ variables: { body: gm.text, roomId: route.params.id } })
      .then(res=>console.log(res))
    }
      );
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messagesToGiftedChat(messages)}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: 1 }}
      />
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

function formatDate(dateString: string) {
  let date = [...dateString];
  date[10] = "T";
  return new Date(date.join(""));
}

function messagesToGiftedChat(messages: Message[]): giftedMessage[] {
  return messages
    .map((message) => ({
      _id: message.id,
      text: message.body,
      createdAt: formatDate(message.insertedAt),
      user: {
        _id: message.user.id,
        name: `${message.user.firstName}`,
        avatar: message.user.profilePic,
      },
    }))
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}
