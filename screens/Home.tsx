import { useQuery } from "@apollo/client";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GET_ROOMS, GET_ROOMS_TYPE } from "../queries/getRooms";

export default function Home() {

  const { data, loading } = useQuery<GET_ROOMS_TYPE>(GET_ROOMS);

  return (
    <View style={styles.container}>
      <View>{data && data.usersRooms.rooms?.map(room=>(
        <View style={styles.room} key={room.id}>
          <Text>{room.id}</Text>
          <Text>{room.name}</Text>
        </View>
      ))}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#F0F8FF",
  },

  room:{
    height: 80,
    backgroundColor: 'white',
    marginVertical: 5,
    width: '100%',
    borderRadius: 15,
    padding: 15,
  }

});
