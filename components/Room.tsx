import { useQuery } from "@apollo/client";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { GET_ROOM, GET_ROOM_TYPE } from "../queries/getRoom";
import { useNavigation} from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamsList } from "../types/homeStackParams";

interface props {
  id: string;
  name: string;
}

export default function Room({ id, name }: props) {
  const { data, loading } = useQuery<GET_ROOM_TYPE>(GET_ROOM, {
    variables: { id },
  });

  const navigation =
    useNavigation<StackNavigationProp<HomeStackParamsList, "Home">>();

  return (
    <Pressable onPress={()=>navigation.navigate("Chat", {id, messages: data?.room.messages || []})} >
      <View style={styles.container}>
        <Image
          style={styles.roomPic}
          source={{
            uri: data?.room.roomPic || undefined,
          }}
        />
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
