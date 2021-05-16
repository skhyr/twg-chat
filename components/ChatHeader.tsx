import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import PhoneIcon from "../assets/phone.svg";
import VideocallIcon from "../assets/videocall.svg";
import DefaultProfilePic from "../assets/profile.svg";

interface props {
  active: string;
  name: string;
  roomPic: string;
}

export default function ChatHeader({ active, name, roomPic }: props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {roomPic ? (
          <Image
            style={styles.roomPic}
            source={{
              uri: roomPic || undefined,
            }}
          />
        ) : (
          <DefaultProfilePic style={styles.roomPic} height={44} width={44} />
        )}
        <View style={styles.second}>
          <Text style={styles.title} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.active} numberOfLines={1}>
            {active}
          </Text>
        </View>
        <PhoneIcon style={styles.icon} />
        <VideocallIcon style={styles.icon} />
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
    height: 100,
    backgroundColor: "#B6DEFD",
    paddingVertical: 11,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    paddingBottom: 16,
  },
  title: {
    color: "#5603AD",
    fontSize: 16,
    fontFamily: "Poppins-600",
    lineHeight: 24,
  },
  icon: {
    height: 44,
    width: 44,
    marginLeft: 8,
  },
  roomPic: {
    height: 44,
    width: 44,
    borderRadius: 50,
    backgroundColor: "#ececec",
  },
  second: {
    flex: 1,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 12,
  },
  active: {
    fontSize: 14,
    color: "white",
    fontFamily: "SFCompactText",
  },
});
