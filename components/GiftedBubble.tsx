import React from "react";
import { Bubble } from "react-native-gifted-chat";
import { View } from "react-native";

export default function GiftedBubble(props: any) {
  return (
    <Bubble
      {...props}
      renderTime={() => <View />}
      wrapperStyle={{
        right: {
          backgroundColor: "#993AFC",
          width: "65%",
          borderRadius: 12,
          borderTopRightRadius: 12,
          borderBottomRightRadius: 0,
          padding: 5,
          marginRight: 16,
          marginVertical: 4,
        },
        left: {
          marginVertical: 6,
          borderRadius: 12,
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 0,
          backgroundColor: "#FFFFFF",
          width: "80%",
          padding: 5,
        },
      }}
      textStyle={{
        right: {
          fontFamily: "SFCompactText",
          fontSize: 14,
        },
        left: {
          fontFamily: "SFCompactText",
          fontSize: 14,
        },
      }}
    />
  );
}
