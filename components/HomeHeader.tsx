import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SearchIcon from "../assets/search.svg";
import RoomsIcon from "../assets/rooms.svg";

interface props {}

export default function HomeHeader({}: props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rooms</Text>
        <SearchIcon style={styles.icon} />
        <RoomsIcon style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#F0F8FF",
  },
  header: {
    height: 125,
    backgroundColor: "#B6DEFD",
    paddingVertical: 11,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  title: {
    flex: 1,
    color: "#5603AD",
    fontSize: 36,
    fontWeight: "700",
  },
  icon: {
    height: 44,
    width: 44,
    marginLeft: 8,
  },
});
