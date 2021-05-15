import { useQuery } from "@apollo/client";
import React from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { GET_ROOMS, GET_ROOMS_TYPE } from "../queries/getRooms";
import Room from "../components/Room";

interface props {}

export default function Home({}: props) {
  const { data, loading } = useQuery<GET_ROOMS_TYPE>(GET_ROOMS, {
    pollInterval: 60 * 1000,
  });

  return (
    <View style={styles.container}>
      <View>
        {data &&
          data.usersRooms.rooms?.map((room) => (
            <Room
              id={room.id}
              name={room.name}
              key={room.id}
              userId={data.usersRooms.user?.id || ""}
            />
          ))}
      </View>
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
