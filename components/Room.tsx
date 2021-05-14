import { useQuery } from "@apollo/client";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { GET_ROOM, GET_ROOM_TYPE } from "../queries/getRoom";

interface props {
  id: string;
  name: string;
}

export default function Room({ id, name }: props) {
  const { data, loading } = useQuery<GET_ROOM_TYPE>(GET_ROOM, {
    variables: { id },
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.roomPic}
        source={{
          uri: data?.room.roomPic || undefined,
        }}
      />
      <View style={styles.right}>
        <Text style={styles.name}>{name}</Text>
        <Text>
          {data?.room.messages &&
            data.room.messages[data.room.messages.length - 1]?.body}
        </Text>
      </View>
    </View>
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
  },
  name: {
    fontWeight: "500",
    fontSize: 15,
  },
  lastMessage: {
    fontWeight: "400",
    fontSize: 14,
  },
});
