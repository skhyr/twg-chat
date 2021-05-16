import { useQuery } from "@apollo/client";
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View, Image, Pressable, Modal } from "react-native";
import { GET_ROOM, GET_ROOM_TYPE } from "../queries/getRoom";
import { Message } from "../types/api";
import Chat from "../screens/Chat";
import DefaultProfilePic from "../assets/profile.svg";

interface props {
  id: string;
  name: string;
  userId: string;
}

export default function Room({ id, name, userId }: props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [showChat, setShowChat] = useState(false);
  const [unread, setUnread] = useState(false);
  const { data, loading } = useQuery<GET_ROOM_TYPE>(GET_ROOM, {
    variables: { id },
    pollInterval: 1 * 1000,
  });

  const addMessage = useCallback((message: Message) => {
    setMessages((o) => [...o, message]);
  }, []);

  const handleClick = useCallback(() => {
    setShowChat(true);
  }, []);

  useEffect(() => {
    if (!data?.room.messages) return;
    setMessages(data?.room.messages);
  }, [data?.room.messages]);

  useEffect(() => {
    if (showChat) setUnread(false);
  }, [showChat]);

  return (
    <Pressable onPress={handleClick}>
      <View style={styles.container}>
        {data?.room.roomPic ? (
          <Image
            style={styles.roomPic}
            source={{
              uri: data?.room.roomPic || undefined,
            }}
          />
        ) : (
          <DefaultProfilePic />
        )}
        <View style={styles.right}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {data?.room.messages &&
              data.room.messages[data.room.messages.length - 1]?.body}
          </Text>
        </View>
      </View>
      <Modal
        visible={showChat}
        onRequestClose={() => setShowChat(false)}
        animationType="slide"
      >
        <Chat
          id={id}
          messages={messages}
          addMessage={addMessage}
          userId={userId}
        />
      </Modal>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 80,
    backgroundColor: "white",
    marginVertical: 6,
    width: "100%",
    padding: 15,
    flexDirection: "row",
    borderRadius: 12,
  },
  roomPic: {
    height: 64,
    width: 64,
    borderRadius: 50,
    backgroundColor: "#ececec",
  },
  right: {
    flex: 1,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  name: {
    fontFamily: "Poppins-500",
    fontSize: 15,
  },
  lastMessage: {
    fontFamily: "Poppins-400",
    fontSize: 14,
  },
});
