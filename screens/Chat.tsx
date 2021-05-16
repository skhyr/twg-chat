import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Composer, GiftedChat, Send } from "react-native-gifted-chat";
import { Message } from "../types/api";
import { useMutation } from "@apollo/client";
import { SEND_MESSAGE } from "../queries/sendMessage";
import SendIcon from "../assets/send.svg";
import GiftedInputToolbar from "../components/GiftedInputToolbar";
import GiftedBubble from "../components/GiftedBubble";
import messagesToGiftedChat from "../utils/messagesToGiftedChat";
import { giftedMessage } from "../types/giftedMessage";
import GiftedComposer from "../components/GiftedComposer";

interface props {
  id: string;
  messages: Message[];
  addMessage: (message: Message) => void;
  userId: string;
}

export default function Chat({
  id: roomId,
  messages,
  addMessage,
  userId,
}: props) {
  const [sendMessage] = useMutation(SEND_MESSAGE);

  const onSend = useCallback((newMessagesGifted: giftedMessage[] = []) => {
    newMessagesGifted.forEach((gm) => {
      sendMessage({
        variables: { body: gm.text, roomId },
      }).then((res) => addMessage(res.data.sendMessage));
    });
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        alwaysShowSend
        placeholder=''
        messages={messagesToGiftedChat(messages)}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: userId }}
        renderSend={(props) => (
          <Send {...props} containerStyle={{
            marginHorizontal: 10,
          }}>
            <SendIcon />
          </Send>
        )}
        renderInputToolbar={GiftedInputToolbar}
        renderBubble={GiftedBubble}
        renderComposer={GiftedComposer}
        renderFooter={()=>(<View style={styles.footer} ></View>)}
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
  footer:{
    height: 24,
  }
});
