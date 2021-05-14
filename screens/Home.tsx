import { useQuery } from "@apollo/client";
import React from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { GET_ROOMS, GET_ROOMS_TYPE } from "../queries/getRooms";
import Room from "../components/Room";
import { useNavigation} from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamsList } from "../types/homeStackParams";

interface props {}

export default function Home({}: props) {
  const navigation =
    useNavigation<StackNavigationProp<HomeStackParamsList, "Home">>();
  const { data, loading } = useQuery<GET_ROOMS_TYPE>(GET_ROOMS);

  return (
    <View style={styles.container}>
      <View>
        {data &&
          data.usersRooms.rooms?.map((room) => (
            <Pressable
              key={room.id}
              onPress={() => navigation.navigate('Chat', {id: room.id})}
            >
              <Room id={room.id} name={room.name} key={room.id} />
            </Pressable>
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
