import { useQuery } from "@apollo/client";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GET_ROOM, GET_ROOM_TYPE } from "../queries/getRoom";

interface props {
  id: string;
}

export default function Room({ id }: props) {
  const { data, loading } = useQuery<GET_ROOM_TYPE>(GET_ROOM, {
    variables: { id },
  });

  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <Text>{data?.room.name}</Text>
      <Text>
        {data?.room.messages &&
          data.room.messages[data.room.messages.length - 1]?.body}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "white",
    marginVertical: 5,
    width: "100%",
    borderRadius: 15,
    padding: 15,
  },
});
