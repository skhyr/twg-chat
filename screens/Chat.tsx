import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
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

interface props{
  id: string,
  messages: Message[],
  addMessage:(message: Message)=>void,
  userId: string,
}

export default function Chat({id: roomId, messages, addMessage, userId}:props) {
  const [sendMessage, { data }] = useMutation(SEND_MESSAGE);

  const onSend = useCallback((newMessagesGifted: giftedMessage[] = []) => {
    newMessagesGifted.forEach((gm) => {
      sendMessage({
        variables: { body: gm.text, roomId },
      }).then((res) => {
        console.log(res.data.sendMessage);
        addMessage(res.data.sendMessage);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messagesToGiftedChat(messages)}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: userId }}
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
